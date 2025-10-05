import { Link } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';
import { allAITools } from '@/data/aiTools';

interface SearchSuggestionsProps {
  query: string;
  onSelect: () => void;
}

export default function SearchSuggestions({ query, onSelect }: SearchSuggestionsProps) {
  if (!query.trim()) return null;

  const suggestions = allAITools
    .filter(tool => 
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      tool.features.some(f => f.toLowerCase().includes(query.toLowerCase()))
    )
    .slice(0, 4);

  if (suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl">
      <div className="p-2">
        <div className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground">
          <Sparkles className="w-3 h-3" />
          <span>Suggestions</span>
        </div>
        {suggestions.map((tool) => (
          <Link
            key={tool.id}
            to={`/all-tools?search=${encodeURIComponent(tool.name)}`}
            onClick={onSelect}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all group"
          >
            <Search className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                {tool.name}
              </div>
              <div className="text-xs text-muted-foreground line-clamp-1">
                {tool.description}
              </div>
            </div>
            <div className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded capitalize flex-shrink-0">
              {tool.category}
            </div>
          </Link>
        ))}
        <Link
          to={`/all-tools?search=${encodeURIComponent(query)}`}
          onClick={onSelect}
          className="flex items-center gap-2 p-3 text-sm text-primary hover:bg-primary/10 rounded-lg transition-all mt-1"
        >
          <Search className="w-4 h-4" />
          <span>View all results for "{query}"</span>
        </Link>
      </div>
    </div>
  );
}
