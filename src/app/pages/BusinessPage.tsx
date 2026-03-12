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
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import ITT exam images
import ittExamRoom from "figma:asset/ed406ea70074b935d3e7a951b189cc4c23cd3a3e.png";
import ittMou1 from "figma:asset/b1b0a869ab05825812326f44301e800f5dad91c6.png";
import ittMou2 from "figma:asset/a67c8d9d080dc37bf6dc25d4421af91af2131101.png";
import ittConference from "figma:asset/4494b5c7d68ea0fbe9a7ec7ec0da91fd3d5e5435.png";
import ittGroup from "figma:asset/7b3951fefa7f9a66d7ed2fdfe3867cdc1505cd62.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: "AITe 인공지능 통역번역 시험",
    desc: "과학기술정보통신부 등록 민간자격",
    icon: Brain,
    id: "aite",
    color: "#4A3AFF",
  },
  {
    title: "ITT 통역 번역 시험",
    desc: "법무부 공인 통번역 자격 시험",
    icon: Languages,
    id: "itt",
    color: "#7B6FFF",
  },
  {
    title: "메타트랜스 서비스",
    desc: "AI 초벌번역 + 휴먼감수",
    icon: FileText,
    id: "metatrans",
    color: "#2563eb",
  },
  {
    title: "통독 문서 서비스",
    desc: "글로벌 비즈니스 문서 솔루션",
    icon: FileSpreadsheet,
    id: "tongdoc",
    color: "#059669",
  },
  {
    title: "프롬프트 언어 전문가 양성",
    desc: "AI 시대 프롬프트 전문가",
    icon: Sparkles,
    id: "prompt",
    color: "#dc2626",
  },
  {
    title: "레쥬미",
    desc: "전문가 이력 관리 플랫폼",
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

/* ───── Divider ───── */
function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />;
}

