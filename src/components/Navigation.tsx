import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Grid3x3
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import SearchSuggestions from '@/components/SearchSuggestions';
import { categoryGroups } from '@/data/categories';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/all-tools?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
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
            <Link to="/" className="flex items-center space-x-2 group relative">
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-smooth">
                NannuAI
              </span>
              <Sparkles className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/30">
                      <Grid3x3 className="w-4 h-4 mr-2" />
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {categoryGroups.map((group) => {
                            const GroupIcon = group.icon;
                            return (
                              <Link
                                key={group.id}
                                to="/all-categories"
                                className="group flex items-start gap-3 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                              >
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${group.color} shadow-lg`}>
                                  <GroupIcon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                                    {group.name}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    Explore {group.name.toLowerCase()} tools
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <Link to="/all-categories">
                          <Button variant="outline" className="w-full mt-4">
                            View All 50+ Categories
                          </Button>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Search Bar & Theme Toggle - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <div ref={searchRef} className="relative">
                <form onSubmit={handleSearch} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Input
                    type="text"
                    placeholder="Search AI tools..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setShowSuggestions(true)}
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
                {showSuggestions && (
                  <SearchSuggestions 
                    query={searchQuery} 
                    onSelect={() => {
                      setShowSuggestions(false);
                      setSearchQuery('');
                    }} 
                  />
                )}
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="relative overflow-hidden hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-all duration-300"></div>
                {isMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
              </Button>
            </div>
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
                <Link
                  to="/all-categories"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group backdrop-blur-sm font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Grid3x3 className="w-5 h-5 text-primary" />
                  <span>All Categories</span>
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </Link>
                
                {categoryGroups.map((group, index) => {
                  const GroupIcon = group.icon;
                  return (
                    <Link
                      key={group.id}
                      to="/all-categories"
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-secondary/30 transition-all duration-300 group backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GroupIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="font-medium">{group.name}</span>
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