'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface LanguageNode {
  id: string;
  title: string;
  description: string;
  type: 'backend' | 'frontend' | 'general' | 'web' | 'system' | 'functional' | 'mobile' | 'data';
  content: string;
  icon: string;
}

const languageNodes: LanguageNode[] = [
  {
    id: 'java',
    title: 'Java',
    description: '객체지향, JVM, Spring Framework',
    type: 'backend',
    icon: '☕',
    content: 'Java 내용'
  },
  {
    id: 'python',
    title: 'Python',
    description: '간단한 문법, 데이터 분석, AI/ML',
    type: 'general',
    icon: '🐍',
    content: 'Python 내용'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: '웹 브라우저, Node.js, ES6+',
    type: 'frontend',
    icon: '📜',
    content: 'JavaScript 내용'
  },
  {
    id: 'csharp',
    title: 'C#',
    description: '.NET, Unity, Windows 개발',
    type: 'backend',
    icon: '🔷',
    content: 'C# 내용'
  },
  {
    id: 'go',
    title: 'Go',
    description: '고성능, 동시성, 마이크로서비스',
    type: 'backend',
    icon: '🐹',
    content: 'Go 내용'
  },
  {
    id: 'rust',
    title: 'Rust',
    description: '메모리 안전성, 시스템 프로그래밍',
    type: 'system',
    icon: '🦀',
    content: 'Rust 내용'
  },
  {
    id: 'swift',
    title: 'Swift',
    description: 'iOS 개발, Apple 생태계',
    type: 'mobile',
    icon: '🍎',
    content: 'Swift 내용'
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    description: 'Android 개발, JVM 호환',
    type: 'mobile',
    icon: '🔶',
    content: 'Kotlin 내용'
  },
  {
    id: 'php',
    title: 'PHP',
    description: '웹 서버, WordPress, Laravel',
    type: 'web',
    icon: '🐘',
    content: 'PHP 내용'
  },
  {
    id: 'ruby',
    title: 'Ruby',
    description: 'Ruby on Rails, 간결한 문법',
    type: 'web',
    icon: '💎',
    content: 'Ruby 내용'
  },
  {
    id: 'scala',
    title: 'Scala',
    description: '함수형 프로그래밍, JVM',
    type: 'functional',
    icon: '⚡',
    content: 'Scala 내용'
  },
  {
    id: 'haskell',
    title: 'Haskell',
    description: '순수 함수형, 타입 시스템',
    type: 'functional',
    icon: 'λ',
    content: 'Haskell 내용'
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'backend': return 'bg-blue-600 dark:bg-blue-500';
    case 'frontend': return 'bg-green-600 dark:bg-green-500';
    case 'general': return 'bg-purple-600 dark:bg-purple-500';
    case 'web': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'system': return 'bg-red-600 dark:bg-red-500';
    case 'functional': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'mobile': return 'bg-orange-600 dark:bg-orange-500';
    case 'data': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function ProgrammingLanguagesPage() {
  const [selectedNode, setSelectedNode] = useState<LanguageNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: LanguageNode) => {
    if (node.id === 'java') {
      window.location.href = '/java';
    } else {
      setSelectedNode(node);
      setIsZoomed(true);
    }
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
            💻 프로그래밍 언어 (Programming Languages)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            범용, 웹, 시스템, 함수형 언어에 대한 종합적인 가이드
          </p>
        </div>
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: '프로그래밍 언어' }]} />
        </div>

        {/* Languages Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageNodes.map((node) => (
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