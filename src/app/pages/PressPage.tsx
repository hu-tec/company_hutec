import { motion } from "motion/react";
import {
  Newspaper,
  Calendar,
  ExternalLink,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FadeIn } from "../components/FadeIn";

const pressData = [
  {
    id: 1,
    title: "휴텍씨, 2024 AI 융합 통번역 교육 시스템 공개",
    source: "The Korea Times",
    date: "2024.03.12",
    summary: "휴텍씨가 인공지능과 인간의 협업을 통한 최적화된 통번역 교육 솔루션을 발표하며 업계의 주목을 받고 있습니다.",
    image: "https://images.unsplash.com/photo-1504711432819-51f197fa1048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwcGFwZXJ8ZW58MXx8fHwxNzczMjE1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    id: 2,
    title: "AITe 인공지능 시험, 과기정통부 민간자격 승인 후 응시자 급증",
    source: "Daily News",
    date: "2024.02.28",
    summary: "인공지능 시대를 맞아 AITe 자격증의 가치가 높아지면서 대학생 및 취업 준비생들 사이에서 필수 스펙으로 자리매김하고 있습니다.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzMyMTU1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    id: 3,
    title: "타임스미디어 테솔 졸업생 2만명 돌파... 시장 점유율 1위 공고히",
    source: "Education Weekly",
    date: "2024.01.15",
    summary: "30년 전통의 테솔 교육 센터가 누적 졸업생 2만명을 배출하며 대한민국 최고의 영어 교사 양성 기관임을 다시 한번 입증했습니다.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBuZXdzfGVufDF8fHx8MTc3MzIxNTU2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    id: 4,
    title: "휴텍씨, 글로벌 비즈니스 파트너십 확대로 세계 시장 공략",
    source: "Global Business",
    date: "2023.12.05",
    summary: "캐나다, 미국 등 북미 지역 주요 교육 기관과의 협력을 통해 AI 통번역 솔루션의 글로벌 수출을 가속화하고 있습니다.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczMjE1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  }
];

export function PressPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              PRESS RELEASE
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              휴텍씨의 새로운
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                도약과 성장의 소식
              </span>
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              미디어를 통해 비춰지는 휴텍씨의 혁신적인 행보와 글로벌 성과를 실시간으로 확인하실 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <SectionTitle
              badge="NEWS"
              title="최신 보도 자료"
              subtitle=""
            />
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="관심 있는 기사를 검색해보세요"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[14px]"
              />
            </div>
          </div>

          <div className="grid gap-8">
            {pressData.map((news, i) => (
              <FadeIn key={news.id} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-secondary text-primary rounded-lg text-[12px] font-bold">
                          {news.source}
                        </span>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-[13px]">
                          <Calendar className="w-3.5 h-3.5" />
                          {news.date}
                        </div>
                      </div>
                      <h3 className="text-[20px] mb-4 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>
                        {news.title}
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                        {news.summary}
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <a
                        href={news.link}
                        className="inline-flex items-center gap-2 text-primary text-[14px] font-bold hover:underline"
                      >
                        기사 원문 보기 <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
              1
            </button>
            <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors font-bold">
              2
            </button>
            <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors font-bold">
              3
            </button>
            <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
