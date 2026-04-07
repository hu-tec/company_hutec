import { motion } from "motion/react";
import {
  Brain,
  FileText,
  Mic,
  Video,
  Globe,
  Users,
  DollarSign,
  Network,
  Search,
  MessageSquare,
  Award,
  Briefcase,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import leadership images
import leaderYoo from "figma:asset/b4cdf190ade357cbe5465c6b866fb43af568e367.png";
import leaderPark from "figma:asset/ac7388ebaab8a7f23c6e97903c9caaa4b763a023.png";
import leaderLee from "figma:asset/7977b67d2b319a4e44d7037cd872c37f906fb5e0.png";
import leaderYoon from "figma:asset/1eaa93793d2e27471697c44b7b86841c701f5c23.png";
import leaderJeong from "figma:asset/bcb2315f1131c8b83a0139342bd1a507c14c15cf.png";
import leaderKim from "figma:asset/6615e1df39529e59df892ca03ad4e81ffbaacbdd.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const serviceAreas = [
  {
    title: "AI + 번역 서비스",
    items: ["AI 문서번역", "유튜브 영상번역", "웹툰/게임 번역", "AI 아나운서/속기사", "AI 동시통역"],
    icon: Brain,
    color: "#4A3AFF",
  },
  {
    title: "프롬프트 링귀스터",
    items: ["프롬프트 링귀스터 자격증 시험", "전문가 양성", "교육 커리큘럼"],
    icon: Sparkles,
    color: "#7B6FFF",
  },
  {
    title: "AI 인력양성",
    items: ["인공지능번역기 vs 인간번역사", "AI 번역에디터 시험", "K-문화 글로벌 전문가"],
    icon: Users,
    color: "#2563eb",
  },
  {
    title: "집단지성",
    items: ["레쥬메 포트폴리오 보관함", "Biz 등록", "집단지성 채널톡", "재능 기부"],
    icon: Network,
    color: "#059669",
  },
];

const keyMetrics = [
  { icon: MessageSquare, label: "AI 동시통역 언어", value: "109", suffix: "개" },
  { icon: Users, label: "국내 통역, 번역사 수", value: "17,000", suffix: "명" },
  { icon: Globe, label: "활용 국가 수", value: "195", suffix: "개국" },
  { icon: Search, label: "글로벌 통번역 시장 규모", value: "534억", suffix: "달러" },
  { icon: DollarSign, label: "국내 통번역 시장 규모", value: "2조 2천억", suffix: "원" },
];

const leadership = [
  {
    name: "Lee Jeong-Woo",
    role: "㈜휴텍씨 회장",
    desc: "이정우",
    items: [
      "(現) (주) 휴텍씨 회장",
      "(現) KNN방송 감사",
      "(現) 하나금융그룹 고문",
      "(前) 코리아헤럴드 대표이사 발행인",
      "(前) 내외경제신문 대표이사 발행인",
      "(前) 키즈헤럴드 발행인 회장",
      "(前) 현대투자신탁 대표이사"
    ],
    image: leaderLee
  },

  {
    name: "Park Mi-Jin",
    role: "㈜휴텍씨 대표이사",
    desc: "박미진",
    items: [
      "(현) (주)휴텍씨 - 메타 트랜스 대표이사",
      "(현) ICS 국제협회 이사장",
      "(현) (주)타임즈 미디어 대표이사",
      "(현) (사)국제통번역협회 협회 사무총장",
      "(현) (사)한국 번역 학회 사업이사",
      "(현) 한국 번역 연구원 사무총장",
      "(전) UN 산하 UN IAEWP 교육위원"
    ],
    image: leaderPark
  },
  {
    name: "Jeong Eui-yong",
    role: "㈜휴텍씨 기술이사",
    desc: "정의용",
    items: [
      "(現) (주) 휴텍씨 CTO",
      "(現) 한국번역학회 산학협력위원",
      "(前) (주)시스트란 대표이사",
      "(前) (주)시스트란 인터내셔널 부사장",
      "(前) (주)삼과솔루션 연구소장",
      "(前) (유)위번아이티 연구소장",
      "(前) (유)하니소프트 개발부 부장"
    ],
    image: leaderJeong
  },
  {
    name: "Yoon Tae-Hee",
    role: "㈜휴텍씨 고문이사",
    desc: "윤태희",
    items: [
      "(現) Korea Economic Intelligence New York Wall St. 회장",
      "(前) (세계은행)국제 금융공사 수석고문",
      "(前) 국제방송교류재단 이사장",
      "(前) 서울외국어대학원대학교 총장",
      "(前) 국제영어대학원 회장",
      "(前) 주미 한국정부 장학생 선발위원장"
    ],
    image: leaderYoon
  },

  {
    name: "Kim Dong-Ik",
    role: "㈜휴텍씨 고문이사",
    desc: "김동익",
    items: [
      "(現) ICS 이사장",
      "(前) 성균관대학교 언론정보대학원 겸임교수",
      "(前) 정무부 장관",
      "(前) 중앙일보 사장",
      "(前) 조선일보 편집국장",
    ],
    image: leaderKim
  },
  {
    name: "Yoo Myeong-u",
    role: "㈜휴텍씨 고문이사",
    desc: "유명우",
    items: [
      "(現) 국제통역 번역협회 고문",
      "(現) 한국 번역 학회 정립회장",
      "(現) 한국 번역 연구원 원장",
      "(前) 한국 번역학회 창립 고문",
      "(前) 호남대학교 영어영문학과 명예교수",
      "(前) 한국 추리작가협회 부회장",
      "(前) 한국 번역가 협회 부회장"
    ],
    image: leaderYoo
  },
];

