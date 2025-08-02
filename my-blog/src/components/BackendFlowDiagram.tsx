'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface FlowNode {
  id: string;
  title: string;
  description: string;
  type: 'client' | 'server' | 'database' | 'api' | 'cache' | 'security';
  position: { x: number; y: number };
  content: string;
}

const flowNodes: FlowNode[] = [
  {
    id: 'client',
    title: '클라이언트',
    description: '사용자 인터페이스',
    type: 'client',
    position: { x: 50, y: 200 },
    content: `
# 클라이언트 (Client)

## 역할
- 사용자 인터페이스 제공
- 사용자 입력 처리
- 서버와의 통신 관리

## 주요 기능
- React/Vue/Angular 등 프론트엔드 프레임워크 사용
- HTTP 요청을 통해 서버와 통신
- 사용자 경험 최적화

## 기술 스택
- HTML, CSS, JavaScript
- 프론트엔드 프레임워크
- 상태 관리 라이브러리
    `
  },
  {
    id: 'mobile-app',
    title: '모바일 앱',
    description: 'iOS/Android 앱',
    type: 'client',
    position: { x: 50, y: 100 },
    content: `
# 모바일 앱 (Mobile App)

## 역할
- 네이티브 모바일 인터페이스
- 푸시 알림 처리
- 오프라인 동기화

## 주요 기능
- 네이티브 API 활용
- 로컬 데이터 저장
- 백그라운드 처리

## 기술 스택
- iOS: Swift, Objective-C
- Android: Kotlin, Java
- Cross-platform: React Native, Flutter
    `
  },
  {
    id: 'cdn',
    title: 'CDN',
    description: '콘텐츠 전송 네트워크',
    type: 'api',
    position: { x: 50, y: 300 },
    content: `
# CDN (Content Delivery Network)

## 역할
- 정적 콘텐츠 전송 최적화
- 지리적 분산 서버
- 로딩 속도 향상

## 주요 기능
- 이미지, CSS, JS 파일 캐싱
- DDoS 방어
- SSL 인증서 관리

## 기술 스택
- CloudFlare, AWS CloudFront
- Akamai, Fastly
- 자체 CDN 구축
    `
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description: '요청 라우팅 및 인증',
    type: 'security',
    position: { x: 250, y: 150 },
    content: `
# API Gateway

## 역할
- 모든 클라이언트 요청의 진입점
- 요청 라우팅 및 로드 밸런싱
- 인증 및 권한 확인

## 주요 기능
- 요청 검증 및 필터링
- Rate Limiting
- SSL/TLS 종료
- 로깅 및 모니터링

## 장점
- 중앙화된 인증/인가
- 마이크로서비스 아키텍처 지원
- 보안 강화
    `
  },
  {
    id: 'auth-service',
    title: '인증 서비스',
    description: 'JWT/OAuth 처리',
    type: 'security',
    position: { x: 250, y: 250 },
    content: `
# 인증 서비스 (Auth Service)

## 역할
- 사용자 인증 및 권한 관리
- 토큰 발급 및 검증
- SSO(Single Sign-On) 지원

## 주요 기능
- JWT 토큰 관리
- OAuth 2.0 / OpenID Connect
- 비밀번호 해싱
- 2FA 지원

## 기술 스택
- Auth0, Firebase Auth
- Keycloak, Okta
- 자체 인증 시스템
    `
  },
  {
    id: 'load-balancer',
    title: 'Load Balancer',
    description: '트래픽 분산',
    type: 'server',
    position: { x: 450, y: 100 },
    content: `
# Load Balancer

## 역할
- 트래픽을 여러 서버에 분산
- 서버 상태 모니터링
- 고가용성 보장

## 알고리즘
- Round Robin
- Least Connections
- Weighted Round Robin
- IP Hash

## 장점
- 서버 부하 분산
- 장애 복구
- 확장성 향상
    `
  },
  {
    id: 'web-server',
    title: 'Web Server',
    description: '정적 파일 서빙',
    type: 'server',
    position: { x: 450, y: 200 },
    content: `
# Web Server

## 역할
- 정적 파일 (HTML, CSS, JS) 서빙
- 요청 전처리
- 로깅 및 모니터링

## 주요 기능
- 정적 콘텐츠 캐싱
- Gzip 압축
- 보안 헤더 설정
- 에러 페이지 처리

## 기술 스택
- Nginx
- Apache
- Caddy
    `
  },
  {
    id: 'application-server',
    title: 'Application Server',
    description: '비즈니스 로직 처리',
    type: 'server',
    position: { x: 450, y: 300 },
    content: `
# Application Server

## 역할
- 비즈니스 로직 처리
- 데이터베이스 연동
- API 응답 생성

## 주요 기능
- 요청 파싱 및 검증
- 비즈니스 로직 실행
- 데이터베이스 쿼리 실행
- 응답 포맷팅

## 기술 스택
- Node.js, Python, Java, Go
- Express, Django, Spring Boot
- ORM/ODM 사용
    `
  },
  {
    id: 'message-queue',
    title: 'Message Queue',
    description: '비동기 메시지 처리',
    type: 'server',
    position: { x: 450, y: 400 },
    content: `
# Message Queue

## 역할
- 비동기 메시지 처리
- 서비스 간 통신
- 작업 큐 관리

## 주요 기능
- 메시지 브로커링
- 작업 스케줄링
- 이벤트 드리븐 아키텍처
- 장애 복구

## 기술 스택
- Redis, RabbitMQ
- Apache Kafka
- AWS SQS, SNS
    `
  },
  {
    id: 'cache',
    title: 'Cache',
    description: '데이터 캐싱',
    type: 'cache',
    position: { x: 650, y: 200 },
    content: `
# Cache

## 역할
- 자주 사용되는 데이터 저장
- 데이터베이스 부하 감소
- 응답 속도 향상

## 캐시 전략
- LRU (Least Recently Used)
- TTL (Time To Live)
- Write-Through vs Write-Behind

## 기술 스택
- Redis
- Memcached
- In-Memory Cache
    `
  },
  {
    id: 'search-engine',
    title: 'Search Engine',
    description: '검색 엔진',
    type: 'cache',
    position: { x: 650, y: 100 },
    content: `
# Search Engine

## 역할
- 전문 검색 기능 제공
- 인덱싱 및 검색 최적화
- 실시간 검색 결과

## 주요 기능
- 텍스트 분석 및 토큰화
- 관련성 점수 계산
- 자동완성 및 추천
- 다국어 검색

## 기술 스택
- Elasticsearch
- Apache Solr
- Algolia, Meilisearch
    `
  },
  {
    id: 'file-storage',
    title: 'File Storage',
    description: '파일 저장소',
    type: 'cache',
    position: { x: 650, y: 300 },
    content: `
# File Storage

## 역할
- 파일 업로드/다운로드
- 이미지/비디오 처리
- 백업 및 복구

## 주요 기능
- 파일 압축 및 최적화
- 이미지 리사이징
- CDN 연동
- 버전 관리

## 기술 스택
- AWS S3, Google Cloud Storage
- MinIO, Ceph
- 로컬 파일 시스템
    `
  },
  {
    id: 'database',
    title: 'Database',
    description: '데이터 영구 저장',
    type: 'database',
    position: { x: 850, y: 200 },
    content: `
# Database

## 역할
- 데이터 영구 저장
- ACID 트랜잭션 보장
- 데이터 무결성 유지

## 데이터베이스 유형
- 관계형 (MySQL, PostgreSQL)
- NoSQL (MongoDB, Redis)
- 그래프 (Neo4j)
- 시계열 (InfluxDB)

## 최적화
- 인덱싱
- 쿼리 최적화
- 파티셔닝
    `
  },
  {
    id: 'read-replica',
    title: 'Read Replica',
    description: '읽기 전용 복제본',
    type: 'database',
    position: { x: 850, y: 100 },
    content: `
# Read Replica

## 역할
- 읽기 작업 분산
- 마스터 DB 부하 감소
- 지리적 분산

## 주요 기능
- 자동 동기화
- 읽기 전용 쿼리 처리
- 장애 복구
- 백업 용도

## 구성
- 마스터-슬레이브 구조
- 자동 페일오버
- 지연 시간 모니터링
    `
  },
  {
    id: 'backup-db',
    title: 'Backup DB',
    description: '백업 데이터베이스',
    type: 'database',
    position: { x: 850, y: 300 },
    content: `
# Backup Database

## 역할
- 데이터 백업 및 복구
- 재해 복구 계획
- 데이터 보존

## 백업 전략
- 전체 백업 (Full Backup)
- 증분 백업 (Incremental)
- 차등 백업 (Differential)
- 실시간 복제

## 보관 정책
- 일간/주간/월간 백업
- 장기 보관 (Cold Storage)
- 암호화 저장
    `
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: '시스템 모니터링',
    type: 'security',
    position: { x: 250, y: 50 },
    content: `
# Monitoring

## 역할
- 시스템 성능 모니터링
- 장애 감지 및 알림
- 로그 수집 및 분석

## 주요 기능
- 메트릭 수집 (CPU, Memory, Disk)
- 로그 집계 및 분석
- 알림 시스템
- 대시보드 제공

## 기술 스택
- Prometheus, Grafana
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Datadog, New Relic
- AWS CloudWatch
    `
  },
  {
    id: 'logging',
    title: 'Logging',
    description: '로그 관리 시스템',
    type: 'security',
    position: { x: 250, y: 350 },
    content: `
# Logging

## 역할
- 애플리케이션 로그 수집
- 로그 분석 및 검색
- 감사 추적

## 로그 레벨
- ERROR: 오류 및 예외
- WARN: 경고 상황
- INFO: 일반 정보
- DEBUG: 디버깅 정보

## 기술 스택
- ELK Stack
- Fluentd, Logstash
- AWS CloudWatch Logs
- Splunk
    `
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'client': return 'bg-blue-600 dark:bg-blue-500';
    case 'server': return 'bg-green-600 dark:bg-green-500';
    case 'database': return 'bg-purple-600 dark:bg-purple-500';
    case 'api': return 'bg-orange-600 dark:bg-orange-500';
    case 'cache': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'security': return 'bg-red-600 dark:bg-red-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

const getNodeBorderColor = (type: string) => {
  switch (type) {
    case 'client': return 'border-blue-400 dark:border-blue-300';
    case 'server': return 'border-green-400 dark:border-green-300';
    case 'database': return 'border-purple-400 dark:border-purple-300';
    case 'api': return 'border-orange-400 dark:border-orange-300';
    case 'cache': return 'border-yellow-400 dark:border-yellow-300';
    case 'security': return 'border-red-400 dark:border-red-300';
    default: return 'border-gray-400 dark:border-gray-300';
  }
};

export default function BackendFlowDiagram() {
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: FlowNode) => {
    setSelectedNode(node);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setSelectedNode(null);
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
          백엔드 통신 흐름도
        </h1>
        
        <div className="relative w-full h-[600px] bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Flow Diagram */}
          <div className={`relative w-full h-full transition-all duration-500 ${isZoomed ? 'scale-90' : ''}`}>
            {/* Connection Lines with Electron Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                {/* Electron gradient */}
                <radialGradient id="electronGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                
                {/* Circuit line pattern */}
                <pattern id="circuitPattern" x="0" y="0" width="20" height="2" patternUnits="userSpaceOnUse">
                  <rect width="20" height="2" fill="none" stroke="#000000" strokeWidth="1" opacity="0.3" />
                </pattern>
              </defs>
              
                            {/* Circuit lines with electron animation */}
              <g className="circuit-lines">
                {/* Mobile App to API Gateway */}
                <line 
                  x1="170" y1="140" x2="250" y2="170" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="170" cy="140" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-1"
                />
                
                {/* Client to API Gateway */}
                <line 
                  x1="170" y1="240" x2="250" y2="190" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="170" cy="240" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-2"
                />
                
                {/* CDN to API Gateway */}
                <line 
                  x1="170" y1="340" x2="250" y2="210" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="170" cy="340" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-3"
                />
                
                {/* API Gateway to Load Balancer */}
                <line 
                  x1="370" y1="170" x2="450" y2="130" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="370" cy="170" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-4"
                />
                
                {/* API Gateway to Web Server */}
                <line 
                  x1="370" y1="190" x2="450" y2="240" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="370" cy="190" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-5"
                />
                
                {/* API Gateway to Application Server */}
                <line 
                  x1="370" y1="210" x2="450" y2="340" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="370" cy="210" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-6"
                />
                
                {/* Application Server to Message Queue */}
                <line 
                  x1="450" y1="360" x2="450" y2="420" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="450" cy="360" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-7"
                />
                
                {/* Load Balancer to Search Engine */}
                <line 
                  x1="570" y1="130" x2="650" y2="130" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="570" cy="130" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-8"
                />
                
                {/* Web Server to Cache */}
                <line 
                  x1="570" y1="240" x2="650" y2="240" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="570" cy="240" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-9"
                />
                
                {/* Application Server to File Storage */}
                <line 
                  x1="570" y1="340" x2="650" y2="340" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="570" cy="340" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-10"
                />
                
                {/* Cache to Database */}
                <line 
                  x1="770" y1="240" x2="850" y2="240" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="770" cy="240" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-11"
                />
                
                {/* File Storage to Database */}
                <line 
                  x1="770" y1="340" x2="850" y2="260" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="770" cy="340" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-12"
                />
                
                {/* Database to Read Replica */}
                <line 
                  x1="850" y1="180" x2="850" y2="120" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="850" cy="180" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-13"
                />
                
                {/* Database to Backup DB */}
                <line 
                  x1="850" y1="260" x2="850" y2="340" 
                  stroke="#000000" 
                  strokeWidth="3" 
                  opacity="0.8"
                  className="circuit-line"
                />
                <circle 
                  cx="850" cy="260" r="3" 
                  fill="url(#electronGradient)" 
                  className="electron electron-14"
                />
              </g>
            </svg>

            {/* Flow Nodes */}
            {flowNodes.map((node) => (
              <div
                key={node.id}
                className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 ${getNodeColor(node.type)} ${getNodeBorderColor(node.type)} ${node.type === 'security' ? 'security-wall' : 'rounded-lg'} shadow-lg border-2`}
                style={{
                  left: `${node.position.x}px`,
                  top: `${node.position.y}px`,
                  width: node.type === 'security' ? '140px' : '120px',
                  height: node.type === 'security' ? '60px' : '80px'
                }}
                onClick={() => handleNodeClick(node)}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-2">
                  <div className="font-semibold text-sm text-center">{node.title}</div>
                  <div className="text-xs text-center opacity-90">{node.description}</div>
                </div>
              </div>
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

        {/* Instructions */}
        <div className="mt-8 text-center text-black dark:text-white">
          <p className="text-lg">
            각 도형을 클릭하면 상세 정보를 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes electronMove1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 30px); }
        }
        
        @keyframes electronMove2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, -50px); }
        }
        
        @keyframes electronMove3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, -130px); }
        }
        
        @keyframes electronMove4 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, -40px); }
        }
        
        @keyframes electronMove5 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 50px); }
        }
        
        @keyframes electronMove6 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 130px); }
        }
        
        @keyframes electronMove7 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(0, 60px); }
        }
        
        @keyframes electronMove8 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 0); }
        }
        
        @keyframes electronMove9 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 0); }
        }
        
        @keyframes electronMove10 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 0); }
        }
        
        @keyframes electronMove11 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 0); }
        }
        
        @keyframes electronMove12 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, -80px); }
        }
        
        @keyframes electronMove13 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(0, -60px); }
        }
        
        @keyframes electronMove14 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(0, 80px); }
        }
        
                 .electron-1 {
           animation: electronMove1 3s linear infinite;
         }
         
         .electron-2 {
           animation: electronMove2 3s linear infinite;
           animation-delay: 0.2s;
         }
         
         .electron-3 {
           animation: electronMove3 3s linear infinite;
           animation-delay: 0.4s;
         }
         
         .electron-4 {
           animation: electronMove4 3s linear infinite;
           animation-delay: 0.6s;
         }
         
         .electron-5 {
           animation: electronMove5 3s linear infinite;
           animation-delay: 0.8s;
         }
         
         .electron-6 {
           animation: electronMove6 3s linear infinite;
           animation-delay: 1s;
         }
         
         .electron-7 {
           animation: electronMove7 3s linear infinite;
           animation-delay: 1.2s;
         }
         
         .electron-8 {
           animation: electronMove8 3s linear infinite;
           animation-delay: 1.4s;
         }
         
         .electron-9 {
           animation: electronMove9 3s linear infinite;
           animation-delay: 1.6s;
         }
         
         .electron-10 {
           animation: electronMove10 3s linear infinite;
           animation-delay: 1.8s;
         }
         
         .electron-11 {
           animation: electronMove11 3s linear infinite;
           animation-delay: 2s;
         }
         
         .electron-12 {
           animation: electronMove12 3s linear infinite;
           animation-delay: 2.2s;
         }
         
         .electron-13 {
           animation: electronMove13 3s linear infinite;
           animation-delay: 2.4s;
         }
         
         .electron-14 {
           animation: electronMove14 3s linear infinite;
           animation-delay: 2.6s;
         }
         
         .circuit-line {
           filter: drop-shadow(0 0 3px #000000);
         }
         
         .electron {
           filter: drop-shadow(0 0 8px #ffffff);
         }
         
         .security-wall {
           clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%);
           border-radius: 0;
         }
      `}</style>
    </div>
  );
} 