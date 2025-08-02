'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NetworkingNode {
  id: string;
  title: string;
  description: string;
  type: 'protocol' | 'routing' | 'security' | 'wireless' | 'cloud' | 'monitoring' | 'performance' | 'virtualization';
  content: string;
  icon: string;
}

const networkingNodes: NetworkingNode[] = [
  {
    id: 'network-protocols',
    title: '네트워크 프로토콜',
    description: 'TCP/IP, HTTP, DNS 등 프로토콜',
    type: 'protocol',
    icon: '🌐',
    content: '네트워크 프로토콜 내용'
  },
  {
    id: 'routing-switching',
    title: '라우팅 & 스위칭',
    description: '라우터, 스위치, 네트워크 라우팅',
    type: 'routing',
    icon: '🔄',
    content: '라우팅 & 스위칭 내용'
  },
  {
    id: 'network-security',
    title: '네트워크 보안',
    description: '방화벽, VPN, 보안 프로토콜',
    type: 'security',
    icon: '🔒',
    content: '네트워크 보안 내용'
  },
  {
    id: 'wireless-networks',
    title: '무선 네트워크',
    description: 'Wi-Fi, Bluetooth, 모바일 네트워크',
    type: 'wireless',
    icon: '📶',
    content: '무선 네트워크 내용'
  },
  {
    id: 'cloud-networking',
    title: '클라우드 네트워킹',
    description: 'SDN, 네트워크 가상화',
    type: 'cloud',
    icon: '☁️',
    content: '클라우드 네트워킹 내용'
  },
  {
    id: 'network-monitoring',
    title: '네트워크 모니터링',
    description: '네트워크 분석 및 모니터링',
    type: 'monitoring',
    icon: '📊',
    content: '네트워크 모니터링 내용'
  },
  {
    id: 'network-performance',
    title: '네트워크 성능',
    description: '대역폭, 지연시간, 처리량',
    type: 'performance',
    icon: '⚡',
    content: '네트워크 성능 내용'
  },
  {
    id: 'network-virtualization',
    title: '네트워크 가상화',
    description: '가상 네트워크, 컨테이너 네트워킹',
    type: 'virtualization',
    icon: '🖥️',
    content: '네트워크 가상화 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'protocol': return 'bg-blue-600 dark:bg-blue-500';
    case 'routing': return 'bg-green-600 dark:bg-green-500';
    case 'security': return 'bg-red-600 dark:bg-red-500';
    case 'wireless': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'cloud': return 'bg-purple-600 dark:bg-purple-500';
    case 'monitoring': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'performance': return 'bg-orange-600 dark:bg-orange-500';
    case 'virtualization': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function NetworkingPage() {
  const [selectedNode, setSelectedNode] = useState<NetworkingNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: NetworkingNode) => {
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
            🌐 네트워킹 (Networking)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            네트워크 프로토콜, 라우팅, 보안, 무선 네트워크에 대한 종합적인 가이드
          </p>
        </div>

        {/* Networking Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkingNodes.map((node) => (
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