import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// AI Tools database - keep in sync with src/data/aiTools.ts
const allAITools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI, adept at generating human-like text across various domains.',
    category: 'text',
    pricing: 'freemium',
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation']
  },
  {
    id: 'claude',
    name: 'Claude by Anthropic',
    description: 'A large language model focusing on safety and usability.',
    category: 'text',
    pricing: 'freemium',
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Writing Support']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s AI offering with capabilities in text generation and more.',
    category: 'text',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://gemini.google.com',
    features: ['AI Chatbot', 'Text Summarization', 'Research Assistant']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator creating highly stylized images.',
    category: 'image',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['AI Art', 'Image Generation', 'Creative Design']
  },
  {
    id: 'dalle',
    name: 'DALL·E 3',
    description: 'OpenAI\'s image generation model.',
    category: 'image',
    pricing: 'paid',
    rating: 4.7,
    url: 'https://openai.com/dall-e-3',
    features: ['Image Generation', 'AI Art', 'Text-to-Image']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generator.',
    category: 'voice',
    pricing: 'freemium',
    rating: 4.8,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Text-to-Speech', 'Multilingual']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Industry-leading data visualization platform with AI insights.',
    category: 'data',
    pricing: 'paid',
    rating: 4.8,
    url: 'https://tableau.com',
    features: ['Data Visualization', 'AI Analytics', 'Business Intelligence']
  }
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    
    if (!query || query.trim() === '') {
      return new Response(
        JSON.stringify({ error: 'Query is required' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processing recommendation request for query:', query);

    // Build context about available tools
    const toolsContext = allAITools.map(tool => 
      `ID: ${tool.id}, Name: ${tool.name}, Category: ${tool.category}, Description: ${tool.description}, Features: ${tool.features.join(', ')}`
    ).join('\n');

    const systemPrompt = `You are an AI tool recommendation expert. Based on the user's query, recommend the most relevant AI tools from the available database.

Available AI Tools:
${toolsContext}

Instructions:
- Analyze the user's needs and intent
- Recommend 2-5 most relevant tools (use tool IDs from the list)
- Provide a brief reason for each recommendation
- Order by relevance (most relevant first)
- Consider category, features, and use case match`;

    // Call Lovable AI with structured output
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'recommend_tools',
              description: 'Return recommended AI tools based on user query',
              parameters: {
                type: 'object',
                properties: {
                  recommendations: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        toolId: { 
                          type: 'string',
                          description: 'The ID of the recommended tool from the database'
                        },
                        reason: { 
                          type: 'string',
                          description: 'Brief explanation of why this tool is recommended'
                        },
                        relevanceScore: {
                          type: 'number',
                          description: 'Relevance score from 0-10'
                        }
                      },
                      required: ['toolId', 'reason', 'relevanceScore']
                    }
                  }
                },
                required: ['recommendations']
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'recommend_tools' } }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }), 
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }), 
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Failed to get AI recommendations' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const aiResponse = await response.json();
    console.log('AI Response received');

    // Extract tool call results
    const toolCall = aiResponse.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      console.error('No tool call in AI response');
      return new Response(
        JSON.stringify({ error: 'Invalid AI response format' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const recommendations = JSON.parse(toolCall.function.arguments).recommendations;
    
    // Validate and filter recommendations to only include valid tool IDs
    const validRecommendations = recommendations
      .filter((rec: any) => allAITools.some(tool => tool.id === rec.toolId))
      .slice(0, 5); // Limit to 5 recommendations

    console.log(`Returning ${validRecommendations.length} recommendations`);

    return new Response(
      JSON.stringify({ 
        query,
        recommendations: validRecommendations 
      }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in recommend-tools function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
