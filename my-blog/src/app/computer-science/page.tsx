'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface CSNode {
  id: string;
  title: string;
  description: string;
  type: 'theory' | 'system' | 'compiler' | 'parallel' | 'ai' | 'crypto' | 'graphics' | 'distributed';
  content: string;
  icon: string;
}

const csNodes: CSNode[] = [
  {
    id: 'computer-theory',
    title: '컴퓨터 이론',
    description: '오토마타, 계산 복잡도, 정규식',
    type: 'theory',
    icon: '🧠',
    content: '컴퓨터 이론 내용'
  },
  {
    id: 'computer-systems',
    title: '컴퓨터 시스템',
    description: 'CPU, 메모리, I/O, 캐시',
    type: 'system',
    icon: '💻',
    content: '컴퓨터 시스템 내용'
  },
  {
    id: 'compiler-design',
    title: '컴파일러 설계',
    description: '렉서, 파서, 코드 생성',
    type: 'compiler',
    icon: '🔧',
    content: '컴파일러 설계 내용'
  },
  {
    id: 'parallel-computing',
    title: '병렬 컴퓨팅',
    description: '멀티스레딩, 분산 처리',
    type: 'parallel',
    icon: '⚡',
    content: '병렬 컴퓨팅 내용'
  },
  {
    id: 'artificial-intelligence',
    title: '인공지능',
    description: '머신러닝, 딥러닝, NLP',
    type: 'ai',
    icon: '🤖',
    content: '인공지능 내용'
  },
  {
    id: 'cryptography-cs',
    title: '암호학',
    description: '암호화 알고리즘, 보안 프로토콜',
    type: 'crypto',
    icon: '🔐',
    content: '암호학 내용'
  },
  {
    id: 'computer-graphics',
    title: '컴퓨터 그래픽스',
    description: '렌더링, 3D 그래픽, 게임 엔진',
    type: 'graphics',
    icon: '🎮',
    content: '컴퓨터 그래픽스 내용'
  },
  {
    id: 'distributed-systems',
    title: '분산 시스템',
    description: '분산 알고리즘, 일관성 모델',
    type: 'distributed',
    icon: '🌐',
    content: '분산 시스템 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'theory': return 'bg-blue-600 dark:bg-blue-500';
    case 'system': return 'bg-green-600 dark:bg-green-500';
    case 'compiler': return 'bg-purple-600 dark:bg-purple-500';
    case 'parallel': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'ai': return 'bg-red-600 dark:bg-red-500';
    case 'crypto': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'graphics': return 'bg-orange-600 dark:bg-orange-500';
    case 'distributed': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function ComputerSciencePage() {
  const [selectedNode, setSelectedNode] = useState<CSNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: CSNode) => {
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
            🧠 컴퓨터 과학 (Computer Science)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            컴퓨터 이론, 시스템, 컴파일러, 병렬 컴퓨팅에 대한 종합적인 가이드
          </p>
        </div>
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: '컴퓨터 과학' }]} />
        </div>

        {/* CS Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {csNodes.map((node) => (
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