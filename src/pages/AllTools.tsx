import { useState } from 'react';
import { Search, Filter, Grid, List, TrendingUp } from 'lucide-react';
import AIToolCard from '@/components/AIToolCard';
import AIToolModal from '@/components/AIToolModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import tools from different categories
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
  }
];

const imageAITools = [
  {
    id: '101',
    name: 'Midjourney',
    description: 'Create stunning, artistic images from text descriptions. Perfect for creative projects.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.9,
    url: 'https://midjourney.com',
    features: ['Image Generation', 'Artistic Styles', 'High Resolution', 'Commercial Use']
  },
  {
    id: '102',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation model with improved understanding and quality.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://openai.com/dall-e-3',
    features: ['Text-to-Image', 'High Quality', 'Creative Generation', 'Style Variety']
  },
  {
    id: '103',
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model with customization and fine-tuning capabilities.',
    category: 'image',
    pricing: 'free' as const,
    rating: 4.5,
    url: 'https://stability.ai',
    features: ['Open Source', 'Customizable', 'Local Installation', 'Community Models']
  },
  {
    id: '104',
    name: 'Adobe Firefly',
    description: 'Creative generative AI integrated into Adobe Creative Suite for commercial use.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://www.adobe.com/products/firefly.html',
    features: ['Adobe Integration', 'Commercial Safe', 'Creative Tools', 'Professional Quality']
  },
  {
    id: '105',
    name: 'Leonardo AI',
    description: 'Advanced AI image generator with fine-tuned models for game assets and creative content.',
    category: 'image',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://leonardo.ai',
    features: ['Game Assets', 'Fine-tuned Models', 'Consistent Characters', 'Commercial Use']
  }
];

const voiceAITools = [
  {
    id: '201',
    name: 'ElevenLabs',
    description: 'Most realistic AI voice generator with voice cloning and multilingual support.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Multilingual Support', 'Emotional Speech', 'API Access']
  },
  {
    id: '202',
    name: 'Murf AI',
    description: 'Professional AI voiceover platform with 120+ realistic voices in 20+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://murf.ai',
    features: ['120+ Voices', '20+ Languages', 'Voice Editing', 'Commercial Use']
  },
  {
    id: '203',
    name: 'Speechify',
    description: 'AI-powered text-to-speech app that reads any text aloud with natural voices.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://speechify.com',
    features: ['Document Reading', 'Web Page Reading', 'Speed Control', 'Highlighting']
  },
  {
    id: '204',
    name: 'Resemble AI',
    description: 'Real-time voice cloning and speech synthesis platform for developers.',
    category: 'voice',
    pricing: 'paid' as const,
    rating: 4.7,
    url: 'https://www.resemble.ai',
    features: ['Real-time Cloning', 'Custom Voices', 'Developer API', 'Voice Security']
  },
  {
    id: '205',
    name: 'Play.ht',
    description: 'AI voice generator with 600+ ultra-realistic voices in 142+ languages.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://play.ht',
    features: ['600+ Voices', '142+ Languages', 'Voice Cloning', 'SSML Support']
  }
];

const dataAITools = [
  {
    id: '301',
    name: 'Tableau',
    description: 'Industry-leading data visualization platform with AI-powered insights.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.8,
    url: 'https://tableau.com',
    features: ['Data Visualization', 'AI Analytics', 'Natural Language', 'Enterprise Integration']
  },
  {
    id: '302',
    name: 'Power BI',
    description: 'Microsoft\'s business analytics solution with AI-driven insights.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://powerbi.microsoft.com',
    features: ['AI Insights', 'Auto ML', 'Natural Language Q&A', 'Real-time Analytics']
  },
  {
    id: '303',
    name: 'DataRobot',
    description: 'Automated machine learning platform that accelerates data science workflows.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.6,
    url: 'https://datarobot.com',
    features: ['AutoML', 'Model Deployment', 'Predictive Analytics', 'MLOps']
  },
  {
    id: '304',
    name: 'H2O.ai',
    description: 'Open source machine learning and AI platform for data scientists.',
    category: 'data',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://h2o.ai',
    features: ['AutoML', 'Open Source', 'Scalable ML', 'Feature Engineering']
  },
  {
    id: '305',
    name: 'Alteryx',
    description: 'Self-service data analytics platform with drag-and-drop interface.',
    category: 'data',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://alteryx.com',
    features: ['Data Preparation', 'Predictive Analytics', 'Spatial Analytics', 'Machine Learning']
  }
];

