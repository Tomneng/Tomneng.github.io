'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DBNode {
  id: string;
  title: string;
  description: string;
  type: 'rdbms' | 'nosql' | 'distributed' | 'data-warehouse' | 'data-modeling' | 'performance' | 'backup' | 'security';
  content: string;
  icon: string;
}

const dbNodes: DBNode[] = [
  {
    id: 'relational-databases',
    title: '관계형 데이터베이스',
    description: 'RDBMS 구조 및 SQL',
    type: 'rdbms',
    icon: '🗄️',
    content: `
# 관계형 데이터베이스 (RDBMS)

## RDBMS 구성 요소
- **Tables**: 테이블 구조
- **Relationships**: 테이블 간 관계
- **Indexes**: 인덱스 구조
- **Constraints**: 제약 조건
- **Transactions**: 트랜잭션 처리

## 주요 RDBMS
- **MySQL**: 오픈소스 RDBMS
- **PostgreSQL**: 고급 오픈소스 RDBMS
- **Oracle**: 엔터프라이즈 RDBMS
- **SQL Server**: 마이크로소프트 RDBMS

## SQL 언어
- **DDL**: 데이터 정의 언어
- **DML**: 데이터 조작 언어
- **DCL**: 데이터 제어 언어
- **TCL**: 트랜잭션 제어 언어
    `
  },
  {
    id: 'nosql-databases',
    title: 'NoSQL 데이터베이스',
    description: '비관계형 데이터베이스',
    type: 'nosql',
    icon: '📊',
    content: `
# NoSQL 데이터베이스

## NoSQL 유형
- **Document Stores**: 문서 기반 (MongoDB, CouchDB)
- **Key-Value Stores**: 키-값 기반 (Redis, DynamoDB)
- **Column-Family Stores**: 컬럼 패밀리 (Cassandra, HBase)
- **Graph Databases**: 그래프 기반 (Neo4j, ArangoDB)

## NoSQL 특징
- **Schema-less**: 스키마 없는 구조
- **Horizontal Scaling**: 수평 확장
- **High Availability**: 고가용성
- **Eventual Consistency**: 최종 일관성

## 사용 사례
- **Big Data**: 대용량 데이터 처리
- **Real-time Analytics**: 실시간 분석
- **IoT Data**: IoT 데이터 저장
- **Content Management**: 콘텐츠 관리
    `
  },
  {
    id: 'distributed-databases',
    title: '분산 데이터베이스',
    description: '분산 시스템 및 복제',
    type: 'distributed',
    icon: '🌐',
    content: `
# 분산 데이터베이스

## 분산 시스템 아키텍처
- **Master-Slave**: 마스터-슬레이브 구조
- **Peer-to-Peer**: 피어-투-피어 구조
- **Sharding**: 샤딩 구조
- **Replication**: 복제 구조

## 일관성 모델
- **Strong Consistency**: 강한 일관성
- **Eventual Consistency**: 최종 일관성
- **CAP Theorem**: CAP 정리
- **BASE Properties**: BASE 특성

## 분산 트랜잭션
- **Two-Phase Commit**: 2단계 커밋
- **Three-Phase Commit**: 3단계 커밋
- **Saga Pattern**: 사가 패턴
- **Event Sourcing**: 이벤트 소싱
    `
  },
  {
    id: 'data-warehousing',
    title: '데이터 웨어하우스',
    description: '데이터 웨어하우스 및 분석',
    type: 'data-warehouse',
    icon: '🏢',
    content: `
# 데이터 웨어하우스

## 데이터 웨어하우스 구조
- **Data Sources**: 데이터 소스
- **ETL Process**: 추출, 변환, 적재
- **Data Marts**: 데이터 마트
- **OLAP Cubes**: OLAP 큐브

## 데이터 모델링
- **Star Schema**: 스타 스키마
- **Snowflake Schema**: 스노우플레이크 스키마
- **Fact Tables**: 팩트 테이블
- **Dimension Tables**: 차원 테이블

## 분석 도구
- **Business Intelligence**: BI 도구
- **Data Mining**: 데이터 마이닝
- **Predictive Analytics**: 예측 분석
- **Real-time Analytics**: 실시간 분석
    `
  },
  {
    id: 'data-modeling',
    title: '데이터 모델링',
    description: '데이터 모델링 및 설계',
    type: 'data-modeling',
    icon: '📋',
    content: `
# 데이터 모델링

## 모델링 단계
- **Conceptual Model**: 개념적 모델
- **Logical Model**: 논리적 모델
- **Physical Model**: 물리적 모델
- **Implementation**: 구현

## 정규화
- **1NF**: 제1정규형
- **2NF**: 제2정규형
- **3NF**: 제3정규형
- **BCNF**: 보이스-코드 정규형

## 반정규화
- **Denormalization**: 반정규화
- **Performance Optimization**: 성능 최적화
- **Read vs Write**: 읽기 vs 쓰기
- **Storage vs Speed**: 저장 vs 속도
    `
  },
  {
    id: 'database-performance',
    title: '데이터베이스 성능',
    description: '성능 최적화 및 튜닝',
    type: 'performance',
    icon: '⚡',
    content: `
# 데이터베이스 성능 최적화

## 인덱스 최적화
- **B-Tree Indexes**: B-트리 인덱스
- **Hash Indexes**: 해시 인덱스
- **Composite Indexes**: 복합 인덱스
- **Covering Indexes**: 커버링 인덱스

## 쿼리 최적화
- **Query Execution Plan**: 쿼리 실행 계획
- **Index Usage**: 인덱스 사용
- **Join Optimization**: 조인 최적화
- **Subquery Optimization**: 서브쿼리 최적화

## 성능 모니터링
- **Slow Query Log**: 느린 쿼리 로그
- **Performance Counters**: 성능 카운터
- **Resource Usage**: 리소스 사용량
- **Bottleneck Analysis**: 병목 분석
    `
  },
  {
    id: 'backup-recovery',
    title: '백업 및 복구',
    description: '데이터 백업 및 복구 전략',
    type: 'backup',
    icon: '💾',
    content: `
# 백업 및 복구

## 백업 유형
- **Full Backup**: 전체 백업
- **Incremental Backup**: 증분 백업
- **Differential Backup**: 차등 백업
- **Point-in-Time Recovery**: 시점 복구

## 백업 전략
- **Backup Schedule**: 백업 일정
- **Retention Policy**: 보관 정책
- **Offsite Storage**: 원격 저장
- **Encryption**: 암호화

## 복구 절차
- **Disaster Recovery**: 재해 복구
- **High Availability**: 고가용성
- **Failover**: 장애 조치
- **Data Integrity**: 데이터 무결성
    `
  },
  {
    id: 'database-security',
    title: '데이터베이스 보안',
    description: '보안 및 접근 제어',
    type: 'security',
    icon: '🔒',
    content: `
# 데이터베이스 보안

## 접근 제어
- **User Authentication**: 사용자 인증
- **Role-based Access Control**: 역할 기반 접근 제어
- **Row-level Security**: 행 수준 보안
- **Column-level Security**: 열 수준 보안

## 데이터 보호
- **Encryption at Rest**: 저장 시 암호화
- **Encryption in Transit**: 전송 시 암호화
- **Data Masking**: 데이터 마스킹
- **Audit Logging**: 감사 로깅

## 보안 모범 사례
- **SQL Injection Prevention**: SQL 인젝션 방지
- **Parameterized Queries**: 매개변수화된 쿼리
- **Least Privilege**: 최소 권한 원칙
- **Regular Security Audits**: 정기 보안 감사
    `
  }
];

const getNodeColor = (type: string) => {
  switch (type) {
    case 'rdbms': return 'bg-blue-600 dark:bg-blue-500';
    case 'nosql': return 'bg-green-600 dark:bg-green-500';
    case 'distributed': return 'bg-purple-600 dark:bg-purple-500';
    case 'data-warehouse': return 'bg-yellow-600 dark:bg-yellow-500';
    case 'data-modeling': return 'bg-orange-600 dark:bg-orange-500';
    case 'performance': return 'bg-red-600 dark:bg-red-500';
    case 'backup': return 'bg-indigo-600 dark:bg-indigo-500';
    case 'security': return 'bg-pink-600 dark:bg-pink-500';
    default: return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default function DatabasePage() {
  const [selectedNode, setSelectedNode] = useState<DBNode | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNodeClick = (node: DBNode) => {
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
            🗄️ 데이터베이스 (Database)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            RDBMS, NoSQL, 분산 데이터베이스, 데이터 모델링에 대한 종합적인 가이드
          </p>
        </div>

        {/* Database Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dbNodes.map((node) => (
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