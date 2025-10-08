import { useParams, Link } from 'react-router-dom';
import { allCategories, getCategoryById } from '@/data/categories';
import { allAITools } from '@/data/aiTools';
import AIToolCard from '@/components/AIToolCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import AIToolModal from '@/components/AIToolModal';
import { useState } from 'react';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId || '');
  const [selectedTool, setSelectedTool] = useState<any>(null);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryTools = allAITools.filter(tool => tool.category === categoryId);
  const IconComponent = category.icon;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Categories
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">{category.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{category.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {categoryTools.length} AI {categoryTools.length === 1 ? 'tool' : 'tools'} found
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        {categoryTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <AIToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={() => setSelectedTool(tool)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">No Tools Yet</h2>
            <p className="text-muted-foreground mb-6">
              We're currently curating the best AI tools for this category.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for updates!
            </p>
          </div>
        )}
      </div>

      {selectedTool && (
        <AIToolModal
          tool={selectedTool}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </div>
  );
}