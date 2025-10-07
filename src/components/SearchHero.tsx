import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Brain } from 'lucide-react';

export default function SearchHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularSearches = [
    'Image generation',
    'Video editing',
    'Voice cloning',
    'Research assistant',
    'Code helper',
    'Content writing'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ai-voice/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="w-12 h-12 text-primary animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              NannuAI
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Your <span className="gradient-accent-text font-semibold">ultimate guide</span> to AI tools for every purpose
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur opacity-20 group-hover:opacity-30 transition-smooth"></div>
            <div className="relative bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl p-2 hover:border-primary/50 transition-smooth">
              <div className="flex items-center space-x-3">
                <Search className="w-6 h-6 text-muted-foreground ml-4" />
                <Input
                  type="text"
                  placeholder="Describe what AI tool you need..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0 px-0"
                />
                <Button type="submit" variant="hero" size="lg" className="mr-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Find AI Tools
                </Button>
              </div>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-6 space-y-3">
            <p className="text-sm text-muted-foreground">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="glass"
                  size="sm"
                  onClick={() => setSearchQuery(search)}
                  className="text-xs hover:bg-primary/10 hover:border-primary/30"
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-muted-foreground">AI Tools</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-muted-foreground">Categories</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">100k+</div>
            <div className="text-muted-foreground">Users Helped</div>
          </div>
        </div>

      </div>
    </section>
  );
}