import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Languages,
  Brain,
  GraduationCap,
  Building2,
  Globe,
  Users,
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FadeIn } from "../components/FadeIn";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const subsidiaries = [
  {
    name: "국제통번역협회",
    desc: "통번역사 자격 시험 운영 및 교육",
    icon: Languages,
    color: "#4A3AFF",
  },
  {
    name: "휴텍씨",
    desc: "인공지능 기술 활용 사업",
    icon: Brain,
    color: "#7B6FFF",
  },
  {
    name: "타임스미디어",
    desc: "TESOL 영어 교사 교육, 기업 강사파견",
    icon: GraduationCap,
    color: "#2563eb",
  },
  {
    name: "ICS",
    desc: "국제학교 운영",
    icon: Building2,
    color: "#059669",
  },
];

const coreBusinesses = [
  {
    title: "통역번역과 AI통역번역, 프롬프트, AI윤리시험",
    org: "국제통번역협회",
    desc: "1999년 최초 시작, 2013년 법무부 국가 공인 자격증 인정, 109개 언어 지원. ITT 통번역 시험과 AI 통번역 시험을 통해 전문 통번역사를 양성하고 있습니다.",
    icon: Award,
    stats: "30만명+ 응시",
  },
  {
    title: "인공지능 교육사업",
    org: "휴텍씨",
    desc: "2018년 설립, AI 활용 교사 교육 및 통번역 서비스 진행. Human과 Technology의 공존(Coexistence)을 지향합니다.",
    icon: Brain,
    stats: "AI 융합 선도",
  },
  {
    title: "테솔 (TESOL)",
    org: "타임스미디어",
    desc: "12년간 500기수, 12,000여명 졸업생수 1위, 시장 점유율 1위. 미국 캘리포니아 주립대와 연세대 등 전국 10여개 센터에서 운영합니다.",
    icon: GraduationCap,
    stats: "졸업생 2만명+",
  },
  {
    title: "기업체 AI 교육",
    org: "타임스미디어",
    desc: "삼성, LG, SK, 현대 등 국내 대기업 맞춤형 AI 교육 프로그램 제공. 정부기관, 공공기관 및 단체 대상 교육 운영.",
    icon: Briefcase,
    stats: "유수 기업 파트너",
  },
  {
    title: "해외 지원 학교 사업",
    org: "ICS",
    desc: "최상의 교사진, 해외 학년 인증 학교. International Christian School로서 글로벌 수준의 교육을 제공합니다.",
    icon: Globe,
    stats: "글로벌 인증",
  },
  {
    title: "번역 서비스",
    org: "휴텍씨",
    desc: "AI 기술을 활용한 전문 번역 서비스. 신속하고 정확한 다국어 번역을 제공하며, 전문 분야별 특화 서비스를 운영합니다.",
    icon: Languages,
    stats: "다국어 지원",
  },
];

const timelineData = [
  { year: "1997", event: "교육기업 설립" },
  { year: "1999", event: "국제통번역 사단 설립" },
  { year: "2004", event: "인공지능 교육센터 설립" },
  { year: "2018", event: "휴텍씨 설립" },
  { year: "2020", event: "메타 트랜스 서비스 출시" },
  { year: "2021", event: "과학기술정보통신부 인공지능 언어 전문가 자격증 승인" },
];

