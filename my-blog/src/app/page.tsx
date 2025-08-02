import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics = [
  {
    id: 'computer-science',
    title: '컴퓨터 과학 (CS)',
    description: '컴퓨터 이론, 시스템, 컴파일러, 병렬 컴퓨팅',
    icon: '🧠',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    id: 'programming-languages',
    title: '프로그래밍 언어',
    description: 'Java, Python, JavaScript, C#, Go 등',
    icon: '💻',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    id: 'frameworks',
    title: '프레임워크',
    description: '웹, 모바일, 백엔드, ML/AI 프레임워크',
    icon: '🛠️',
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    id: 'algorithms',
    title: '알고리즘',
    description: '자료구조, 정렬, 검색, 동적프로그래밍',
    icon: '🧮',
    color: 'bg-yellow-500 hover:bg-yellow-600'
  },
  {
    id: 'frontend',
    title: '프론트엔드',
    description: 'React, Vue, Angular, 상태관리, 성능최적화',
    icon: '🎨',
    color: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    id: 'architecture',
    title: '아키텍처',
    description: '마이크로서비스, 모놀리스, 이벤트드리븐, CQRS',
    icon: '🏗️',
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    id: 'database',
    title: '데이터베이스',
    description: 'SQL, NoSQL, 인덱싱, 트랜잭션, 백업/복구',
    icon: '🗄️',
    color: 'bg-indigo-500 hover:bg-indigo-600'
  },
  {
    id: 'networking',
    title: '네트워킹',
    description: 'HTTP/HTTPS, TCP/UDP, DNS, CDN, 로드밸런싱',
    icon: '🌐',
    color: 'bg-red-500 hover:bg-red-600'
  },
  {
    id: 'operating-system',
    title: '운영체제',
    description: 'Linux, 프로세스 관리, 메모리 관리, 파일시스템',
    icon: '💻',
    color: 'bg-teal-500 hover:bg-teal-600'
  },
  {
    id: 'security',
    title: '보안',
    description: '웹 보안, 인증/인가, 암호화, 보안 취약점',
    icon: '🔒',
    color: 'bg-gray-500 hover:bg-gray-600'
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'CI/CD, 컨테이너, 쿠버네티스, 모니터링',
    icon: '⚙️',
    color: 'bg-cyan-500 hover:bg-cyan-600'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            개발자 지식 블로그
          </h1>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/${topic.id}`}>
              <Card 
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{topic.icon}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      →
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-semibold text-black dark:text-white">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          </div>
        </div>
      </div>
    </div>
  );
}
