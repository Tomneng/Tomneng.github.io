'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FrontendNode {
  id: string;
  title: string;
  description: string;
  type: 'framework' | 'ui-ux' | 'state' | 'routing' | 'testing' | 'performance' | 'accessibility' | 'build';
  content: string;
  icon: string;
}

const frontendNodes: FrontendNode[] = [
  {
    id: 'frontend-frameworks',
    title: '프론트엔드 프레임워크',
    description: 'React, Vue, Angular, Svelte',
    type: 'framework',
    icon: '⚛️',
    content: '프론트엔드 프레임워크 내용'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX 디자인',
    description: '사용자 인터페이스, 사용자 경험',
    type: 'ui-ux',
    icon: '🎨',
    content: 'UI/UX 디자인 내용'
  },
  {
    id: 'state-management',
    title: '상태 관리',
    description: 'Redux, Zustand, Context API',
    type: 'state',
    icon: '📊',
    content: '상태 관리 내용'
  },
  {
    id: 'routing',
    title: '라우팅',
    description: 'React Router, Next.js 라우팅',
    type: 'routing',
    icon: '🛣️',
    content: '라우팅 내용'
  },
  {
    id: 'frontend-testing',
    title: '프론트엔드 테스팅',
    description: 'Jest, Cypress, Testing Library',
    type: 'testing',
    icon: '🧪',
    content: '프론트엔드 테스팅 내용'
  },
  {
    id: 'frontend-performance',
    title: '프론트엔드 성능',
    description: '번들 최적화, 렌더링 최적화',
    type: 'performance',
    icon: '⚡',
    content: '프론트엔드 성능 내용'
  },
  {
    id: 'accessibility',
    title: '접근성',
    description: 'WCAG, ARIA, 키보드 네비게이션',
    type: 'accessibility',
    icon: '♿',
    content: '접근성 내용'
  },
  {
    id: 'build-tools',
    title: '빌드 도구',
    description: 'Webpack, Vite, Babel',
    type: 'build',
    icon: '🔧',
    content: '빌드 도구 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'framework': return 'bg-blue-600 dark:bg-blue-500';
    case 'ui-ux': return 'bg-green-600 dark:bg-green-500';
    case 'state': return 'bg-purple-600 dark:bg-purple-500';
    case 'routing': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'testing': return 'bg-red-600 dark:bg-red-500';
    case 'performance': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'accessibility': return 'bg-orange-600 dark:bg-orange-500';
    case 'build': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function FrontendPage() {
  const [selectedNode, setSelectedNode] = useState<FrontendNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: FrontendNode) => {
    setSelectedNode(node);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setSelectedNode(null);
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4 text-black dark:text-white"
          >
            ← 뒤로 가기
          </Button>
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            🎨 프론트엔드 (Frontend)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            React, Vue, Angular, UI/UX, 상태 관리에 대한 종합적인 가이드
          </p>
        </div>

        {/* Frontend Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontendNodes.map((node) => (
            <Card 
              key={node.id} 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-800"
              onClick={() => handleNodeClick(node)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{node.icon}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    →
                  </Button>
                </div>
                <CardTitle className="text-lg font-semibold text-black dark:text-white">
                  {node.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {node.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Zoomed View Overlay */}
        {isZoomed && selectedNode && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
            <div className="bg-white dark:bg-black rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {selectedNode.title}
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClose}
                    className="text-black dark:text-white border-gray-300 dark:border-gray-700"
                  >
                    ✕
                  </Button>
                </div>
                <div className="prose prose-black dark:prose-white max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-black dark:text-white bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto max-h-[60vh] border border-gray-200 dark:border-gray-800">
                    {selectedNode.content}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 