'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AlgorithmNode {
  id: string;
  title: string;
  description: string;
  type: 'sorting' | 'searching' | 'graph' | 'dynamic' | 'greedy' | 'backtracking' | 'data-structures' | 'complexity';
  content: string;
  icon: string;
}

const algorithmNodes: AlgorithmNode[] = [
  {
    id: 'sorting-algorithms',
    title: '정렬 알고리즘',
    description: 'Quick Sort, Merge Sort, Bubble Sort',
    type: 'sorting',
    icon: '📊',
    content: '정렬 알고리즘 내용'
  },
  {
    id: 'searching-algorithms',
    title: '탐색 알고리즘',
    description: 'Binary Search, DFS, BFS',
    type: 'searching',
    icon: '🔍',
    content: '탐색 알고리즘 내용'
  },
  {
    id: 'graph-algorithms',
    title: '그래프 알고리즘',
    description: 'Dijkstra, Floyd, MST',
    type: 'graph',
    icon: '🕸️',
    content: '그래프 알고리즘 내용'
  },
  {
    id: 'dynamic-programming',
    title: '동적 프로그래밍',
    description: 'DP, 메모이제이션, 최적화',
    type: 'dynamic',
    icon: '⚡',
    content: '동적 프로그래밍 내용'
  },
  {
    id: 'greedy-algorithms',
    title: '탐욕 알고리즘',
    description: 'Greedy, 최적화 문제',
    type: 'greedy',
    icon: '🎯',
    content: '탐욕 알고리즘 내용'
  },
  {
    id: 'backtracking',
    title: '백트래킹',
    description: '재귀, 상태 공간 탐색',
    type: 'backtracking',
    icon: '🔄',
    content: '백트래킹 내용'
  },
  {
    id: 'data-structures',
    title: '자료구조',
    description: '트리, 힙, 해시, 스택/큐',
    type: 'data-structures',
    icon: '🏗️',
    content: '자료구조 내용'
  },
  {
    id: 'complexity-analysis',
    title: '복잡도 분석',
    description: '시간/공간 복잡도, Big O',
    type: 'complexity',
    icon: '📈',
    content: '복잡도 분석 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'sorting': return 'bg-blue-600 dark:bg-blue-500';
    case 'searching': return 'bg-green-600 dark:bg-green-500';
    case 'graph': return 'bg-purple-600 dark:bg-purple-500';
    case 'dynamic': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'greedy': return 'bg-red-600 dark:bg-red-500';
    case 'backtracking': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'data-structures': return 'bg-orange-600 dark:bg-orange-500';
    case 'complexity': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function AlgorithmsPage() {
  const [selectedNode, setSelectedNode] = useState<AlgorithmNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: AlgorithmNode) => {
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
            🧮 알고리즘 (Algorithms)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            정렬, 탐색, 그래프, 동적 프로그래밍에 대한 종합적인 가이드
          </p>
        </div>

        {/* Algorithms Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithmNodes.map((node) => (
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