import { Link } from 'react-router-dom';
import { allCategories, categoryGroups } from '@/data/categories';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { allAITools } from '@/data/aiTools';

export default function AllCategories() {
  const getToolCount = (categoryId: string) => {
    return allAITools.filter(tool => tool.category === categoryId).length;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">50+ AI Categories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of AI tools organized into categories
          </p>
        </div>

        {/* Category Groups */}
        {categoryGroups.map((group) => {
          const GroupIcon = group.icon;
          const groupCategories = allCategories.filter(cat => cat.group === group.id);
          
          return (
            <div key={group.id} className="mb-16">
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${group.color} shadow-lg`}>
                  <GroupIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{group.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {groupCategories.length} categories
                  </p>
                </div>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groupCategories.map((category) => {
                  const IconComponent = category.icon;
                  const toolCount = getToolCount(category.id);
                  
                  return (
                    <Link key={category.id} to={category.route}>
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                {category.name}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                {category.description}
                              </p>
                              <Badge variant="secondary" className="text-xs">
                                {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}