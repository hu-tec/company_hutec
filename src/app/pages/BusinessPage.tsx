import { motion } from "motion/react";
import {
  Brain,
  Languages,
  FileText,
  Mic,
  Video,
  Globe,
  Shield,
  Award,
  ArrowRight,
  ArrowDown,
  Zap,
  Users,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  Sparkles,
  Briefcase,
  Target,
  MessageSquare,
  Search,
  Handshake,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import ITT exam images
const ittExamRoom = `${import.meta.env.BASE_URL}assets/img/img_itt_exam_room.png`;
const ittMou1 = `${import.meta.env.BASE_URL}assets/img/img_itt_mou1.png`;
const ittMou2 = `${import.meta.env.BASE_URL}assets/img/img_itt_mou2.png`;
const ittConference = `${import.meta.env.BASE_URL}assets/img/img_itt_conference.png`;
const ittGroup = `${import.meta.env.BASE_URL}assets/img/img_itt_group.png`;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Updated Service List based on Image Order
const services = [
  {
    title: "ITT 통역 번역 시험",
    desc: "법무부 공인 통번역 자격 시험",
    icon: Languages,
    id: "itt",
    color: "#4A3AFF",
  },
  {
    title: "AITe 인공지능 시험",
    desc: "과기정통부 등록 민간자격",
    icon: Brain,
    id: "aite",
    color: "#7B6FFF",
  },
  {
    title: "통독 프롬프트",
    desc: "비즈니스 문서 솔루션",
    icon: FileSpreadsheet,
    id: "tongdoc",
    color: "#059669",
  },
  {
    title: "프롬프트 및 매칭",
    desc: "언어 전문가 양성 및 매칭",
    icon: Sparkles,
    id: "prompt",
    color: "#dc2626",
  },
  {
    title: "메타트랜스 AI 번역 서비스",
    desc: "AI 초벌번역 + 휴먼감수",
    icon: FileText,
    id: "metatrans",
    color: "#2563eb",
  },
  {
    title: "레쥬미",
    desc: "이력 관리 플랫폼",
    icon: Briefcase,
    id: "resume",
    color: "#6b7280",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />;
}

export default function BusinessPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              AI 신사업
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-4" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              차세대 AI 기반 비즈니스 솔루션
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              휴텍씨는 AI 기술과 전문 인력의 융합을 통해 글로벌 비즈니스의 새로운 표준을 제시하는 AI 신사업을 선도합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Banner - Redesigned */}
      <section className="relative -mt-12 sm:-mt-16 mb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border p-3 sm:p-6 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
              {services.map((svc, i) => (
                <motion.button
                  key={svc.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => scrollTo(svc.id)}
                  className="group relative flex flex-col items-center justify-center py-6 px-4 rounded-[20px] bg-white border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer text-center"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ backgroundColor: `${svc.color}14` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>
                  <div>
                    <p className="text-[14px] group-hover:text-primary transition-colors mb-1" style={{ fontWeight: 700 }}>
                      {svc.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground opacity-80" style={{ fontWeight: 500 }}>{svc.desc}</p>
                  </div>
                  <div className="w-1 h-1 bg-primary rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 1. ITT Section (Updated as per Image 1) ═══════ */}
      <section id="itt" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="국가 공인 / 인정"
            title="ITT 통역 번역 시험"
            subtitle="법무부가 공인한 시험으로 기업이 인정하는 통번역 자격증입니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { num: "01", title: "법무부 공인 시험", desc: "국가가 공인한 법무부 공식 시험으로 신뢰와 공신력이 보장됩니다." },
              { num: "02", title: "기업 인정 시험", desc: "국내 유수 기업들이 채용 및 승진 시 인정하는 공식 자격증입니다." },
              { num: "03", title: "Two Jobs 준비", desc: "전문 통번역사로서 추가 수익원을 확보하고 커리어를 확장할 수 있습니다." },
              { num: "04", title: "취업 스펙", desc: "자신만의 차별화된 스펙으로 글로벌 취업 경쟁력을 극대화합니다." },
            ].map((item, i) => (
              <motion.div key={item.num} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-muted rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-primary text-[32px]" style={{ fontWeight: 700 }}>{item.num}</span>
                <h4 className="text-[16px] mt-3 mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-[20px] mb-8" style={{ fontWeight: 700 }}>ITT 시험 운영 현황</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: "ITT 시험 현장", desc: "체계적인 시험 환경에서 전문적인 통번역 역량을 검증합니다.", img: ittExamRoom },
              { title: "양해각서 체결", desc: "양 기관 대표가 상호 협력을 위한 MOU를 공식적으로 체결했습니다.", img: ittMou1 },
              { title: "발기인 총회 발표", desc: "시험의 발전 방향과 운영 계획을 논의합니다.", img: ittConference },
              { title: "발기인 총회 단체사진", desc: "위원회의 성공적인 출범을 기념했습니다.", img: ittGroup },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow text-left">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h4 className="text-[15px] mb-1" style={{ fontWeight: 700 }}>{item.title}</h4>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 text-left border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[22px] mb-4" style={{ fontWeight: 700 }}>국제통번역시험 협약</h3>
                <p className="text-[15px] text-muted-foreground mb-6" style={{ lineHeight: 1.8 }}>
                  세계통번역시험위원회는 유수의 주요 기관들과 양해각서(MOU)를 체결하여 시험의 시작과 공정성 및 전문성을 높이고 있습니다.
                </p>
                <div className="space-y-4">
                  {[
                    "법무부 공인 시험으로서의 권위",
                    "주요 기관과의 전략적 파트너십",
                    "시험 운영 및 공정성 확보",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[14px]" style={{ fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={ittMou2} alt="ITT MOU Ceremony" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ 2. AITe Section (Updated as per Image 2) ═══════ */}
      <section id="aite" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="과기정통부 등록"
            title="AITe 인공지능 시험"
            subtitle="과학기술정보통신부 등록번호 2021-004386, AI 번역 전문가 자격증 시험입니다."
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Shield, title: "민간자격등록증", desc: "과학기술정보통신부 정식 승인 (2021년).", color: "#4A3AFF" },
              { icon: Award, title: "공식 자격증", desc: "인공지능 언어전문가 및 기술전문가 자격 인증.", color: "#7B6FFF" },
              { icon: FileText, title: "시험 구성", desc: "AI 번역 전문가 실무 역량을 체계적으로 검증.", color: "#059669" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${item.color}14` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-[17px] mb-3" style={{ fontWeight: 700 }}>{item.title}</h3>
                <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 lg:p-12 text-left shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-[22px] mb-5" style={{ fontWeight: 700 }}>AITe 시험 소개</h3>
                <p className="text-[15px] text-muted-foreground mb-6" style={{ lineHeight: 1.8 }}>
                  AI 번역 전문가 자격증은 인공지능 시대에 필수적인 역량을 검증하는 자격증 시험입니다. The Korea Times 등 주요 언론에 소개되었으며, 모바일 앱을 통해서도 응시할 수 있습니다.
                </p>
                <div className="grid gap-3">
                  {[
                    "과학기술정보통신부 공식 등록",
                    "인공지능 언어전문가 자격 인증",
                    "인공지능 기술전문가 자격 인증",
                    "온/오프라인 시험 지원",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2VydGlmaWNhdGUlMjBncmFkdWF0ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMyMTU1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AITe Certification"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ 3. Tongdoc Section (Updated as per Image 3) ═══════ */}
      <section id="tongdoc" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[13px] mb-4" style={{ fontWeight: 600 }}>비즈니스 솔루션</span>
            <h2 className="text-[32px] sm:text-[40px] mb-2" style={{ fontWeight: 800 }}>통독 프롬프트 서비스</h2>
            <p className="text-primary text-[18px] mb-4" style={{ fontWeight: 600 }}>통독 프롬프트</p>
            <p className="text-muted-foreground text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>글로벌 비즈니스, HuTechC '통독'으로 잇다. 올인원 비즈니스 문서 솔루션입니다.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-[19px] mb-6 flex items-center gap-2" style={{ fontWeight: 700 }}>
                통독이란?
              </h3>
              <div className="space-y-8">
                {[
                  { icon: Target, title: "주요 타켓 고객", desc: "Start-Up Accelerator 등 글로벌 비즈니스를 준비하는 기업과 전문가" },
                  { icon: MessageSquare, title: "고객의 Pain Points", desc: "해외 진출 시 필요한 문서 준비, 번역, 서식 통합의 복잡성과 높은 비용" },
                  { icon: Sparkles, title: "고객에게 주는 가치", desc: "원스톱 솔루션으로 시간과 비용을 절약하고, 전문가 컨설팅까지 제공" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[16px] mb-1" style={{ fontWeight: 700 }}>{item.title}</h4>
                      <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[19px] mb-6" style={{ fontWeight: 700 }}>핵심 기능</h3>
              <div className="space-y-3">
                {[
                  "서식 통합서비스",
                  "다국어 문서 번역 서비스",
                  "전문가 컨설팅 서비스",
                  "비즈니스 문서 템플릿",
                  "AI 소통 서비스",
                ].map((feature, i) => (
                  <motion.div key={feature} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                    <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary text-[14px] shadow-sm" style={{ fontWeight: 700 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]" style={{ fontWeight: 600 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-[20px] mb-8 text-center" style={{ fontWeight: 700 }}>서비스 비교표</h3>
          <motion.div {...fadeUp} className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full min-w-[600px] text-center">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="py-5 px-4 text-[14px] text-left pl-10" style={{ fontWeight: 700 }}>플랫폼</th>
                  <th className="py-5 px-4 text-[14px]" style={{ fontWeight: 700 }}>주요 서비스</th>
                  <th className="py-5 px-4 text-[14px]" style={{ fontWeight: 700 }}>문서 서비스</th>
                  <th className="py-5 px-4 text-[14px]" style={{ fontWeight: 700 }}>번역 서비스</th>
                  <th className="py-5 px-4 text-[14px]" style={{ fontWeight: 700 }}>전문가 컨설팅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "HuTechC", main: true, doc: true, translate: true, consulting: true },
                  { name: "엑스폼", main: false, doc: true, translate: false, consulting: false },
                  { name: "크몽", main: false, doc: false, translate: true, consulting: false },
                  { name: "Flitto", main: false, doc: false, translate: true, consulting: false },
                ].map((comp) => (
                  <tr key={comp.name} className={`border-b border-border last:border-0 ${comp.main ? "bg-primary/5" : ""}`}>
                    <td className="py-5 px-4 text-left pl-10">
                      <span className={`text-[15px] ${comp.main ? "text-primary" : ""}`} style={{ fontWeight: comp.main ? 700 : 500 }}>{comp.name}</span>
                    </td>
                    {[comp.main, comp.doc, comp.translate, comp.consulting].map((val, i) => (
                      <td key={i} className="py-5 px-4">
                        {val ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ 4. Prompt Section (Updated as per Image 4) ═══════ */}
      <section id="prompt" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="언어전문가 양성"
            title="프롬프트 및 전문가 매칭"
            subtitle="GPT 활용 AI 시대, 기업이 원하는 ITT 자격증 소지 프롬프트 언어 전문가를 양성합니다."
          />
          <p className="text-primary text-[18px] mb-12 -mt-6" style={{ fontWeight: 600 }}>프롬프트 및 매칭</p>

          <motion.div {...fadeUp} className="max-w-4xl mx-auto bg-primary rounded-[24px] p-10 lg:p-16 text-white text-center mb-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-32 h-32" />
            </div>
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h2 className="text-[32px] sm:text-[40px] mb-4" style={{ fontWeight: 800 }}>GPT 활용 AI</h2>
            <p className="text-white/80 text-[17px] leading-relaxed max-w-2xl mx-auto">
              인공지능 시대, 프롬프트 엔지니어링과 언어 전문성을 결합한 새로운 인재상을 제시합니다.
            </p>
          </motion.div>

          <h3 className="text-[22px] mb-8" style={{ fontWeight: 700 }}>프롬프트 언어 전문가란?</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "AI 언어 활용 능력", desc: "GPT 등 AI 도구를 활용한 고품질 번역 및 콘텐츠 생성 역량" },
              { title: "ITT 자격증 기반", desc: "정부공인 민간자격증을 바탕으로 AI 도구의 한계를 보완하는 능력" },
              { title: "기업 맞춤 인재", desc: "기업이 실제로 필요로 하는 AI+언어 융합형 전문가" },
              { title: "미래 산업 적응력", desc: "빠르게 변화하는 AI 환경에 유연하게 대응하는 인재상" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl border border-border text-left hover:shadow-md transition-all">
                <h4 className="text-[16px] mb-2" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ 5. MetaTrans Section (Updated as per Image 5) ═══════ */}
      <section id="metatrans" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="AI 통번역 서비스"
            title="메타트랜스 AI 번역 서비스"
            subtitle="AI 초벌번역 + 휴먼감수로 속도 2배, 가격 50%의 최적 번역을 제공합니다."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { step: "1차", title: "AI 초벌번역", desc: "파일 형식 그대로 유지! AI가 빠르게 초벌 번역을 수행합니다.", icon: Brain, color: "#4A3AFF" },
              { step: "2차", title: "휴먼 감수", desc: "100% 더 완벽한 번역! 전문 번역사가 품질을 검증합니다.", icon: Users, color: "#2563eb" },
              { step: "결과", title: "속도 2배, 가격 50%", desc: "AI와 인간의 협업으로 최적의 품질과 가격을 제공합니다.", icon: Zap, color: "#059669" },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${item.color}14` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-[12px] mb-3" style={{ fontWeight: 700 }}>{item.step}</div>
                <h3 className="text-[17px] mb-2" style={{ fontWeight: 700 }}>{item.title}</h3>
                <p className="text-[13px] text-muted-foreground max-w-[240px] mx-auto leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-[20px] mb-8" style={{ fontWeight: 700 }}>4가지 주요 서비스</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[
              { title: "TTS 아나운서", question: "사내 방송을 위해 아직도 아나운서를 고용하시나요?", desc: "AI TTS 기술로 전문 아나운서 수준의 음성을 생성합니다.", icon: Mic },
              { title: "STT 속기사", question: "회의록 정리에 시간을 낭비하고 계신가요?", desc: "AI 음성인식으로 빠르고 정확한 텍스트 변환을 제공합니다.", icon: FileText },
              { title: "동시 통역", question: "국제 회의에서 통역사 섭외가 어려우신가요?", desc: "109개 언어 AI 동시통역으로 실시간 소통을 지원합니다.", icon: Globe },
              { title: "영상 번역", question: "유튜브 영상의 자막 번역이 필요하신가요?", desc: "영상 콘텐츠의 다국어 자막을 자동으로 생성합니다.", icon: Video },
            ].map((svc, i) => (
              <motion.div key={svc.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-muted rounded-2xl p-6 text-left border border-transparent hover:border-primary/20 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[16px] mb-1" style={{ fontWeight: 700 }}>{svc.title}</h4>
                    <p className="text-[13px] text-primary mb-2" style={{ fontWeight: 600 }}>{svc.question}</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="bg-primary rounded-[24px] p-10 lg:p-16 text-white text-center shadow-xl">
            <FileSpreadsheet className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h3 className="text-[24px] mb-2" style={{ fontWeight: 700 }}>문서 번역</h3>
            <p className="text-white/80 text-[16px] mb-6">회사 소개서를 해외 기업에 전달하셔야 하나요?</p>
            <div className="text-[36px] sm:text-[48px] mb-2" style={{ fontWeight: 800 }}>1분 ONE-STOP</div>
            <p className="text-white/70 text-[15px]">영어, 일어, 중국어 등 모든 문서 번역을 지원합니다.</p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ Resume Section ═══════ */}
      <section id="resume" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Briefcase className="w-9 h-9 text-muted-foreground" />
          </div>
          <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-[12px] text-muted-foreground mb-4" style={{ fontWeight: 600 }}>레쥬미</span>
          <h2 className="text-[24px] mb-3" style={{ fontWeight: 600 }}>서비스 준비 중</h2>
          <p className="text-muted-foreground text-[15px]" style={{ lineHeight: 1.7 }}>
            전문가 이력 관리 플랫폼 레쥬미 서비스는 현재 기획 및 개발 중입니다.
            빠른 시일 내에 더 나은 서비스로 찾아뵙겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
