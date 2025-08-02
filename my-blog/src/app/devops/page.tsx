'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DevOpsNode {
  id: string;
  title: string;
  description: string;
  type: 'ci-cd' | 'container' | 'orchestration' | 'monitoring' | 'infrastructure' | 'automation' | 'security' | 'cloud';
  content: string;
  icon: string;
}

const devopsNodes: DevOpsNode[] = [
  {
    id: 'ci-cd',
    title: 'CI/CD',
    description: '지속적 통합/배포 파이프라인',
    type: 'ci-cd',
    icon: '🔄',
    content: 'CI/CD 내용'
  },
  {
    id: 'containerization',
    title: '컨테이너화',
    description: 'Docker, 컨테이너 기술',
    type: 'container',
    icon: '📦',
    content: '컨테이너화 내용'
  },
  {
    id: 'orchestration',
    title: '오케스트레이션',
    description: 'Kubernetes, 컨테이너 관리',
    type: 'orchestration',
    icon: '⚙️',
    content: '오케스트레이션 내용'
  },
  {
    id: 'monitoring',
    title: '모니터링',
    description: '로깅, 메트릭, 알림',
    type: 'monitoring',
    icon: '📊',
    content: '모니터링 내용'
  },
  {
    id: 'infrastructure',
    title: '인프라 관리',
    description: 'IaC, 클라우드 인프라',
    type: 'infrastructure',
    icon: '🏗️',
    content: '인프라 관리 내용'
  },
  {
    id: 'automation',
    title: '자동화',
    description: '스크립팅, 워크플로우 자동화',
    type: 'automation',
    icon: '🤖',
    content: '자동화 내용'
  },
  {
    id: 'devops-security',
    title: 'DevSecOps',
    description: '보안 통합, 취약점 관리',
    type: 'security',
    icon: '🔒',
    content: 'DevSecOps 내용'
  },
  {
    id: 'cloud-devops',
    title: '클라우드 DevOps',
    description: '클라우드 네이티브 DevOps',
    type: 'cloud',
    icon: '☁️',
    content: '클라우드 DevOps 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'ci-cd': return 'bg-blue-600 dark:bg-blue-500';
    case 'container': return 'bg-green-600 dark:bg-green-500';
    case 'orchestration': return 'bg-purple-600 dark:bg-purple-500';
    case 'monitoring': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'infrastructure': return 'bg-red-600 dark:bg-red-500';
    case 'automation': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'security': return 'bg-orange-600 dark:bg-orange-500';
    case 'cloud': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function DevOpsPage() {
  const [selectedNode, setSelectedNode] = useState<DevOpsNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: DevOpsNode) => {
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
            🔄 DevOps
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            CI/CD, 컨테이너, 오케스트레이션, 모니터링에 대한 종합적인 가이드
          </p>
        </div>

        {/* DevOps Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devopsNodes.map((node) => (
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