const achievementData = [
  { year: "1999", label: "국제통번역협회",    users: "30만명",       pct: 100, count: "300,000+", color: "from-[#4f46e5] to-[#818cf8]" },
  { year: "2005", label: "테솔-영어교사교육",  users: "2만명",        pct: 70,  count: "20,000+", color: "from-[#7c3aed] to-[#a78bfa]" },
  { year: "1987", label: "기업체 교육",        users: "4천명",        pct: 45,  count: "4,000+", color: "from-[#2563eb] to-[#60a5fa]" },
  { year: "2015", label: "ICS국제학교",       users: "2천명",        pct: 35,  count: "2,000+", color: "from-[#0891b2] to-[#22d3ee]" },
  { year: "2018", label: "휴텍씨",            users: "1천명(예상)",   pct: 25,  count: "1,000+", color: "from-[#059669] to-[#34d399]" },
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6"
                style={{ fontWeight: 600 }}
              >
                외국어 교육 그룹 · Global Education Group
              </span>
              <h1
                className="text-white text-[36px] sm:text-[48px] lg:text-[56px] mb-6"
                style={{ fontWeight: 800, lineHeight: 1.15 }}
              >
                대한민국 No.1
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  외국어 교육 그룹
                </span>
                의<br />
                새로운 미래
              </h1>
              <p className="text-white/80 text-[17px] mb-8 max-w-lg" style={{ lineHeight: 1.8 }}>
                [외국어 교육 그룹] 타임스미디어와 휴텍씨는 24년의 교육 노하우와 AI 기술을 융합하여 글로벌 교육의 표준을 제시합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a2e] rounded-xl text-[15px] hover:bg-white/90 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  그룹 소개 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/business"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl text-[15px] hover:bg-white/20 transition-colors border border-white/20"
                  style={{ fontWeight: 500 }}
                >
                  사업 소개
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwYnJhaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc3MjQyMDYxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Technology"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Languages className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[13px] text-muted-foreground">지원 언어</p>
                      <p className="text-[20px]" style={{ fontWeight: 700 }}>109개</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[13px] text-muted-foreground">누적 교육생</p>
                      <p className="text-[20px]" style={{ fontWeight: 700 }}>30만+</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="그룹 구조"
            title="글로벌 외국어 교육 그룹"
            subtitle="대한민국을 대표하는 외국어 교육 그룹으로서, 4개의 핵심 기관이 교육과 AI 기술, 글로벌 네트워크를 선도합니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsidiaries.map((item, i) => (
              <motion.div
                key={item.name}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.color}08, transparent)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-[19px] mb-3 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>{item.name}</h3>
                  <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
                </div>
                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Businesses */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="핵심 사업"
            title="6대 핵심 사업 영역"
            subtitle="통번역 시험, AI 기술, TESOL 교육, 기업체 AI 교육, 해외 학교 사업, 번역 서비스까지 — 교육의 전 분야를 아우릅니다."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreBusinesses.map((biz, i) => (
              <motion.div
                key={biz.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <biz.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-[12px]" style={{ fontWeight: 500 }}>
                    {biz.stats}
                  </span>
                </div>
                <p className="text-[12px] text-primary mb-1" style={{ fontWeight: 500 }}>{biz.org}</p>
                <h3 className="text-[17px] mb-3" style={{ fontWeight: 600 }}>{biz.title}</h3>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{biz.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Infrastructure */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0f0a2e] via-[#1a1145] to-[#2d1b69] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 bg-[#4f46e5]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#a78bfa] text-[13px] mb-4" style={{ fontWeight: 600 }}>
                <TrendingUp className="w-4 h-4" />
                ACHIEVEMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl text-white mb-3" style={{ fontWeight: 700 }}>
                누적 교육 인원
              </h2>
              <p className="text-white/50 text-sm">
                24년간 시험 진행 · 18년간 교육 진행
              </p>
            </div>
          </FadeIn>

          {/* Total highlight */}
          <FadeIn>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="inline-flex flex-col items-center"
              >
                <span className="text-[64px] sm:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa]" style={{ fontWeight: 800, lineHeight: 1 }}>
                  35만+
                </span>
                <span className="text-white/60 text-[15px] mt-2" style={{ fontWeight: 500 }}>총 누적 교육 인원</span>
              </motion.div>
            </div>
          </FadeIn>

          {/* Bar chart */}
          <div className="space-y-6">
            {achievementData.map((d, i) => (
              <FadeIn key={d.label} delay={i * 0.08}>
                <div className="group">
                  <div className="flex items-end justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-white text-[15px]" style={{ fontWeight: 600 }}>{d.label}</span>
                      <span className="text-white/30 text-xs hidden sm:inline">Since {d.year}</span>
                    </div>
                    <span className="text-white text-[18px] sm:text-[22px]" style={{ fontWeight: 700 }}>{d.count}</span>
                  </div>
                  <div className="h-5 sm:h-6 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${d.color} relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "교육 진행 기간", value: "24년+", icon: BookOpen },
              { label: "누적 수험생", value: "30만+", icon: Users },
              { label: "지원 언어", value: "109개", icon: Globe },
              { label: "협력 국가", value: "195개국", icon: Languages },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[32px] text-foreground mb-1" style={{ fontWeight: 700 }}>{stat.value}</p>
                <p className="text-[14px] text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-[28px] sm:text-[36px] mb-4" style={{ fontWeight: 700 }}>
              AI 시대, 함께 성장할 준비가 되셨나요?
            </h2>
            <p className="text-muted-foreground text-[16px] mb-8 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              휴텍씨와 함께 외국어 교육과 AI 기술의 미래를 열어가세요.
              통번역, 교육, 자격증까지 — 모든 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/business"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-[15px] hover:bg-primary/90 transition-colors"
                style={{ fontWeight: 600 }}
              >
                서비스 살펴보기 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-xl text-[15px] hover:bg-white/80 transition-colors border border-border"
                style={{ fontWeight: 500 }}
              >
                파트너십 문의
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}