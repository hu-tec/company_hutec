코드를 전부 확인했습니다. 아래에 다른 개발자가 동일한 구성을 재현할 수 있도록 가이드를 정리해 드리겠습니다.

"교육 실적 및 인프라" 섹션 구현 가이드
1. 전체 구조 개요
이 섹션은 2컬럼 그리드 레이아웃(lg 기준)으로 구성됩니다.

좌측 패널	우측 패널
인터랙티브 막대 그래프 (누적 교육 인원)	교육 인프라 카드 3종 (국내 센터 / 해외 협력 / 제휴사)
┌─────────────────────────────────────────────────┐
│          섹션 타이틀 (중앙 정렬)                    │
│     "ACHIEVEMENTS" 뱃지 + "교육 실적 및 인프라"     │
│         부제: "24년 시험 진행 / 18년 교육 진행"      │
├────────────────────┬────────────────────────────┤
│  [Bar Chart Card]  │  [Infrastructure Card]     │
│                    │  ┌──────────────────────┐   │
│  라벨 ━━━━━━ 100%  │  │ 국내 주요 센터 (pill)  │   │
│  라벨 ━━━━━  70%   │  ├──────────────────────┤   │
│  라벨 ━━━    35%   │  │ 해외 협력 (pill)       │   │
│  라벨 ━━━━   45%   │  ├──────────────────────┤   │
│  라벨 ━━     25%   │  │ 제휴사 (pill)          │   │
│                    │  └──────────────────────┘   │
└────────────────────┴────────────────────────────┘
2. 필요 의존성
# motion (Framer Motion 후속) - 애니메이션 전체 담당
npm install motion
// 사용 시 import 경로
import { motion } from "motion/react";
3. 공통 유틸 컴포넌트: FadeIn
섹션 전체에서 스크롤 진입 시 페이드인을 적용합니다. 반드시 먼저 구현하세요.

