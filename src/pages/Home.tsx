import SearchHero from '@/components/SearchHero';
import AIToolCard from '@/components/AIToolCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for AI tools
const featuredTools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI for writing, coding, and creative tasks. Get help with complex problems and generate high-quality content.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: ['Text Generation', 'Code Assistance', 'Creative Writing', 'Problem Solving']
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Create stunning, artistic images from text descriptions. Perfect for creative projects and professional design work.',
    category: 'image',
    pricing: 'paid' as const,
    rating: 4.9,
    url: 'https://midjourney.com',
    features: ['Image Generation', 'Artistic Styles', 'High Resolution', 'Commercial Use']
  },
  {
    id: '3',
    name: 'ElevenLabs',
    description: 'Generate realistic AI voices and clone your own voice. Perfect for podcasts, audiobooks, and voiceovers.',
    category: 'voice',
    pricing: 'freemium' as const,
    rating: 4.7,
    url: 'https://elevenlabs.io',
    features: ['Voice Cloning', 'Multiple Languages', 'Realistic Speech', 'API Access']
  },
  {
    id: '4',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for analysis, writing, and coding. Great for research and complex reasoning tasks.',
    category: 'text',
    pricing: 'freemium' as const,
    rating: 4.6,
    url: 'https://claude.ai',
    features: ['Long Context', 'Analysis', 'Coding', 'Research']
  },
  {
    id: '5',
    name: 'Runway ML',
    description: 'AI-powered video editing and generation tools. Create, edit, and enhance videos with artificial intelligence.',
    category: 'video',
    pricing: 'freemium' as const,
    rating: 4.5,
    url: 'https://runwayml.com',
    features: ['Video Generation', 'Video Editing', 'Green Screen', 'Motion Capture']
  },
  {
    id: '6',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides accurate answers with sources. Perfect for research and fact-checking.',
    category: 'research',
    pricing: 'freemium' as const,
    rating: 4.4,
    url: 'https://perplexity.ai',
    features: ['Search & Research', 'Source Citations', 'Real-time Data', 'Academic Mode']
  }
];

const categories = [
  {
    name: 'Text & Language AI',
    description: 'Writing, coding, and content generation tools',
    icon: '🤖',
    count: 150,
    color: 'hero',
    route: '/text-ai'
  },
  {
    name: 'Image & Vision AI',
    description: 'Image generation, editing, and analysis tools',
    icon: '🎨',
    count: 120,
    color: 'accent',
    route: '/image-ai'
  },
  {
    name: 'Audio & Voice AI',
    description: 'Voice synthesis, music, and audio processing',
    icon: '🎵',
    count: 80,
    color: 'voice',
    route: '/voice-ai'
  },
  {
    name: 'Data & Analytics',
    description: 'Business intelligence and data analysis tools',
    icon: '📊',
    count: 90,
    color: 'data',
    route: '/data-ai'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SearchHero />

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Explore AI by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect AI tool for your specific needs across these popular categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.route}
                className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-smooth hover:shadow-card cursor-pointer block"
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:gradient-text transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {category.count}+ tools
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Featured AI Tools
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked AI tools that are making waves in their respective categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <AIToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/all-tools">
                <TrendingUp className="w-5 h-5 mr-2" />
                View All Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-12">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Why Choose NannuAI?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto neon-glow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Always Updated</h3>
                  <p className="text-muted-foreground">
                    Our database is constantly updated with the latest AI tools and technologies
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get personalized AI tool suggestions based on your specific needs
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-data rounded-2xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Detailed Insights</h3>
                  <p className="text-muted-foreground">
                    Comprehensive reviews, pricing info, and feature comparisons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}