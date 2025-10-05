// Shared AI Tools data for search and filtering across the app
export const allAITools = [
  // TEXT & LANGUAGE AI TOOLS
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI, adept at generating human-like text across various domains.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation']
  },
  {
    id: 'claude',
    name: 'Claude by Anthropic',
    description: 'A large language model focusing on safety and usability.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Writing Support']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s AI offering with capabilities in text generation and more.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://gemini.google.com',
    features: ['AI Chatbot', 'Text Summarization', 'Research Assistant']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator creating highly stylized images.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://midjourney.com',
    features: ['AI Art', 'Image Generation', 'Creative Design']
  },
  {
    id: 'dalle',
    name: 'DALL·E 3',
    description: 'OpenAI\'s image generation model.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://openai.com/dall-e-3',
    features: ['Image Generation', 'AI Art', 'Text-to-Image']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generator.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Text-to-Speech', 'Multilingual']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Industry-leading data visualization platform with AI insights.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://tableau.com',
    features: ['Data Visualization', 'AI Analytics', 'Business Intelligence']
  }
];

export type AITool = typeof allAITools[0];