// components/FadeIn.tsx
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, className = "", direction = "up" }: Props) {
  const dirs = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },   // 왼쪽에서 들어오는 것처럼 → 초기 x: +40
    right: { y: 0, x: -40 },  // 오른쪽에서 들어오는 것처럼 → 초기 x: -40
    none:  { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
핵심 포인트:

viewport.once: true → 한 번만 재생 (재진입 시 반복하지 않음)
viewport.margin: "-50px" → 요소가 뷰포트 안으로 50px 들어온 후 트리거
좌측 패널은 direction="left", 우측 패널은 direction="right" 사용
4. 데이터 구조
const data = [
  { year: "1999", label: "국제통번역협회",    users: "30만명",       pct: 100 },
  { year: "2005", label: "테솔-영어교사교육",  users: "2만명",        pct: 70  },
  { year: "2015", label: "ICS국제학교",       users: "2천명",        pct: 35  },
  { year: "1987", label: "기업체 교육",        users: "4천명",        pct: 45  },
  { year: "2018", label: "휴텍씨",            users: "1천명(예상)",   pct: 25  },
];
pct: 막대 그래프의 너비(%)를 결정하는 상대값. 가장 큰 항목을 100으로 놓고 비례 배분.
year, users: 각 막대 오른쪽에 보조 텍스트로 표시.
5. 좌측 패널 - 애니메이션 막대 그래프
핵심 인터랙션: 스크롤로 뷰포트에 진입하면 막대가 width: 0 → width: pct%로 확장됩니다.

<FadeIn direction="left">
  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
    <h4 style={{ fontWeight: 600 }}>누적 교육 인원</h4>

    <div className="space-y-5 mt-6">
      {data.map((d) => (
        <div key={d.label}>
          {/* 라벨 행 */}
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-700" style={{ fontWeight: 500 }}>{d.label}</span>
            <span className="text-gray-400">Since {d.year} / {d.users}</span>
          </div>

          {/* 막대 그래프 */}
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${d.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-[#4f46e5] to-[#818cf8]"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</FadeIn>
꼭 지켜야 할 것:

바깥 div에 overflow-hidden + rounded-full → 막대가 트랙 안에서만 보임
motion.div에 initial={{ width: 0 }} → 초기 상태 너비 0
whileInView로 뷰포트 진입 시 목표 너비까지 확장
transition.duration: 1 (1초), delay: 0.2 (0.2초 후 시작) → 자연스러운 느낌
그라디언트 from-[#4f46e5] to-[#818cf8] → 인디고 → 라이트 인디고
6. 우측 패널 - 교육 인프라 카드 3종
3개의 카테고리 카드를 수직으로 쌓되, 각각 다른 컬러 테마를 적용합니다.

<FadeIn direction="right">
  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
    <h4 style={{ fontWeight: 600 }}>교육 인프라</h4>

    <div className="space-y-4 mt-6">

      {/* 카드 1: 국내 주요 센터 - 인디고 테마 */}
      <div className="rounded-xl bg-gradient-to-br from-[#4f46e5]/5 to-[#818cf8]/5 p-5">
        <h4 className="text-[#4f46e5] text-sm mb-3" style={{ fontWeight: 600 }}>
          국내 주요 센터
        </h4>
        <div className="flex flex-wrap gap-2">
          {["서울 본원", "연세대", "동국대", "부산대", "한림대", "신한대"].map((u) => (
            <span key={u} className="px-3 py-1.5 rounded-full bg-white text-xs text-gray-600 shadow-sm">
              {u}
            </span>
          ))}
        </div>
      </div>

      {/* 카드 2: 해외 협력 - 에메랄드 테마 */}
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-5">
        <h4 className="text-emerald-600 text-sm mb-3" style={{ fontWeight: 600 }}>
          해외 협력
        </h4>
        <div className="flex flex-wrap gap-2">
          {["캐나다", "미국", "호주", "유럽"].map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full bg-white text-xs text-gray-600 shadow-sm">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* 카드 3: 제휴사 - 앰버 테마 */}
      <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-5">
        <h4 className="text-amber-600 text-sm mb-3" style={{ fontWeight: 600 }}>
          제휴사
        </h4>
        <div className="flex flex-wrap gap-2">
          {["코리아헤럴드", "CBS", "연세대 MOU", "한림대 MOU"].map((p) => (
            <span key={p} className="px-3 py-1.5 rounded-full bg-white text-xs text-gray-600 shadow-sm">
              {p}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</FadeIn>
카드별 컬러 패턴:

카드	배경 그라디언트	타이틀 색상
국내 센터	from-[#4f46e5]/5 to-[#818cf8]/5	text-[#4f46e5]
해외 협력	from-emerald-50 to-teal-50	text-emerald-600
제휴사	from-amber-50 to-orange-50	text-amber-600
Pill 태그 공통 스타일: px-3 py-1.5 rounded-full bg-white text-xs text-gray-600 shadow-sm

7. 섹션 래퍼 & 타이틀 패턴
<section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* 타이틀 블록 - 모든 섹션 공통 패턴 */}
    <FadeIn>
      <div className="text-center mb-14">
        <span className="text-[#4f46e5] text-sm mb-2 block" style={{ fontWeight: 600 }}>
          ACHIEVEMENTS              {/* 영문 뱃지 */}
        </span>
        <h2 className="text-2xl sm:text-4xl text-[#1a1a2e] mb-3" style={{ fontWeight: 700 }}>
          교육 실적 및 인프라            {/* 한글 메인 타이틀 */}
        </h2>
        <p className="text-gray-500 text-sm">
          24년 시험 진행 / 18년 교육 진행   {/* 부제 */}
        </p>
      </div>
    </FadeIn>

    {/* 2컬럼 그리드 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* 좌측: Bar Chart */}
      {/* 우측: Infrastructure Cards */}
    </div>

  </div>
</section>
반응형 동작:

grid-cols-1 → 모바일: 1열 (위아래로 쌓임)
lg:grid-cols-2 → 1024px 이상: 2열 좌우 배치
섹션 패딩: py-20(모바일) → sm:py-28(640px+)
8. 디자인 토큰 요약
토큰	값	용도
Primary	#4f46e5	막대 그래프, 뱃지, 카드 헤더
Primary Light	#818cf8	그라디언트 끝점
Dark	#1a1a2e	타이틀 텍스트
Card	bg-white rounded-2xl shadow-sm border border-gray-100	양쪽 패널 카드
카드 내부 블록	rounded-xl p-5	인프라 서브카드