'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ArchitectureNode {
  id: string;
  title: string;
  description: string;
  type: 'pattern' | 'style' | 'microservices' | 'cloud' | 'security' | 'performance' | 'scalability' | 'monitoring';
  content: string;
  icon: string;
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'design-patterns',
    title: '디자인 패턴',
    description: '소프트웨어 디자인 패턴',
    type: 'pattern',
    icon: '🎯',
    content: '디자인 패턴 내용'
  },
  {
    id: 'architectural-styles',
    title: '아키텍처 스타일',
    description: '다양한 아키텍처 스타일',
    type: 'style',
    icon: '🏗️',
    content: '아키텍처 스타일 내용'
  },
  {
    id: 'microservices',
    title: '마이크로서비스',
    description: '마이크로서비스 아키텍처',
    type: 'microservices',
    icon: '🔧',
    content: '마이크로서비스 내용'
  },
  {
    id: 'cloud-architecture',
    title: '클라우드 아키텍처',
    description: '클라우드 기반 아키텍처',
    type: 'cloud',
    icon: '☁️',
    content: '클라우드 아키텍처 내용'
  },
  {
    id: 'security-architecture',
    title: '보안 아키텍처',
    description: '보안 중심 아키텍처',
    type: 'security',
    icon: '🔒',
    content: '보안 아키텍처 내용'
  },
  {
    id: 'performance-architecture',
    title: '성능 아키텍처',
    description: '성능 최적화 아키텍처',
    type: 'performance',
    icon: '⚡',
    content: '성능 아키텍처 내용'
  },
  {
    id: 'scalability-architecture',
    title: '확장성 아키텍처',
    description: '확장 가능한 아키텍처',
    type: 'scalability',
    icon: '📈',
    content: '확장성 아키텍처 내용'
  },
  {
    id: 'monitoring-architecture',
    title: '모니터링 아키텍처',
    description: '시스템 모니터링 아키텍처',
    type: 'monitoring',
    icon: '📊',
    content: '모니터링 아키텍처 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'pattern': return 'bg-blue-600 dark:bg-blue-500';
    case 'style': return 'bg-green-600 dark:bg-green-500';
    case 'microservices': return 'bg-purple-600 dark:bg-purple-500';
    case 'cloud': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'security': return 'bg-red-600 dark:bg-red-500';
    case 'performance': return 'bg-orange-600 dark:bg-orange-500';
    case 'scalability': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'monitoring': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function ArchitecturePage() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: ArchitectureNode) => {
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
            🏗️ 아키텍처 (Architecture)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            소프트웨어 아키텍처, 디자인 패턴, 마이크로서비스에 대한 종합적인 가이드
          </p>
        </div>

        {/* Architecture Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureNodes.map((node) => (
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