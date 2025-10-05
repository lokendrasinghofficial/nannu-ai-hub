import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Zap, CreditCard, Gift, Eye } from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  models?: string[];
  howItWorks?: string;
  howToUse?: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  pricingDetails?: string;
  rating: number;
  image?: string;
  url: string;
  features: string[];
  keywords?: string[];
}

interface AIToolCardProps {
  tool: AITool;
  onViewDetails?: (tool: AITool) => void;
}

export default function AIToolCard({ tool, onViewDetails }: AIToolCardProps) {
  const getPricingIcon = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return <Gift className="w-4 h-4" />;
      case 'freemium':
        return <Zap className="w-4 h-4" />;
      case 'paid':
        return <CreditCard className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'freemium':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'paid':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getCategoryGradient = (category: string): 'hero' | 'accent' | 'voice' | 'data' => {
    const categoryMap: { [key: string]: 'hero' | 'accent' | 'voice' | 'data' } = {
      'text': 'hero',
      'image': 'accent',
      'voice': 'voice',
      'data': 'data',
      'video': 'hero',
      'research': 'data'
    };
    return categoryMap[category.toLowerCase()] || 'hero';
  };

  const shortenToolName = (name: string) => {
    // Remove common suffixes and patterns
    let shortened = name
      .replace(/\s+(AI|by\s+\w+|with\s+AI|\+\s+\w+)$/i, '')
      .replace(/\s+AI\s+/i, ' ')
      .trim();
    
    // If still too long (> 20 chars), take first 2-3 words
    if (shortened.length > 20) {
      const words = shortened.split(' ');
      shortened = words.slice(0, 2).join(' ');
    }
    
    return shortened;
  };

  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-smooth hover:shadow-card animate-fade-in">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:gradient-text transition-smooth">
            {tool.name}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{tool.rating}</span>
            </div>
            <Badge 
              variant="secondary" 
              className={`${getPricingColor(tool.pricing)} text-xs font-medium`}
            >
              {getPricingIcon(tool.pricing)}
              <span className="ml-1 capitalize">{tool.pricing}</span>
            </Badge>
          </div>
        </div>
        
        <CardDescription className="text-muted-foreground line-clamp-2">
          {tool.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {tool.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-secondary/50">
              {feature}
            </Badge>
          ))}
          {tool.features.length > 3 && (
            <Badge variant="outline" className="text-xs bg-secondary/50">
              +{tool.features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {onViewDetails && (
            <Button 
              variant="outline" 
              className="flex-1 group bg-secondary/30 hover:bg-secondary/50"
              onClick={() => onViewDetails(tool)}
            >
              <Eye className="w-4 h-4 mr-2" />
              <span>View Details</span>
            </Button>
          )}
          <Button 
            variant={getCategoryGradient(tool.category)} 
            className="flex-1 group"
            onClick={() => window.open(tool.url, '_blank')}
          >
            <span className="truncate">Try {shortenToolName(tool.name)}</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}