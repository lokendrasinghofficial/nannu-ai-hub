import AIToolCard from '@/components/AIToolCard';
import { FileText, Sparkles } from 'lucide-react';

const textAITools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI, adept at generating human-like text across various domains.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Conversational AI', 'GPT-4', 'Writing Assistant', 'Code Generation']
  },
  {
    id: '2',
    name: 'Claude by Anthropic',
    description: 'A large language model focusing on safety and usability, suitable for diverse writing tasks.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['AI Assistant', 'Safe AI', 'Writing Support', 'Research Tool']
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
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://jasper.ai',
    features: ['Copywriting', 'Blog Writing', 'SEO', 'Content Marketing']
  },
  {
    id: '5',
    name: 'Writesonic',
    description: 'Generates high-quality content for blogs, ads, and social media.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://writesonic.com',
    features: ['Content Creation', 'Marketing Copy', 'SEO', 'Blog Posts']
  },
  {
    id: '6',
    name: 'Copy.ai',
    description: 'AI tool for generating marketing copy, emails, and more.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://copy.ai',
    features: ['Marketing Copy', 'Email Templates', 'Social Media Content', 'Ad Copy']
  },
  {
    id: '7',
    name: 'Rytr',
    description: 'AI writing assistant for creating content quickly and efficiently.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://rytr.me',
    features: ['Content Generation', 'Blog Posts', 'Product Descriptions', 'Social Media']
  },
  {
    id: '8',
    name: 'Sudowrite',
    description: 'AI tool designed for fiction writers to enhance creativity and storytelling.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.3,
    url: 'https://sudowrite.com',
    features: ['Fiction Writing', 'Storytelling', 'Creative Writing', 'Character Development']
  },
  {
    id: '9',
    name: 'Frase',
    description: 'AI-powered content and SEO research tool.',
    category: 'text',
    pricing: 'paid' as const,
    rating: 4.2,
    url: 'https://frase.io',
    features: ['SEO', 'Content Research', 'SERP Analysis', 'Blog Writing']
  },
  {
    id: '10',
    name: 'Wordtune',
    description: 'AI writing assistant that helps rewrite and improve text.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.0,
    url: 'https://wordtune.com',
    features: ['Text Improvement', 'Rewriting', 'Grammar Check', 'Writing Assistant']
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
                <AIToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}