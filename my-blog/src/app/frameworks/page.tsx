'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface FrameworkNode {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'mobile' | 'backend' | 'ml' | 'game' | 'desktop' | 'cloud' | 'testing';
  content: string;
  icon: string;
}

const frameworkNodes: FrameworkNode[] = [
  {
    id: 'web-frameworks',
    title: '웹 프레임워크',
    description: 'React, Vue, Angular, Svelte, Next.js',
    type: 'web',
    icon: '🌐',
    content: '웹 프레임워크 내용'
  },
  {
    id: 'mobile-frameworks',
    title: '모바일 프레임워크',
    description: 'React Native, Flutter, Xamarin, Ionic',
    type: 'mobile',
    icon: '📱',
    content: '모바일 프레임워크 내용'
  },
  {
    id: 'backend-frameworks',
    title: '백엔드 프레임워크',
    description: 'Spring, Django, Express, FastAPI',
    type: 'backend',
    icon: '⚙️',
    content: '백엔드 프레임워크 내용'
  },
  {
    id: 'ml-frameworks',
    title: 'ML/AI 프레임워크',
    description: 'TensorFlow, PyTorch, Scikit-learn',
    type: 'ml',
    icon: '🤖',
    content: 'ML/AI 프레임워크 내용'
  },
  {
    id: 'game-frameworks',
    title: '게임 프레임워크',
    description: 'Unity, Unreal Engine, Godot',
    type: 'game',
    icon: '🎮',
    content: '게임 프레임워크 내용'
  },
  {
    id: 'desktop-frameworks',
    title: '데스크톱 프레임워크',
    description: 'Electron, Tauri, Qt, WPF',
    type: 'desktop',
    icon: '🖥️',
    content: '데스크톱 프레임워크 내용'
  },
  {
    id: 'cloud-frameworks',
    title: '클라우드 프레임워크',
    description: 'Serverless, Cloud Native, Microservices',
    type: 'cloud',
    icon: '☁️',
    content: '클라우드 프레임워크 내용'
  },
  {
    id: 'testing-frameworks',
    title: '테스팅 프레임워크',
    description: 'Jest, Cypress, Selenium, JUnit',
    type: 'testing',
    icon: '🧪',
    content: '테스팅 프레임워크 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'web': return 'bg-blue-600 dark:bg-blue-500';
    case 'mobile': return 'bg-green-600 dark:bg-green-500';
    case 'backend': return 'bg-purple-600 dark:bg-purple-500';
    case 'ml': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'game': return 'bg-red-600 dark:bg-red-500';
    case 'desktop': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'cloud': return 'bg-orange-600 dark:bg-orange-500';
    case 'testing': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function FrameworksPage() {
  const [selectedNode, setSelectedNode] = useState<FrameworkNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: FrameworkNode) => {
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
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            🛠️ 프레임워크 (Frameworks)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            웹, 모바일, 백엔드, ML/AI 프레임워크에 대한 종합적인 가이드
          </p>
        </div>
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: '프레임워크' }]} />
        </div>

        {/* Frameworks Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkNodes.map((node) => (
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