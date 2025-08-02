'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface OSNode {
  id: string;
  title: string;
  description: string;
  type: 'process' | 'memory' | 'file' | 'network' | 'security' | 'virtualization' | 'performance' | 'kernel';
  content: string;
  icon: string;
}

const osNodes: OSNode[] = [
  {
    id: 'process-management',
    title: '프로세스 관리',
    description: '프로세스, 스레드, 스케줄링',
    type: 'process',
    icon: '⚙️',
    content: '프로세스 관리 내용'
  },
  {
    id: 'memory-management',
    title: '메모리 관리',
    description: '가상 메모리, 페이지 관리',
    type: 'memory',
    icon: '💾',
    content: '메모리 관리 내용'
  },
  {
    id: 'file-systems',
    title: '파일 시스템',
    description: '파일 시스템, 디렉토리 구조',
    type: 'file',
    icon: '📁',
    content: '파일 시스템 내용'
  },
  {
    id: 'network-os',
    title: '네트워크 OS',
    description: '네트워크 스택, 소켓 프로그래밍',
    type: 'network',
    icon: '🌐',
    content: '네트워크 OS 내용'
  },
  {
    id: 'os-security',
    title: 'OS 보안',
    description: '접근 제어, 인증, 암호화',
    type: 'security',
    icon: '🔒',
    content: 'OS 보안 내용'
  },
  {
    id: 'virtualization-os',
    title: '가상화',
    description: '가상 머신, 컨테이너, 하이퍼바이저',
    type: 'virtualization',
    icon: '🖥️',
    content: '가상화 내용'
  },
  {
    id: 'os-performance',
    title: 'OS 성능',
    description: '성능 모니터링, 최적화',
    type: 'performance',
    icon: '⚡',
    content: 'OS 성능 내용'
  },
  {
    id: 'kernel',
    title: '커널',
    description: '커널 구조, 시스템 콜, 드라이버',
    type: 'kernel',
    icon: '🔧',
    content: '커널 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'process': return 'bg-blue-600 dark:bg-blue-500';
    case 'memory': return 'bg-green-600 dark:bg-green-500';
    case 'file': return 'bg-purple-600 dark:bg-purple-500';
    case 'network': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'security': return 'bg-red-600 dark:bg-red-500';
    case 'virtualization': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'performance': return 'bg-orange-600 dark:bg-orange-500';
    case 'kernel': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function OperatingSystemPage() {
  const [selectedNode, setSelectedNode] = useState<OSNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: OSNode) => {
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
            💻 운영체제 (Operating System)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            프로세스 관리, 메모리 관리, 파일 시스템, 커널에 대한 종합적인 가이드
          </p>
        </div>
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: '운영체제' }]} />
        </div>

        {/* OS Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {osNodes.map((node) => (
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