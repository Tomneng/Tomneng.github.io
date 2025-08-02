import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface ListItem {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

interface ListProps {
  items: ListItem[];
  title: string;
  onItemClick?: (item: ListItem) => void;
}

export function List({ items, title, onItemClick }: ListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(items.map(item => item.category))];
  const difficulties = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급'
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? '전체' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {filteredItems.length}개의 항목
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Card 
            key={item.id}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border border-gray-200 dark:border-gray-800"
            onClick={() => onItemClick?.(item)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-black dark:text-white mb-2">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2 ml-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(item.difficulty)}`}>
                    {difficulties[item.difficulty]}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            검색 결과가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
} 