/* ───── Main Page ───── */
export default function BusinessPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              사업 소개
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-4" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              휴텍씨의 핵심 서비스
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              AI 기술과 전문 인력 융합으로 비즈니스의 모든 언어 장벽을 허뭅니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[15px] text-muted-foreground flex items-center justify-center gap-2">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              클릭하면 해당 서비스로 바로 이동합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((svc, i) => (
              <motion.button
                key={svc.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => scrollTo(svc.id)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer text-left"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: svc.color }} />
                <div className="bg-white border-x border-b border-border p-4 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${svc.color}14` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>
                  <div>
                    <p className="text-[13px] group-hover:text-[#4A3AFF] transition-colors" style={{ fontWeight: 700 }}>
                      {svc.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">{svc.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ AITe Section ═══════ */}
      <section id="aite" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="자격증 시험"
            title="AITe 인공지능 통역번역 시험"
            subtitle="과학기술정보통신부 등록번호 2021-004386, AI 번역 전문가 자격증 시험입니다."
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Shield, title: "민간자격등록증", desc: "과학기술정보통신부 정식 승인 (2021년).", color: "#4A3AFF" },
              { icon: Award, title: "공식 자격증", desc: "인공지능 언어전문가 및 기술전문가 자격 인증.", color: "#2563eb" },
              { icon: FileText, title: "시험 구성", desc: "AI 번역 전문가 실무 역량을 체계적으로 검증.", color: "#059669" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-muted rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${item.color}12` }}>
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[22px] mb-4" style={{ fontWeight: 600 }}>AITe 시험 소개</h3>
                <p className="text-[15px] text-muted-foreground mb-6" style={{ lineHeight: 1.8 }}>
                  AI 번역 전문가 자격증은 인공지능 시대에 필수적인 역량을 검증하는 시험입니다.
                  The Korea Times 등 주요 언론에 소개되었으며, 모바일 앱을 통해서도 응시할 수 있습니다.
                </p>
                <div className="space-y-3">
                  {["과학기술정보통신부 정식 등록", "인공지능 언어전문가 자격 인증", "인공지능 기술전문가 자격 인증", "온/오프라인 시험 지원"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659080907168-d567d70d27ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0aW9uJTIwZXhhbXxlbnwxfHx8fDE3NzI0MjA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AITe Certification"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═════���═ ITT Section ═══════ */}
      <section id="itt" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="국가 공인 시험"
            title="ITT 통역 번역 시험"
            subtitle="법무부가 공인한 시험으로 기업이 인정하는 통번역 자격증입니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { num: "01", title: "법무부 공인 시험", desc: "국가가 공인한 통번역 자격 시험으로 공신력이 보장됩니다." },
              { num: "02", title: "기업 인정 시험", desc: "국내 주요 기업들이 채용 시 인정하는 공식 자격증입니다." },
              { num: "03", title: "Two Jobs 준비", desc: "통번역 프리랜서로서 추가 수입원을 확보할 수 있습니다." },
              { num: "04", title: "취업 스펙", desc: "차별화된 스펙으로 취업 경쟁력을 높여줍니다." },
            ].map((item, i) => (
              <motion.div key={item.num} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6">
                <span className="text-primary text-[32px]" style={{ fontWeight: 700 }}>{item.num}</span>
                <h4 className="text-[16px] mt-3 mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>ITT 시험 운영 현황</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: "ITT 시험 현장", desc: "체계적인 시험 환경에서 전문적인 통번역 역량을 검증합니다.", img: ittExamRoom },
              { title: "양해각서 체결", desc: "양 기관 대표가 상호 협력을 위한 MOU를 공식적으로 체결했습니다.", img: ittMou1 },
              { title: "발기인 총회 발표", desc: "시험의 발전 방향과 운영 계획을 논의합니다.", img: ittConference },
              { title: "발기인 총회 단체사진", desc: "위원회의 성공적인 출범을 기념했습니다.", img: ittGroup },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                  <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[20px] mb-4" style={{ fontWeight: 600 }}>국제통번역시험 협약</h3>
                <p className="text-[15px] text-muted-foreground mb-4" style={{ lineHeight: 1.8 }}>
                  국제통번역시험위원회는 국내외 주요 기관들과 양해각서(MOU)를 체결하여
                  통번역 시험의 공신력과 전문성을 높이고 있습니다.
                </p>
                <div className="space-y-3">
                  {["법무부 공인 시험으로서의 권위", "주요 기관과의 협력 체계 구축", "시험 품질 및 공정성 보장", "합격자 취업 지원 네트워크"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={ittMou2} alt="ITT MOU Ceremony" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ MetaTrans Section ═══════ */}
      <section id="metatrans" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="번역 서비스"
            title="메타트랜스 서비스"
            subtitle="AI 초벌번역 + 휴먼감수로 속도 2배, 가격 50%의 최적 번역을 제공합니다."
          />

          {/* Process */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { step: "1차", title: "AI 초벌번역", desc: "파일 형식 그대로 유지! AI가 빠르게 초벌 번역을 수행합니다.", icon: Brain, color: "#4A3AFF" },
              { step: "2차", title: "휴먼 감수", desc: "100% 더 완벽한 번역! 전문 번역사가 품질을 검증합니다.", icon: Users, color: "#2563eb" },
              { step: "결과", title: "속도 2배, 가격 50%", desc: "AI와 인간의 협업으로 최적의 품질과 가격을 제공합니다.", icon: Zap, color: "#059669" },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${item.color}12` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-[12px] mb-3" style={{ fontWeight: 600 }}>{item.step}</span>
                <h3 className="text-[17px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <h3 className="text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>4가지 주요 서비스</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[
              { title: "TTS 아나운서", question: "사내 방송을 위해 아직도 아나운서를 고용하시나요?", desc: "AI TTS 기술로 전문 아나운서 수준의 음성을 생성합니다.", icon: Mic },
              { title: "STT 속기사", question: "회의록 정리에 시간을 낭비하고 계신가요?", desc: "AI 음성인식으로 빠르고 정확한 텍스트 변환을 제공합니다.", icon: FileText },
              { title: "동시 통역", question: "국제 회의에서 통역사 섭외가 어려우신가요?", desc: "109개 언어 AI 동시통역으로 실시간 소통을 지원합니다.", icon: Globe },
              { title: "영상 번역", question: "유튜브 영상의 자막 번역이 필요하신가요?", desc: "영상 콘텐츠의 다국어 자막을 자동으로 생성합니다.", icon: Video },
            ].map((svc, i) => (
              <motion.div key={svc.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-muted rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[16px] mb-1" style={{ fontWeight: 600 }}>{svc.title}</h4>
                    <p className="text-[13px] text-primary mb-2" style={{ fontWeight: 500 }}>{svc.question}</p>
                    <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{svc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Document Translation */}
          <motion.div {...fadeUp} className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white text-center">
            <FileSpreadsheet className="w-10 h-10 mx-auto mb-4 text-white/80" />
            <h3 className="text-[22px] mb-2" style={{ fontWeight: 600 }}>문서 번역</h3>
            <p className="text-white/80 text-[15px] mb-4">회사 소개서를 해외 기업에 전달하셔야 하나요?</p>
            <p className="text-white text-[28px]" style={{ fontWeight: 700 }}>1분 ONE-STOP</p>
            <p className="text-white/70 text-[14px] mt-3">워드, 엑셀, 파워포인트 등 모든 문서 형식을 지원합니다.</p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ TongDoc Section ═══════ */}
      <section id="tongdoc" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="비즈니스 솔루션"
            title="통독 문서 서비스"
            subtitle="글로벌 비즈니스, HuTechC '통독'으로 잇다. 올인원 비즈니스 문서 솔루션입니다."
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-[18px] mb-6" style={{ fontWeight: 600 }}>통독이란?</h3>
              <div className="space-y-6">
                {[
                  { icon: Target, title: "주요 타겟 고객", desc: "Start-Up Accelerator 등 글로벌 비즈니스를 준비하는 기업과 전문가" },
                  { icon: MessageSquare, title: "고객의 Pain Points", desc: "해외 진출 시 필요한 문서 준비, 번역, 서식 통합의 복잡성과 높은 비용" },
                  { icon: Sparkles, title: "고객에게 주는 가치", desc: "원스톱 솔루션으로 시간과 비용을 절약하고, 전문가 컨설팅까지 제공" },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="text-[15px] mb-2 flex items-center gap-2" style={{ fontWeight: 600 }}>
                      <item.icon className="w-5 h-5 text-primary" />
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-muted-foreground ml-7" style={{ lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[18px] mb-6" style={{ fontWeight: 600 }}>핵심 기능</h3>
              <div className="space-y-4">
                {["서식 통합서비스", "다국어 문서 번역 서비스", "전문가 컨설팅 서비스", "비즈니스 문서 템플릿", "AI 소통 서비스"].map((feature, i) => (
                  <motion.div key={feature} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-[14px] shrink-0" style={{ fontWeight: 700 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]" style={{ fontWeight: 500 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitor Comparison */}
          <h3 className="text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>서비스 비교표</h3>
          <p className="text-[14px] text-muted-foreground text-center mb-8">HuTechC만이 주요/문서/번역 서비스 및 전문가 컨설팅을 모두 제공합니다.</p>
          <motion.div {...fadeUp} className="overflow-x-auto bg-white rounded-2xl border border-border">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-[14px]" style={{ fontWeight: 600 }}>플랫폼</th>
                  <th className="text-center py-4 px-4 text-[14px]" style={{ fontWeight: 600 }}>주요 서비스</th>
                  <th className="text-center py-4 px-4 text-[14px]" style={{ fontWeight: 600 }}>문서 서비스</th>
                  <th className="text-center py-4 px-4 text-[14px]" style={{ fontWeight: 600 }}>번역 서비스</th>
                  <th className="text-center py-4 px-4 text-[14px]" style={{ fontWeight: 600 }}>전문가 컨설팅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "HuTechC", main: true, doc: true, translate: true, consulting: true },
                  { name: "엑스폼", main: false, doc: true, translate: false, consulting: false },
                  { name: "크몽", main: false, doc: false, translate: true, consulting: false },
                  { name: "Flitto", main: false, doc: false, translate: true, consulting: false },
                ].map((comp) => (
                  <tr key={comp.name} className={`border-b border-border ${comp.main ? "bg-primary/5" : ""}`}>
                    <td className="py-4 px-4">
                      <span className={`text-[15px] ${comp.main ? "text-primary" : ""}`} style={{ fontWeight: comp.main ? 700 : 500 }}>{comp.name}</span>
                    </td>
                    {[comp.main, comp.doc, comp.translate, comp.consulting].map((val, i) => (
                      <td key={i} className="text-center py-4 px-4">
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

      {/* ═══════ Prompt Section ═══════ */}
      <section id="prompt" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="전문가 양성"
            title="프롬프트 언어 전문가 양성"
            subtitle="GPT 활용 AI 시대, 기업이 원하는 ITT 자격증 소지 프롬프트 언어 전문가를 양성합니다."
          />

          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white text-center mb-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h2 className="text-[28px] mb-3" style={{ fontWeight: 700 }}>GPT 활용 AI</h2>
              <p className="text-white/80 text-[16px]" style={{ lineHeight: 1.8 }}>
                인공지능 시대, 프롬프트 엔지니어링과 언어 전문성을 결합한 새로운 인재상을 제시합니다.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>프롬프트 언어 전문가란?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "AI 언어 활용 능력", desc: "GPT 등 AI 도구를 활용한 고품질 번역 및 콘텐츠 생성 역량" },
                  { title: "ITT 자격증 기반", desc: "통번역 전문성을 바탕으로 AI 도구의 한계를 보완하는 능력" },
                  { title: "기업 맞춤 인재", desc: "기업이 실제로 필요로 하는 AI+언어 융합형 전문가" },
                  { title: "미래 산업 적응력", desc: "빠르게 변화하는 AI 환경에 유연하게 대응하는 역량" },
                ].map((item) => (
                  <div key={item.title} className="bg-muted rounded-xl p-5">
                    <h4 className="text-[15px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                    <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
