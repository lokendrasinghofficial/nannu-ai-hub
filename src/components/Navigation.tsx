import { useState } from 'react';
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
  X
} from 'lucide-react';
import nannuLogo from '@/assets/nannu-ai-logo.png';

const aiCategories = [
  { name: 'Text & Language', href: '/text-ai', icon: FileText, color: 'ai-text' },
  { name: 'Image & Vision', href: '/image-ai', icon: Image, color: 'ai-image' },
  { name: 'Audio & Voice', href: '/voice-ai', icon: Mic, color: 'ai-voice' },
  { name: 'Data & Analytics', href: '/data-ai', icon: BarChart3, color: 'ai-data' },
  { name: 'Video Editors', href: '/video-ai', icon: Video, color: 'ai-text' },
  { name: 'Headshots', href: '/headshots-ai', icon: Camera, color: 'ai-image' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={nannuLogo} 
              alt="NannuAI Logo" 
              className="w-10 h-10 animate-float group-hover:animate-glow-pulse transition-smooth"
            />
            <span className="text-xl font-bold gradient-text">NannuAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {aiCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth group"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-primary transition-smooth" />
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pr-10 bg-background/50 border-border/50 focus:border-primary transition-smooth"
              />
              <Button 
                type="submit"
                size="sm" 
                variant="ghost" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-primary/10"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/20">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4 relative">
              <Input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 bg-background/50 border-border/50"
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
              {aiCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                    <span className="font-medium">{category.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}