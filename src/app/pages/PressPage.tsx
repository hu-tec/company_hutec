import { motion } from "motion/react";
import {
  Newspaper,
  Tv,
  Globe,
  Brain,
  Award,
  FileText,
  Shield,
  Building2,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
  ExternalLink,
  X,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

// Import real event images
import aiDebateHero from "figma:asset/213abecac011c9a9622bddd86089f95390d1a7d7.png";
import aiDebateRoom from "figma:asset/7717fc5df9e00360533a21fe35c3538e929d5e04.png";
import presenter from "figma:asset/8fa6867cf1343226912ecc23fcac58cde809e551.png";
import mediaPress from "figma:asset/1d46cba422cb18d6ea259b9f84acf1e7bee116be.png";
import aiDebatePoster from "figma:asset/af36826ac886c0d7fd62b83a0c6364c517ef808a.png";
import mediaScrum from "figma:asset/c9f277ee43b7ea7e269ea7b96e497fc02512805d.png";
import tvBroadcast from "figma:asset/5f746da8043d90c66c6755abdccda9fba2efce63.png";

// Additional TV broadcast images
import pressConference from "figma:asset/c146d454eb01c10e69e9d4c24858d4541558f8ca.png";
import sbsNews from "figma:asset/de0acc8fffbee19d32986cca66f9038e62182194.png";
import jtbcNews from "figma:asset/160549e540281145794f4f9aa9e40077cda02eb3.png";
import yonhapNews from "figma:asset/691f91d41bdbcc33d04c0760fe9f581b35387ccf.png";
import kbsNews1 from "figma:asset/b43b5506490ff3d005289e06136777be4171a274.png";
import kbsNews2 from "figma:asset/f631f09859803ae106e525a5928ebf50c49cab09.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function PressPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                언론 보도
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                언론이 주목한
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  휴텍씨 그룹
                </span>
              </h1>
              <p className="text-white/70 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                KBS, SBS, MBC 등 주요 방송사와 해외 언론이 주목한 활동입니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={aiDebateHero}
                alt="AI Translation Debate Event"
                className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domestic Media */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="미디어 노출"
            title="국내 언론 보도"
            subtitle="인공지능 번역 대결, 번역 시험, TESOL, 국제학교, 교육봉사 등 다양한 활동이 보도되었습니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "인공지능 번역 대결",
                desc: "구글, 파파고, 시스트란 등 주요 AI 번역기와 인간 번역사 간의 번역 대결 현장이 주요 뉴스로 보도되었습니다. 기자 및 청중이 모인 대규모 행사입니다.",
                icon: Brain,
                tags: ["KBS", "SBS", "채널A"],
              },
              {
                title: "번역 시험 관련 보도",
                desc: "영자 신문 기사 스크랩과 모바일 앱 화면이 소개되며, 통번역 시험의 공신력이 언론에서 인정받고 있습니다.",
                icon: FileText,
                tags: ["영자 신문"],
              },
              {
                title: "테솔 관련 보도",
                desc: "MBC 뉴스데스크(2008년 1월 25일) 방송에서 TESOL 교육의 가치와 성과를 집중 보도했습니다.",
                icon: Tv,
                tags: ["MBC 뉴스데스크"],
              },
              {
                title: "국제 학교 보도",
                desc: "ICS 국제학교의 교육 성과와 글로벌 인증 현황이 언론에 소개되었습니다.",
                icon: Building2,
                tags: ["교육 전문지"],
              },
              {
                title: "전국 지역아동센터 교육봉사",
                desc: "전국 지역아동센터에서의 교육봉사 활동이 사회공헌 사례로 언론에 보도되었습니다.",
                icon: Award,
                tags: ["사회 뉴스"],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-[14px] text-muted-foreground mb-4" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-primary rounded text-[12px]" style={{ fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Real Event Photos */}
          <motion.div {...fadeUp} className="mb-8">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>언론 보도 현장</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={aiDebateRoom} alt="AI Debate Conference Room" className="w-full h-[200px] object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-[13px] text-muted-foreground">번역 대결 행사장</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={presenter} alt="Event Presenter" className="w-full h-[200px] object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-[13px] text-muted-foreground">박미진 대표 발표</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={mediaPress} alt="Media Press Coverage" className="w-full h-[200px] object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-[13px] text-muted-foreground">언론사 취재 현장</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={mediaScrum} alt="Media Scrum" className="w-full h-[200px] object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-[13px] text-muted-foreground">기자단 촬영</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Press Conference Section */}
          <motion.div {...fadeUp} className="mt-12">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>기자 회견 현장</h3>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={pressConference} alt="Press Conference" className="w-full max-h-[480px] object-cover" />
              <div className="p-6 bg-white">
                <p className="text-[15px]" style={{ fontWeight: 600, marginBottom: 8 }}>인간 vs 인공지능 번역대결 기자회견</p>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  2017년 2월 21일, 국내외 주요 언론사 기자들이 참석한 가운데 인간 vs 인공지능 번역대결 행사 기자회견이 개최되었습니다.
                  KBS, SBS, JTBC, 연합뉴스 등 다수의 방송사와 언론사에서 현장을 취재했습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TV Broadcasts Grid */}
          <motion.div {...fadeUp} className="mt-12">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>주요 방송사 보도</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: kbsNews1, title: "KBS 뉴스", subtitle: "AI 번역기 vs 인간 번역 대결" },
                { img: kbsNews2, title: "KBS 뉴스", subtitle: "인간 vs 인공지능 번역 대결" },
                { img: sbsNews, title: "SBS 뉴스", subtitle: "인간 vs 인공지능 번역대결" },
                { img: jtbcNews, title: "JTBC 뉴스", subtitle: "번역 대결... 인간 vs 인공지능 세기의 대결" },
                { img: yonhapNews, title: "연합뉴스TV", subtitle: "인간이 인공지능 통했다...번역대결서 압승" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow"
                >
                  <img src={item.img} alt={item.title} className="w-full h-[180px] object-cover" />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Tv className="w-4 h-4 text-primary" />
                      <span className="text-[12px] text-primary" style={{ fontWeight: 600 }}>{item.title}</span>
                    </div>
                    <p className="text-[14px]" style={{ fontWeight: 500 }}>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overseas Media */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 언론"
            title="해외 언론 보도"
            subtitle="Korea Times, LA 한국일보, 중앙일보 등 해외 주요 언론에서 그룹의 활동을 보도했습니다."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[12px] text-blue-600" style={{ fontWeight: 600 }}>Korea Times</span>
                  <h3 className="text-[18px]" style={{ fontWeight: 600 }}>Korea Times, ILEC Sign Strategic Business Alliance</h3>
                </div>
              </div>
              <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                Korea Times와 ILEC(국제통번역협회)의 전략적 비즈니스 동맹 체결 소식이
                영문 기사로 보도되었습니다. 양측 대표가 악수하는 사진과 함께
                파트너십의 의의와 향후 계획이 상세히 보도되었습니다.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <Newspaper className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <span className="text-[12px] text-green-600" style={{ fontWeight: 600 }}>LA 한국일보 / 중앙일보 / 타임스</span>
                  <h3 className="text-[18px]" style={{ fontWeight: 600 }}>Budding Interest Off in Busan</h3>
                </div>
              </div>
              <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                LA 한국일보, 중앙일보, 타임스 등 해외 한인 언론에서 부산을 비롯한
                그룹의 지방 교육 사업 확장 소식을 보도했습니다.
                단체 사진과 인물 사진이 함께 실린 기사입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Translation Story */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] to-[#2d1b69]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="창업 스토리"
            title="인공지능 번역 시스템을 준비하며"
            subtitle="2017년 번역 대결 총괄 책임자로서 통번역 시장의 시대 변화를 인지하고, 2018년 5월 휴텍씨를 창업했습니다."
            light
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div {...fadeUp} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-white text-[18px] mb-4" style={{ fontWeight: 600 }}>
                박미진 대표 / 기획 및 진행
              </h3>
              <p className="text-white/70 text-[14px] mb-4" style={{ lineHeight: 1.8 }}>
                번역 대결 총괄 책임자로서 단상에서 행사를 기획하고 진행하며,
                ���간과 AI 번역의 미래를 목도한 경험이 휴텍씨 창업의 계기가 되었습니다.
                통번역 시장의 시대 변화를 인지하고 2018년 5월 휴텍씨를 설립했습니다.
              </p>
              <div className="rounded-xl overflow-hidden border border-white/20">
                <img src={presenter} alt="Park Mi-jin CEO Presentation" className="w-full h-[220px] object-cover" />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-white text-[18px] mb-4" style={{ fontWeight: 600 }}>
                인간 vs 인공지능 번역대결 (2017년 2월 21일)
              </h3>
              <p className="text-white/70 text-[14px] mb-4" style={{ lineHeight: 1.8 }}>
                사람의 뇌를 형상화한 실루엣과 로봇의 얼굴이 마주 보는 상징적인 행사였습니다.
                KBS, SBS, 채널A 등 주요 방송사에서 대결 현장을 보도했으며,
                심사위원석, 타자를 치는 참가자 등 현장의 열기가 전해졌습니다.
              </p>
              <div className="rounded-xl overflow-hidden border border-white/20">
                <img src={aiDebatePoster} alt="AI Debate Poster 2017" className="w-full h-[220px] object-cover" />
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="text-center mb-8">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="text-white text-[16px]" style={{ fontWeight: 600 }}>인간 vs 인공지능 번역대결</p>
                <p className="text-white/60 text-[14px]">2017년 | KBS, SBS, 채널A 보도</p>
              </div>
            </div>
          </motion.div>

          {/* TV Broadcast Section */}
          <motion.div {...fadeUp} className="mt-8">
            <h3 className="text-white text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>방송 보도 현장</h3>
            <div className="rounded-2xl overflow-hidden border border-white/20">
              <img src={tvBroadcast} alt="TV Broadcast Coverage" className="w-full max-h-[400px] object-contain bg-black/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Competitiveness */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="회사 경쟁력"
            title="인증 및 협약 현황"
            subtitle="다양한 인증서, 양해각서(MOU), 특허 출원, 연구소 등록 등 회사의 경쟁력을 증명하는 성과입니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              "2021년 AI 번역시스템 관련 출원 (2건)",
              "AI 통번역 교육을 위한 신한대학교 산학협력 체결 (2021년~)",
              "AI통번역 교육 연세대학교 언어교육원 체결 (2018~)",
              "AI 소프트웨어 시스템 판매 (2021년 / 캐나다)",
              "2021년 과학기술정보통신부 민간자격증 승인",
              "여성기업확인서 / 여성친화기업확인서",
              "2021년 연구소 등록",
              "2021년 해외 매출 2건 (캐나다)",
              "창업기업확인서",
              "중소기업확인서",
              "AI통번역 및 시험 협약 국제통번역연합회",
              "AI 시험 협약 (사)국제통번역협회 2020",
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 p-4 bg-muted rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[13px]" style={{ lineHeight: 1.6 }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation System */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="번역 시스템"
            title="메타트랜스 번역 프레임워크"
            subtitle="고객 중심의 번역 작업 프로세스와 비즈니스 모델을 체계적으로 구축했습니다."
          />

          {/* Input Stage */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "집단지성",
                desc: "메타트랜스 인증서 발급, 전문가 육성",
                icon: Award,
                color: "#4A3AFF",
              },
              {
                title: "사이트 번역",
                desc: "문서, STT, TTS, 영상, WEB, 유튜브",
                icon: Globe,
                color: "#2563eb",
              },
              {
                title: "전문번역사",
                desc: "법률, 디자인, 경영, 유학, 출판, 회계",
                icon: FileText,
                color: "#059669",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-border"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="text-[15px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-[13px] text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Arrow Down */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-primary">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Processing Stage */}
          <motion.div {...fadeUp} className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-10 text-white mb-8">
            <h3 className="text-center text-[20px] mb-6" style={{ fontWeight: 600 }}>
              메타트랜스 번역 프레임워크
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-5">
                <h4 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>자동 번역 시스템</h4>
                <ul className="space-y-2 text-white/80 text-[13px]">
                  <li>번역내용 추출</li>
                  <li>지문 분석 및 번역 산출</li>
                  <li>작업자 배정</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <h4 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>메타트랜스 MTPE 시스템</h4>
                <ul className="space-y-2 text-white/80 text-[13px]">
                  <li>원문 문장 → AI번역 → 번역 결과 출력</li>
                  <li>작업자 후편집 서치 도구</li>
                  <li>작업자 후편집</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {["비용 감소", "24시 업무", "작업 속도 증대", "정확도 상승"].map((item) => (
                <div key={item} className="text-center px-3 py-2 bg-white/10 rounded-lg text-[13px]" style={{ fontWeight: 500 }}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arrow Down */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-primary">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Results & Business Model */}
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-[18px] mb-4" style={{ fontWeight: 600 }}>기대 효과</h3>
              <div className="space-y-3">
                {[
                  "AI 번역 인증사업 활성화",
                  "신규고용창출효과",
                  "AI-인간 협업 기능 기술 활성화",
                  "메타버스 연동번역시장 선점",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-[18px] mb-4" style={{ fontWeight: 600 }}>타겟 시장</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h4 className="text-[14px] text-primary mb-2" style={{ fontWeight: 600 }}>B2C</h4>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                    번역 서비스 제공, 고용지원사업 연계 — 과기부 인증
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="text-[14px] text-blue-600 mb-2" style={{ fontWeight: 600 }}>B2B</h4>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                    메타버스/API 기술 제공, 조달청 지원 — 정보통신산업진흥원 협력
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}