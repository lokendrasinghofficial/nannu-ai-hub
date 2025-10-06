import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIToolCard from '@/components/AIToolCard';
import { allAITools } from '@/data/aiTools';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Recommendation {
  toolId: string;
  reason: string;
  relevanceScore: number;
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase.functions.invoke('recommend-tools', {
          body: { query }
        });

        if (error) {
          console.error('Error fetching recommendations:', error);
          toast({
            title: 'Error',
            description: 'Failed to get AI recommendations. Please try again.',
            variant: 'destructive'
          });
          setRecommendations([]);
          return;
        }

        if (data?.error) {
          toast({
            title: 'Error',
            description: data.error,
            variant: 'destructive'
          });
          setRecommendations([]);
          return;
        }

        setRecommendations(data?.recommendations || []);
        
      } catch (err) {
        console.error('Unexpected error:', err);
        toast({
          title: 'Error',
          description: 'An unexpected error occurred.',
          variant: 'destructive'
        });
        setRecommendations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [query, toast]);

  const recommendedTools = recommendations
    .map(rec => {
      const tool = allAITools.find(t => t.id === rec.toolId);
      return tool ? { ...tool, reason: rec.reason, relevanceScore: rec.relevanceScore } : null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              AI Recommendations
            </h1>
          </div>
          
          {query && (
            <p className="text-muted-foreground text-lg">
              Results for: <span className="font-semibold text-foreground">"{query}"</span>
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-lg text-muted-foreground">
              Our AI is analyzing your needs...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Finding the perfect tools for you
            </p>
          </div>
        )}

        {/* No Query */}
        {!query && !loading && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              No search query provided
            </p>
            <Link to="/">
              <Button variant="hero">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Searching
              </Button>
            </Link>
          </div>
        )}

        {/* Results */}
        {!loading && query && (
          <>
            {recommendedTools.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedTools.map((tool: any) => (
                    <div key={tool.id} className="relative">
                      <AIToolCard tool={tool} />
                      {tool.reason && (
                        <div className="mt-3 p-3 bg-card/50 border border-border/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">Why recommended:</span> {tool.reason}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Actions */}
                <div className="text-center pt-8">
                  <p className="text-muted-foreground mb-4">
                    Not finding what you need?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link to="/">
                      <Button variant="outline">
                        Try Another Search
                      </Button>
                    </Link>
                    <Link to="/all-tools">
                      <Button variant="hero">
                        View All Tools
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No recommendations found for your query
                </p>
                <p className="text-muted-foreground mb-6">
                  Try rephrasing your search or browse all tools
                </p>
                <div className="flex justify-center space-x-4">
                  <Link to="/">
                    <Button variant="outline">
                      Try Another Search
                    </Button>
                  </Link>
                  <Link to="/all-tools">
                    <Button variant="hero">
                      View All Tools
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
