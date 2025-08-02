'use client';

import { useState } from 'react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { List } from '@/components/ui/list';
import { BlogPost } from '@/components/ui/blog-post';

interface JavaTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  content?: string;
}

const javaTopics: JavaTopic[] = [
  {
    id: 'java-basics',
    title: 'Java 기초 문법',
    description: '변수, 데이터 타입, 연산자, 제어문 등 Java의 기본 문법을 학습합니다.',
    category: '기초',
    difficulty: 'beginner',
    tags: ['변수', '데이터타입', '연산자', '제어문']
  },
  {
    id: 'oop-concepts',
    title: '객체지향 프로그래밍',
    description: '클래스, 객체, 상속, 다형성, 캡슐화, 추상화 등 OOP 개념을 이해합니다.',
    category: '기초',
    difficulty: 'beginner',
    tags: ['클래스', '객체', '상속', '다형성', '캡슐화']
  },
  {
    id: 'collections',
    title: '컬렉션 프레임워크',
    description: 'List, Set, Map 등 Java 컬렉션 프레임워크의 사용법을 학습합니다.',
    category: '중급',
    difficulty: 'intermediate',
    tags: ['List', 'Set', 'Map', 'ArrayList', 'HashMap']
  },
  {
    id: 'exception-handling',
    title: '예외 처리',
    description: 'try-catch, throws, finally 등 Java 예외 처리 방법을 학습합니다.',
    category: '중급',
    difficulty: 'intermediate',
    tags: ['예외', 'try-catch', 'throws', 'finally']
  },
  {
    id: 'multithreading',
    title: '멀티스레딩',
    description: 'Thread, Runnable, 동기화, 스레드 풀 등 멀티스레딩 프로그래밍을 학습합니다.',
    category: '고급',
    difficulty: 'advanced',
    tags: ['Thread', 'Runnable', '동기화', '스레드풀']
  },
  {
    id: 'jvm-memory',
    title: 'JVM과 메모리 관리',
    description: 'JVM 구조, 가비지 컬렉션, 메모리 모델 등 JVM 내부 동작을 이해합니다.',
    category: '고급',
    difficulty: 'advanced',
    tags: ['JVM', '가비지컬렉션', '메모리모델', '힙', '스택']
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot 기초',
    description: 'Spring Boot를 사용한 웹 애플리케이션 개발 방법을 학습합니다.',
    category: '프레임워크',
    difficulty: 'intermediate',
    tags: ['Spring Boot', '웹개발', 'REST API', '의존성주입']
  },
  {
    id: 'design-patterns',
    title: '디자인 패턴',
    description: 'Singleton, Factory, Observer 등 Java 디자인 패턴을 학습합니다.',
    category: '고급',
    difficulty: 'advanced',
    tags: ['디자인패턴', 'Singleton', 'Factory', 'Observer']
  },
  {
    id: 'unit-testing',
    title: '단위 테스트',
    description: 'JUnit을 사용한 Java 단위 테스트 작성 방법을 학습합니다.',
    category: '중급',
    difficulty: 'intermediate',
    tags: ['JUnit', '단위테스트', 'Mock', 'TDD']
  },
  {
    id: 'performance-optimization',
    title: '성능 최적화',
    description: 'Java 애플리케이션의 성능을 최적화하는 방법을 학습합니다.',
    category: '고급',
    difficulty: 'advanced',
    tags: ['성능최적화', '프로파일링', '메모리최적화', '알고리즘']
  }
];

export default function JavaPage() {
  const [selectedTopic, setSelectedTopic] = useState<JavaTopic | null>(null);

  const handleTopicClick = (topic: JavaTopic) => {
    setSelectedTopic(topic);
  };

  const handleBackToList = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
              ☕ Java
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              객체지향, JVM, Spring Framework에 대한 종합적인 가이드
            </p>
          </div>
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[
              { label: '프로그래밍 언어', href: '/programming-languages' },
              { label: 'Java' }
            ]} />
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={handleBackToList}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              ← 목록으로 돌아가기
            </button>
          </div>

          {/* Blog Post */}
          <BlogPost
            title={selectedTopic.title}
            content={`
              <h2>${selectedTopic.title}</h2>
              <p>${selectedTopic.description}</p>
              <h3>학습 목표</h3>
              <ul>
                <li>이 주제에 대한 기본 개념을 이해합니다.</li>
                <li>실제 코드 예제를 통해 학습합니다.</li>
                <li>실무에서 활용할 수 있는 방법을 익힙니다.</li>
              </ul>
              <h3>주요 내용</h3>
              <p>이 섹션에서는 ${selectedTopic.title.toLowerCase()}에 대해 자세히 다룹니다.</p>
              <h3>예제 코드</h3>
              <pre><code>// Java 예제 코드가 여기에 표시됩니다
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>
            `}
            author="개발자 블로그"
            date="2024-01-15"
            readTime="10분"
            tags={selectedTopic.tags}
            difficulty={selectedTopic.difficulty}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            ☕ Java
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            객체지향, JVM, Spring Framework에 대한 종합적인 가이드
          </p>
        </div>
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[
            { label: '프로그래밍 언어', href: '/programming-languages' },
            { label: 'Java' }
          ]} />
        </div>

        {/* Topics List */}
        <List
          items={javaTopics}
          title="Java 학습 주제"
          onItemClick={handleTopicClick}
        />
      </div>
    </div>
  );
} 