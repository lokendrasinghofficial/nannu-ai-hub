import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Star, Zap, CreditCard, Gift, Globe, Code, Sparkles } from "lucide-react";

interface AIToolDetails {
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
  url: string;
  features: string[];
  keywords: string[];
}

interface AIToolModalProps {
  tool: AIToolDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AIToolModal({ tool, isOpen, onClose }: AIToolModalProps) {
  if (!tool) return null;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold gradient-text">
                {tool.name}
              </DialogTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-lg font-semibold">{tool.rating}</span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${getPricingColor(tool.pricing)} text-sm font-medium px-3 py-1`}
                >
                  {getPricingIcon(tool.pricing)}
                  <span className="ml-2 capitalize">{tool.pricing}</span>
                </Badge>
              </div>
            </div>
          </div>
          
          <DialogDescription className="text-base leading-relaxed">
            {tool.detailedDescription || tool.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Models Section */}
          {tool.models && tool.models.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Available Models
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.models.map((model, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg p-3 border border-border/30">
                    <p className="text-sm text-foreground">{model}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How it Works */}
          {tool.howItWorks && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                How it Works
              </h3>
              <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.howItWorks}
                </p>
              </div>
            </div>
          )}

          {/* How to Use */}
          {tool.howToUse && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                How to Use
              </h3>
              <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.howToUse}
                </p>
              </div>
            </div>
          )}

          {/* Pricing Details */}
          {tool.pricingDetails && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary" />
                Pricing Details
              </h3>
              <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.pricingDetails}
                </p>
              </div>
            </div>
          )}

          <Separator className="bg-border/50" />

          {/* Features & Keywords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {tool.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {(tool.keywords || []).map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary/50 text-muted-foreground">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button 
              variant={getCategoryGradient(tool.category)} 
              size="lg"
              className="px-8 py-3 text-base font-semibold"
              onClick={() => window.open(tool.url, '_blank')}
            >
              <Globe className="w-5 h-5 mr-2" />
              Try {tool.name} Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}