import SearchHero from '@/components/SearchHero';
import AIToolCard from '@/components/AIToolCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, TrendingUp, Rocket, Grid3x3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categoryGroups } from '@/data/categories';
import { allAITools } from '@/data/aiTools';

// Featured and newly launched tools from our comprehensive database
const featuredTools = allAITools.slice(0, 6);
const newlyLaunchedTools = allAITools.slice(6, 9);

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
              50+ AI Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive AI tool categories for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {categoryGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <Link
                  key={group.id}
                  to="/all-categories"
                  className="group relative p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl mb-3 bg-gradient-to-br ${group.color} shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {group.name}
                    </h3>
                    
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 absolute bottom-4 right-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/all-categories">
                <Grid3x3 className="w-5 h-5 mr-2" />
                View All 50+ Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
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

      {/* Newly Launched AI Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-accent animate-float" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-accent-text">
                Newly Launched AI Tools
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The latest AI innovations that just hit the market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newlyLaunchedTools.map((tool) => (
              <div key={tool.id} className="relative">
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                  NEW
                </div>
                <AIToolCard tool={tool} />
              </div>
            ))}
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