const performanceData = [
  { org: "국제통번역협회", year: "Since 1999", users: "30만명", period: "24년 시험 진행" },
  { org: "테솔-영어 교사교육", year: "Since 2005", users: "2만명", period: "18년 교육 진행" },
  { org: "ICS 국제학교", year: "Since 2015", users: "2천명", period: "글로벌 인증 학교" },
  { org: "기업체 교육", year: "Since 1987", users: "4천명", period: "대기업 파트너십" },
  { org: "휴텍씨", year: "Since 2018", users: "1천명+", period: "AI 사업 성장 중" },
];

export function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                HuTechC 소개
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                AI 서비스, 메타버스,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  미래형 신산업
                </span>
                <br />인력양성의 선두주자
              </h1>
              <p className="text-white/70 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                AI 서비스와 미래형 신산업 인력양성의 선두주자입니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdHJhbnNsYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjQyMDYxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Translation"
                className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="서비스 영역"
            title="4대 핵심 서비스"
            subtitle="AI 번역, 프롬프트 전문가 양성, AI 인력양성, 집단지성 플랫폼을 통해 미래 산업을 선도합니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${area.color}12` }}
                >
                  <area.icon className="w-6 h-6" style={{ color: area.color }} />
                </div>
                <h3 className="text-[16px] mb-4" style={{ fontWeight: 600 }}>{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d1b69]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="주요 지표"
            title="글로벌 시장을 선도하는 규모"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {keyMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white text-[24px] sm:text-[28px] mb-1" style={{ fontWeight: 700 }}>
                  {metric.value}
                  <span className="text-[14px] text-white/60 ml-1" style={{ fontWeight: 400 }}>{metric.suffix}</span>
                </p>
                <p className="text-white/60 text-[13px]">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="누적 실적"
            title="검증된 교육 성과"
            subtitle="각 기관/사업별 누적 이용자 수가 그룹의 경쟁력을 증명합니다."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {performanceData.map((item, i) => (
              <motion.div
                key={item.org}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-muted rounded-2xl p-6 overflow-hidden group hover:bg-primary hover:text-white transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:bg-white/10" />
                <p className="text-[12px] text-muted-foreground group-hover:text-white/70 mb-1" style={{ fontWeight: 500 }}>{item.period}</p>
                <h4 className="text-[15px] mb-3 group-hover:text-white" style={{ fontWeight: 600 }}>{item.org}</h4>
                <p className="text-[28px] text-primary group-hover:text-white" style={{ fontWeight: 700 }}>{item.users}</p>
                <p className="text-[12px] text-muted-foreground group-hover:text-white/60 mt-1">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="ORGANIZATION & GLOBAL NETWORK"
            title="교육 네트워크 현황"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Column 1: 전 대학 교육장 소개 */}
            <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 lg:p-8 border border-border flex flex-col">
              <h3 className="text-[16px] lg:text-[18px] mb-6 flex items-center gap-3" style={{ fontWeight: 600 }}>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                전 대학 교육장 소개
              </h3>
              <div className="space-y-2 flex-1">
                {[
                  "연세대학교",
                  "한동대학교",
                  "단국대학교",
                  "동국대학교",
                  "부산대학교",
                  "영남대학교",
                  "한림대학교",
                  "동아대학교",
                  "서울교육대학교",
                  "충남대학교"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 border-b border-muted group last:border-0 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary shrink-0 transition-colors" />
                    <span className="text-[14px] text-foreground/80 group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: 언론 교육센터 및 학회 협약처 */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 lg:p-8 border border-border flex flex-col">
              <h3 className="text-[16px] lg:text-[18px] mb-6 flex items-center gap-3" style={{ fontWeight: 600 }}>
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                언론 교육센터 및 학회 협약처
              </h3>
              <div className="space-y-2 flex-1">
                {[
                  "코리아 헤럴드 교육센터",
                  "코리아 타임스 교육센터",
                  "CBS교육 센터",
                  "부산 KNN 교육센터",
                  "중앙일보 IT 데일리 교육센터",
                  "국제통역번역협회",
                  "한국 번역학회",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 border-b border-muted group last:border-0 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-500 shrink-0 transition-colors" />
                    <span className="text-[14px] text-foreground/80 group-hover:text-emerald-600 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 3: 해외 교육 센터 및 교육 협약처 */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 lg:p-8 border border-border flex flex-col">
              <h3 className="text-[16px] lg:text-[18px] mb-6 flex items-center gap-3" style={{ fontWeight: 600 }}>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                해외 교육 센터 및 교육 협약처
              </h3>
              <div className="space-y-2 flex-1">
                {[
                  "캐나다 교육 센터",
                  "중국 교육센터",
                  "미국 교육센터",
                  "캘리포니아 주립대학교-롱비치",
                  "캘리포니아 주립대학교-샌버나디노",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 border-b border-muted group last:border-0 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 group-hover:bg-blue-500 shrink-0 transition-colors" />
                    <span className="text-[14px] text-foreground/80 group-hover:text-blue-600 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 4: 해외 제휴 협업 기관 */}
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 lg:p-8 border border-border flex flex-col">
              <h3 className="text-[16px] lg:text-[18px] mb-6 flex items-center gap-3" style={{ fontWeight: 600 }}>
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                해외 제휴 협업 기관
              </h3>
              <div className="space-y-2 mb-6 flex-1">
                {[
                  "UBC",
                  "STIBC",
                  "Purdue University",
                  "CSULB",
                  "USM",
                  "IVY TECH",
                  "호주 NATTI",
                  "미국 콩코디아 대학교",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 border-b border-muted group last:border-0 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40 group-hover:bg-purple-500 shrink-0 transition-colors" />
                    <span className="text-[14px] text-foreground/80 group-hover:text-purple-600 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom grid (dark boxes) */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <div className="bg-[#1a1a2e] text-white text-[11px] font-bold py-2.5 px-1 text-center rounded hover:bg-[#2d1b69] transition-colors cursor-default">TIMES TESOL</div>
                <div className="bg-[#1a1a2e] text-white text-[11px] font-bold py-2.5 px-1 text-center rounded hover:bg-[#2d1b69] transition-colors cursor-default">ITT 시험본부</div>
                <div className="bg-[#1a1a2e] text-white text-[11px] font-bold py-2.5 px-1 text-center rounded hover:bg-[#2d1b69] transition-colors cursor-default">TIMES HR</div>
                <div className="bg-[#1a1a2e] text-white text-[11px] font-bold py-2.5 px-1 text-center rounded hover:bg-[#2d1b69] transition-colors cursor-default">ICS국제학교</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="출판물"
            title="자체 출판 교재"
            subtitle="영어교육, 교사교육, 번역분야의 전문 출판물을 보유하고 있습니다."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ITT 교재", category: "전문 통역 번역", icon: FileText, image: "https://images.unsplash.com/photo-1588912914017-923900a34710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwdGV4dGJvb2slMjBlZHVjYXRpb258ZW58MXx8fHwxNzczMTM2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "HIGH PASS 비즈니스 영어 통번역", category: "비즈니스 통역 번역", icon: Briefcase, image: "https://images.unsplash.com/photo-1638537690581-dc2192bfc7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVuZ2xpc2glMjBib29rfGVufDF8fHx8MTc3MzEzNjU0MHww&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "영어 면접", category: "취업 준비", icon: Mic, image: "https://images.unsplash.com/photo-1676282827740-7360534b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcnZpZXclMjBwcmVwYXJhdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzczMTM2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "영어회화 전문강사", category: "교사 교육", icon: Video, image: "https://images.unsplash.com/photo-1657004632879-b5cc909b9ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdHJhaW5pbmclMjB0ZXh0Ym9va3xlbnwxfHx8fDE3NzMxMzY1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080" },
            ].map((book, i) => (
              <motion.div
                key={book.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-56 overflow-hidden">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-[12px] text-primary mb-1" style={{ fontWeight: 500 }}>{book.category}</p>
                  <h4 className="text-[15px]" style={{ fontWeight: 600 }}>{book.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="경영진"
            title="경영진 및 자문 위원"
            subtitle="풍부한 경험과 전문성을 갖춘 리더십이 그룹의 비전을 이끕니다."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/5 mb-6 shadow-inner shrink-0">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-[#4A3AFF] text-[13px] mb-2" style={{ fontWeight: 700 }}>{person.role}</p>
                  <h4 className="text-[22px] mb-1" style={{ fontWeight: 700 }}>{person.desc}</h4>
                  <p className="text-[12px] text-muted-foreground italic">{person.name}</p>
                </div>
                <ul className="w-full space-y-2 text-left mt-auto border-t border-gray-100 pt-6">
                  {person.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}