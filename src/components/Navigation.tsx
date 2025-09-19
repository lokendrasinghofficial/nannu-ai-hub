import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Brain, 
  Image, 
  Mic, 
  BarChart3, 
  Video, 
  FileText, 
  Camera,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import nannuLogo from '@/assets/nannu-ai-logo.png';

const aiCategories = [
  { name: 'Text & Language', href: '/text-ai', icon: FileText, color: 'ai-text' },
  { name: 'Image & Vision', href: '/image-ai', icon: Image, color: 'ai-image' },
  { name: 'Audio & Voice', href: '/voice-ai', icon: Mic, color: 'ai-voice' },
  { name: 'Data & Analytics', href: '/data-ai', icon: BarChart3, color: 'ai-data' },
  { name: 'Video Editors', href: '/video-editors-ai', icon: Video, color: 'ai-text' },
  { name: 'Headshots', href: '/headshots-ai', icon: Camera, color: 'ai-image' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-xl shadow-2xl border-b border-primary/20' 
          : 'bg-card/60 backdrop-blur-md border-b border-border/10'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <img 
                  src={nannuLogo} 
                  alt="NannuAI Logo" 
                  className="w-10 h-10 animate-float group-hover:animate-glow-pulse transition-smooth relative z-10"
                />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-smooth">
                NannuAI
              </span>
              <Sparkles className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {aiCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="relative flex items-center space-x-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 group hover:bg-secondary/30 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm font-medium">{category.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pr-12 bg-background/30 border-border/30 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm rounded-xl relative z-10 group-hover:bg-background/50"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-10 p-0 hover:bg-primary/20 rounded-lg z-20 group-hover:scale-110 transition-all duration-300"
                >
                  <Search className="w-4 h-4 group-hover:text-primary" />
                </Button>
              </form>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden relative overflow-hidden hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-all duration-300"></div>
              {isMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/20 backdrop-blur-xl">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4 relative">
                <Input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 bg-background/30 border-border/30 backdrop-blur-sm"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </form>

              {/* Mobile Categories */}
              <div className="space-y-2">
                {aiCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-secondary/30 transition-all duration-300 group backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="font-medium">{category.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}