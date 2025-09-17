import { useState } from 'react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';
import { FileText, Sparkles } from 'lucide-react';

const textAITools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI, adept at generating human-like text across various domains.',
    detailedDescription: 'ChatGPT is a conversational AI developed by OpenAI, capable of understanding and generating human-like text. It can answer questions, write essays, generate code, and even simulate conversations.',
    models: ['GPT-3.5 (fast, cheaper)', 'GPT-4 (more accurate, creative, handles complex queries)', 'GPT-4 Turbo (optimized for speed and cost)'],
    howItWorks: 'Input your query in natural language. The model predicts the most likely next words based on the context. It generates coherent and relevant responses.',
    howToUse: 'Website: chat.openai.com, API: OpenAI API (requires API key), Use for writing, coding help, research, learning, and casual conversations.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free tier available; ChatGPT Plus $20/month.',
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation'],
    keywords: ['Conversational AI', 'Writing Assistant', 'Code Generation', 'Research Aid', 'Chatbot']
  },
  {
    id: '2',
    name: 'Claude by Anthropic',
    description: 'A large language model focusing on safety and usability, suitable for diverse writing tasks.',
    detailedDescription: 'Claude is a large language model designed for safety and usability. It can summarize text, generate creative content, and assist with research.',
    models: ['Claude 1, 2, 3 (varied performance and safety features)'],
    howItWorks: 'Uses a "Constitutional AI" approach to follow ethical guidelines while generating text. Can analyze and summarize large documents safely.',
    howToUse: 'Website: app.anthropic.com, API: Available for enterprise and developer use.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free plan; paid subscription for extended usage.',
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Writing Support', 'Research Tool'],
    keywords: ['Safe AI', 'Text Summarization', 'Writing Assistant', 'Research Tool', 'AI Chatbot']
  },
  {
    id: '3',
    name: 'Google Gemini',
    description: 'Google\'s AI offering with capabilities in text generation, summarization, and more.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://gemini.google.com',
    features: ['AI Chatbot', 'Text Summarization', 'Research Assistant', 'Video Creation']
  },
  {
    id: '4',
    name: 'Jasper',
    description: 'AI writing assistant tailored for marketers, bloggers, and content creators.',
    detailedDescription: 'Jasper AI is a content-generation tool for marketers and bloggers. It creates SEO-optimized blog posts, ad copies, and social media content.',
    models: ['OpenAI GPT-3.5 / GPT-4 (Jasper uses these models internally)'],
    howItWorks: 'Input topic, tone, and style. Jasper generates content using AI-powered templates. Users can edit or expand generated text.',
    howToUse: 'Website: jasper.ai, Use templates for blogs, emails, social media posts, or ads.',
    category: 'text',
    pricing: 'paid' as const,
    pricingDetails: 'Paid starting $49/month (no full free plan).',
    rating: 4.4,
    url: 'https://jasper.ai',
    features: ['Copywriting', 'Blog Writing', 'SEO', 'Content Marketing'],
    keywords: ['Content Creation', 'Marketing Copy', 'Blog Writing', 'SEO', 'Social Media']
  },
  {
    id: '5',
    name: 'Writesonic',
    description: 'Generates high-quality content for blogs, ads, and social media.',
    detailedDescription: 'Writesonic generates marketing content, blog posts, ads, and product descriptions quickly. It also provides AI chatbots and summarizers.',
    models: ['GPT-3.5 / GPT-4', 'Proprietary AI models optimized for marketing content'],
    howItWorks: 'Select use case (blog, ad copy, landing page). Enter basic info (topic, keywords). AI generates content with multiple variations.',
    howToUse: 'Website: writesonic.com, Export content directly for websites or social media.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free trial; paid plans from $19/month.',
    rating: 4.3,
    url: 'https://writesonic.com',
    features: ['Content Creation', 'Marketing Copy', 'SEO', 'Blog Posts'],
    keywords: ['Blog Writing', 'Marketing Copy', 'Ads', 'SEO', 'Content Generator']
  },
  {
    id: '6',
    name: 'Copy.ai',
    description: 'AI tool for generating marketing copy, emails, and more.',
    detailedDescription: 'Copy.ai is an AI writing tool focused on creating marketing copy, email content, and creative ideas.',
    models: ['OpenAI GPT-3.5 / GPT-4'],
    howItWorks: 'Choose a template (e.g., email, product description). Input topic or description. Copy.ai generates multiple variations for editing.',
    howToUse: 'Website: copy.ai, Ideal for small businesses, marketers, and e-commerce content.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free plan; Pro $49/month.',
    rating: 4.2,
    url: 'https://copy.ai',
    features: ['Marketing Copy', 'Email Templates', 'Social Media Content', 'Ad Copy'],
    keywords: ['Marketing Copy', 'Email Templates', 'Social Media', 'Ad Copy', 'Brainstorming']
  },
  {
    id: '7',
    name: 'Rytr',
    description: 'AI writing assistant for creating content quickly and efficiently.',
    detailedDescription: 'Rytr is an AI writing assistant that helps generate high-quality content in seconds. It supports multiple tones and languages.',
    models: ['GPT-3.5 based models'],
    howItWorks: 'Choose tone, language, and use case. Enter a short description. Rytr generates content ready to use.',
    howToUse: 'Website: rytr.me, Supports blogs, social media posts, product descriptions, and emails.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free plan; Premium $9/month.',
    rating: 4.1,
    url: 'https://rytr.me',
    features: ['Content Generation', 'Blog Posts', 'Product Descriptions', 'Social Media'],
    keywords: ['Content Generation', 'Blogging', 'Emails', 'Social Media', 'Product Descriptions']
  },
  {
    id: '8',
    name: 'Sudowrite',
    description: 'AI tool designed for fiction writers to enhance creativity and storytelling.',
    detailedDescription: 'Sudowrite helps fiction writers enhance creativity, write stories, and generate characters and plots.',
    models: ['GPT-3.5', 'Custom storytelling-focused AI'],
    howItWorks: 'Writers input text or story outline. AI suggests improvements, dialogue, or plot twists.',
    howToUse: 'Website: sudowrite.com, Great for authors and creative writers looking for inspiration.',
    category: 'text',
    pricing: 'paid' as const,
    pricingDetails: 'Paid; starts at $10/month.',
    rating: 4.3,
    url: 'https://sudowrite.com',
    features: ['Fiction Writing', 'Storytelling', 'Creative Writing', 'Character Development'],
    keywords: ['Fiction Writing', 'Creative Writing', 'Storytelling', 'Plot Development', 'Character Ideas']
  },
  {
    id: '9',
    name: 'Frase',
    description: 'AI-powered content and SEO research tool.',
    detailedDescription: 'Frase AI is designed for content research and SEO optimization. It helps create high-ranking blog posts by analyzing competitors.',
    models: ['GPT-3 / GPT-3.5 for content generation'],
    howItWorks: 'Enter a topic. Frase researches top-ranking articles. Generates AI-assisted drafts and summaries.',
    howToUse: 'Website: frase.io, Best for bloggers, marketers, and SEO specialists.',
    category: 'text',
    pricing: 'paid' as const,
    pricingDetails: 'Paid plans from $14.99/month.',
    rating: 4.2,
    url: 'https://frase.io',
    features: ['SEO', 'Content Research', 'SERP Analysis', 'Blog Writing'],
    keywords: ['SEO', 'Content Research', 'Blog Writing', 'Summarization', 'Marketing']
  },
  {
    id: '10',
    name: 'Wordtune',
    description: 'AI writing assistant that helps rewrite and improve text.',
    detailedDescription: 'Wordtune enhances writing by suggesting alternative phrasing, tones, and improvements in clarity and style.',
    models: ['Proprietary AI for rewriting and style adjustment'],
    howItWorks: 'Input your sentence. AI suggests alternate ways to express it, varying tone and style.',
    howToUse: 'Website: wordtune.com, Useful for professional emails, essays, and content refinement.',
    category: 'text',
    pricing: 'freemium' as const,
    pricingDetails: 'Free plan; Premium $9.99/month.',
    rating: 4.0,
    url: 'https://wordtune.com',
    features: ['Text Improvement', 'Rewriting', 'Grammar Check', 'Writing Assistant'],
    keywords: ['Writing Improvement', 'Rewriting', 'Style', 'Tone', 'Clarity']
  },
  {
    id: '11',
    name: 'Novelcrafter',
    description: 'AI tool for authors to plan and write novels with ease.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://novelcrafter.com',
    features: ['Novel Writing', 'Story Planning', 'Character Development', 'Plot Structuring']
  },
  {
    id: '12',
    name: 'RaptorWrite',
    description: 'AI writing tool focused on fiction and creative writing.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.9,
    url: 'https://raptorwrite.com',
    features: ['Creative Writing', 'Fiction', 'Storytelling', 'Plot Development']
  },
  {
    id: '13',
    name: 'Anyword',
    description: 'AI copywriting tool optimized for performance and conversion.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://anyword.com',
    features: ['Copywriting', 'Marketing', 'Conversion Optimization', 'Ad Copy']
  },
  {
    id: '14',
    name: 'Writer',
    description: 'AI writing assistant for teams and enterprises.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://writer.com',
    features: ['Team Collaboration', 'Enterprise Writing', 'Content Consistency', 'Brand Voice']
  },
  {
    id: '15',
    name: 'Hypotenuse',
    description: 'AI content generator focused on e-commerce and product descriptions.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.0,
    url: 'https://hypotenuse.ai',
    features: ['E-commerce', 'Product Descriptions', 'Content Generation', 'SEO']
  },
  {
    id: '16',
    name: 'CopySmith',
    description: 'AI tool for generating marketing copy and product descriptions.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://copysmith.ai',
    features: ['Marketing Copy', 'Product Descriptions', 'SEO', 'Content Creation']
  },
  {
    id: '17',
    name: 'INK Editor',
    description: 'AI-powered writing assistant with SEO optimization.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://inkforall.com',
    features: ['SEO', 'Content Writing', 'Optimization', 'Blog Posts']
  },
  {
    id: '18',
    name: 'Scalenut',
    description: 'AI writing tool for creating long-form content and SEO optimization.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.1,
    url: 'https://scalenut.com',
    features: ['Long-form Content', 'SEO', 'Content Strategy', 'Blog Writing']
  },
  {
    id: '19',
    name: 'TextCortex',
    description: 'AI writing assistant for generating content across various platforms.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.8,
    url: 'https://textcortex.com',
    features: ['Content Generation', 'Multi-platform', 'Writing Assistant', 'Marketing']
  },
  {
    id: '20',
    name: 'Peppertype',
    description: 'AI tool for creating high-quality content quickly.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.9,
    url: 'https://peppertype.ai',
    features: ['Content Creation', 'Marketing Copy', 'Blog Writing', 'SEO']
  },
  {
    id: '21',
    name: 'TextFX',
    description: 'AI-powered text editor for enhancing writing quality.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 3.7,
    url: 'https://textfx.withgoogle.com',
    features: ['Text Editing', 'Writing Enhancement', 'Grammar Check', 'Style Improvement']
  },
  {
    id: '22',
    name: 'QuillBot',
    description: 'AI paraphrasing tool for rewriting and improving text.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://quillbot.com',
    features: ['Paraphrasing', 'Text Improvement', 'Grammar Check', 'Rewriting']
  },
  {
    id: '23',
    name: 'WordHero',
    description: 'AI content generator for various writing needs.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://wordhero.co',
    features: ['Content Generation', 'Blog Writing', 'Marketing Copy', 'SEO']
  },
  {
    id: '24',
    name: 'AI Writer',
    description: 'AI tool for generating and editing written content.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.7,
    url: 'https://ai-writer.com',
    features: ['Content Generation', 'Editing', 'Writing Assistant', 'Blog Posts']
  },
  {
    id: '25',
    name: 'ContentBot',
    description: 'AI writing assistant for creating content quickly.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.6,
    url: 'https://contentbot.ai',
    features: ['Content Creation', 'Writing Assistant', 'Blog Posts', 'Marketing Copy']
  },
  {
    id: '26',
    name: 'Scribe AI',
    description: 'AI tool for transcribing and summarizing content.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 3.8,
    url: 'https://scribe.rip',
    features: ['Transcription', 'Summarization', 'Content Creation', 'Audio to Text']
  },
  {
    id: '27',
    name: 'Slick Write',
    description: 'AI-powered writing tool for grammar and style checking.',
    category: 'text',
    pricing: 'free' as const,
    rating: 3.5,
    url: 'https://slickwrite.com',
    features: ['Grammar Check', 'Style Improvement', 'Writing Assistant', 'Text Analysis']
  }
];

export default function TextAI() {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleViewDetails = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-card/30 via-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Text & Language AI Tools
              </h1>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover powerful AI tools for writing, content creation, copywriting, and language processing. 
              From conversational AI to specialized writing assistants, find the perfect tool for your text-based needs.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span>{textAITools.filter(tool => tool.pricing === 'free').length} Free Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
                <span>{textAITools.filter(tool => tool.pricing === 'freemium').length} Freemium Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <span>{textAITools.filter(tool => tool.pricing === 'paid').length} Paid Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textAITools.map((tool, index) => (
              <div 
                key={tool.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AIToolCard 
                  tool={tool} 
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tool Details Modal */}
      <AIToolModal 
        tool={selectedTool}
        isOpen={!!selectedTool}
        onClose={handleCloseModal}
      />
    </div>
  );
}