import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export function BlogPost({ 
  title, 
  content, 
  author, 
  date, 
  readTime, 
  tags, 
  image, 
  difficulty 
}: BlogPostProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const difficulties = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급'
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          {title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(difficulty)}`}>
            {difficulties[difficulty]}
          </span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Image */}
      {image && (
        <div className="mb-8">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-black dark:prose-white">
        <div 
          className="text-gray-800 dark:text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Code Blocks Styling */}
      <style jsx>{`
        .prose pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .prose code {
          background-color: #f3f4f6;
          color: #1f2937;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        
        .dark .prose code {
          background-color: #374151;
          color: #f9fafb;
        }
        
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        
        .dark .prose h2 {
          color: #f9fafb;
        }
        
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }
        
        .dark .prose h3 {
          color: #f9fafb;
        }
        
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        
        .prose ul, .prose ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
        
        .prose blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        .dark .prose blockquote {
          color: #9ca3af;
        }
      `}</style>
    </article>
  );
} 