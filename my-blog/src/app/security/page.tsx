'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SecurityNode {
  id: string;
  title: string;
  description: string;
  type: 'cryptography' | 'authentication' | 'network' | 'web' | 'mobile' | 'cloud' | 'threat' | 'compliance';
  content: string;
  icon: string;
}

const securityNodes: SecurityNode[] = [
  {
    id: 'cryptography',
    title: '암호학',
    description: '대칭키, 비대칭키, 해시 함수',
    type: 'cryptography',
    icon: '🔐',
    content: '암호학 내용'
  },
  {
    id: 'authentication',
    title: '인증 & 인가',
    description: '사용자 인증, 권한 관리',
    type: 'authentication',
    icon: '👤',
    content: '인증 & 인가 내용'
  },
  {
    id: 'network-security',
    title: '네트워크 보안',
    description: '방화벽, VPN, IDS/IPS',
    type: 'network',
    icon: '🛡️',
    content: '네트워크 보안 내용'
  },
  {
    id: 'web-security',
    title: '웹 보안',
    description: 'OWASP Top 10, 웹 취약점',
    type: 'web',
    icon: '🌐',
    content: '웹 보안 내용'
  },
  {
    id: 'mobile-security',
    title: '모바일 보안',
    description: '모바일 앱 보안, BYOD',
    type: 'mobile',
    icon: '📱',
    content: '모바일 보안 내용'
  },
  {
    id: 'cloud-security',
    title: '클라우드 보안',
    description: '클라우드 보안 모델, CSPM',
    type: 'cloud',
    icon: '☁️',
    content: '클라우드 보안 내용'
  },
  {
    id: 'threat-modeling',
    title: '위협 모델링',
    description: '위협 분석, 리스크 평가',
    type: 'threat',
    icon: '🎯',
    content: '위협 모델링 내용'
  },
  {
    id: 'security-compliance',
    title: '보안 규정 준수',
    description: 'GDPR, SOC2, ISO27001',
    type: 'compliance',
    icon: '📋',
    content: '보안 규정 준수 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'cryptography': return 'bg-blue-600 dark:bg-blue-500';
    case 'authentication': return 'bg-green-600 dark:bg-green-500';
    case 'network': return 'bg-purple-600 dark:bg-purple-500';
    case 'web': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'mobile': return 'bg-red-600 dark:bg-red-500';
    case 'cloud': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'threat': return 'bg-orange-600 dark:bg-orange-500';
    case 'compliance': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function SecurityPage() {
  const [selectedNode, setSelectedNode] = useState<SecurityNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: SecurityNode) => {
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
            🔒 보안 (Security)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            암호학, 인증, 네트워크 보안, 웹 보안에 대한 종합적인 가이드
          </p>
        </div>

        {/* Security Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityNodes.map((node) => (
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