const videoAITools = [
  {
    id: '401',
    name: 'Runway ML',
    description: 'AI-powered video editing and generation tools for creative professionals.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://runwayml.com',
    features: ['Video Generation', 'Video Editing', 'Green Screen', 'Motion Capture']
  },
  {
    id: '402',
    name: 'Synthesia',
    description: 'Create AI videos with digital avatars from text in 120+ languages.',
    category: 'video',
    pricing: 'paid' as const,
    rating: 4.4,
    url: 'https://www.synthesia.io',
    features: ['AI Avatars', '120+ Languages', 'Custom Avatars', 'Enterprise Features']
  },
  {
    id: '403',
    name: 'Pictory',
    description: 'Turn scripts and blog posts into engaging videos automatically.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.3,
    url: 'https://pictory.ai',
    features: ['Script to Video', 'Auto Highlights', 'Voice Generation', 'Stock Footage']
  },
  {
    id: '404',
    name: 'Loom AI',
    description: 'Screen recording with AI-powered editing and transcription features.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.2,
    url: 'https://loom.com',
    features: ['Screen Recording', 'AI Editing', 'Transcription', 'Team Collaboration']
  },
  {
    id: '405',
    name: 'InVideo AI',
    description: 'Transform text prompts into professional videos with AI.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.1,
    url: 'https://invideo.io',
    features: ['Text to Video', 'Template Library', 'Voice Generation', 'Multi-language']
  }
];

// Combine all tools
const allTools = [
  ...textAITools,
  ...imageAITools,
  ...voiceAITools,
  ...dataAITools,
  ...videoAITools
];

export default function AllTools() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [pricingFilter, setPricingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const handleViewDetails = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  // Filter and search tools
  const filteredTools = allTools
    .filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.features.some(feature => 
                            feature.toLowerCase().includes(searchQuery.toLowerCase())
                          );
      
      const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
      const matchesPricing = pricingFilter === 'all' || tool.pricing === pricingFilter;
      
      return matchesSearch && matchesCategory && matchesPricing;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const stats = {
    total: allTools.length,
    free: allTools.filter(tool => tool.pricing === 'free').length,
    freemium: allTools.filter(tool => tool.pricing === 'freemium').length,
    paid: allTools.filter(tool => tool.pricing === 'paid').length,
    categories: [...new Set(allTools.map(tool => tool.category))].length
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-card/30 via-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                All AI Tools
              </h1>
              <Grid className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our complete collection of AI tools across all categories. Find the perfect solution 
              for your text, image, voice, data, and video needs in one comprehensive directory.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Total Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-green-500">{stats.free}</div>
                <div className="text-sm text-muted-foreground">Free Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-blue-500">{stats.freemium}</div>
                <div className="text-sm text-muted-foreground">Freemium</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-amber-500">{stats.paid}</div>
                <div className="text-sm text-muted-foreground">Paid Tools</div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-purple-500">{stats.categories}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b border-border/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="text">Text AI</SelectItem>
                  <SelectItem value="image">Image AI</SelectItem>
                  <SelectItem value="voice">Voice AI</SelectItem>
                  <SelectItem value="data">Data AI</SelectItem>
                  <SelectItem value="video">Video AI</SelectItem>
                </SelectContent>
              </Select>

              <Select value={pricingFilter} onValueChange={setPricingFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="freemium">Freemium</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredTools.length} of {allTools.length} tools
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more tools.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, index) => (
                <div 
                  key={tool.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index % 12) * 50}ms` }}
                >
                  <AIToolCard 
                    tool={tool} 
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          )}
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