import { useState } from "react";
import { motion } from "motion/react";
import {
  Shield,
  Award,
  FileCheck,
  Lightbulb,
  Handshake,
  Globe,
  Building2,
  ScrollText,
  BadgeCheck,
  BookOpen,
  FileText,
  ImageIcon,
  ArrowDown,
  Languages,
  GraduationCap,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Real document images (from CertificationsPage)
const imgCivilQualification = `${import.meta.env.BASE_URL}assets/img/img_civil_qualification_cert.png`;
const imgWomenEnterprise = `${import.meta.env.BASE_URL}assets/img/img_women_enterprise_cert.png`;
const imgExportCert = `${import.meta.env.BASE_URL}assets/img/img_export_cert.png`;
const imgStartupCert = `${import.meta.env.BASE_URL}assets/img/img_startup_cert.png`;
const imgResearchInstitute = `${import.meta.env.BASE_URL}assets/img/img_research_institute_cert.png`;

// First batch of 10 agreement images
const imgJuilletMOU = `${import.meta.env.BASE_URL}assets/img/img_juillet_mou.png`;
const imgJuilletHandwritten = `${import.meta.env.BASE_URL}assets/img/img_juillet_handwritten.png`;
const imgAgreemAITranslation = `${import.meta.env.BASE_URL}assets/img/img_agreem_ai_translation.png`;
const imgAgreemHumanEditing = `${import.meta.env.BASE_URL}assets/img/img_agreem_human_editing.png`;
const imgShinhanUnivMOU = `${import.meta.env.BASE_URL}assets/img/img_shinhan_univ_mou.png`;
const imgYonseiUnivMOU = `${import.meta.env.BASE_URL}assets/img/img_yonsei_univ_mou.png`;
const imgBabeCosmeticsMOU = `${import.meta.env.BASE_URL}assets/img/img_babe_cosmetics_mou.png`;
const imgIAEEduNetMOU = `${import.meta.env.BASE_URL}assets/img/img_iae_edunet_mou.png`;
const imgWiseSTGlobalMOU = `${import.meta.env.BASE_URL}assets/img/img_wise_st_global_mou.png`;

// Second batch
const imgAgreemHumanEditingExam = `${import.meta.env.BASE_URL}assets/img/img_agreem_human_editing_exam.png`;
const imgMOJExplanation = `${import.meta.env.BASE_URL}assets/img/img_moj_explanation.png`;
const imgExportJuliet = `${import.meta.env.BASE_URL}assets/img/img_export_juillet.png`;
const imgExportIAE = `${import.meta.env.BASE_URL}assets/img/img_export_cert.png`;
const imgKuktongSystranAgreem = `${import.meta.env.BASE_URL}assets/img/img_kuktong_systran_agreem.png`;
const imgHutechcSystranAgreem = `${import.meta.env.BASE_URL}assets/img/img_hutechc_systran_agreem.png`;
const imgXYCBAgreem = `${import.meta.env.BASE_URL}assets/img/img_xycb_agreem.png`;
const imgWomenFriendlyAgreem = `${import.meta.env.BASE_URL}assets/img/img_women_friendly_agreem.png`;
const imgWomenEnterpriseCert = `${import.meta.env.BASE_URL}assets/img/img_women_enterprise_cert.png`;
const imgVentureCertReal = `${import.meta.env.BASE_URL}assets/img/img_venture_cert.png`;

// Third batch
const imgISCommAgreem = `${import.meta.env.BASE_URL}assets/img/img_iscomm_agreem.png`;
const imgSMBizCert = `${import.meta.env.BASE_URL}assets/img/img_smbiz_cert.png`;
const imgTwigfarmAgreem = `${import.meta.env.BASE_URL}assets/img/img_twigfarm_agreem.png`;

// Fourth batch
const imgPatentRelayCert = `${import.meta.env.BASE_URL}assets/img/img_patent_relay_cert.png`;
const imgPatentOptimizedCert = `${import.meta.env.BASE_URL}assets/img/img_patent_optimized_cert.png`;
const imgKitelaAgreem = `${import.meta.env.BASE_URL}assets/img/img_kitela_agreem.png`;
const imgPatentInterpretationCert = `${import.meta.env.BASE_URL}assets/img/img_patent_interpretation_cert.png`;
const imgPatentTranslationCert = `${import.meta.env.BASE_URL}assets/img/img_patent_translation_cert.png`;

// Partnerships images
const ittMou1 = `${import.meta.env.BASE_URL}assets/img/img_itt_mou1.png`;
const ittMou2 = `${import.meta.env.BASE_URL}assets/img/img_itt_mou2.png`;
const ittGroup = `${import.meta.env.BASE_URL}assets/img/img_itt_group.png`;
const yonseiICS = `${import.meta.env.BASE_URL}assets/img/img_yonsei_ics.png`;
const floridaVisit = `${import.meta.env.BASE_URL}assets/img/img_florida_visit.png`;
const montclairVisit = `${import.meta.env.BASE_URL}assets/img/img_montclair_visit.png`;
const businessMeeting = `${import.meta.env.BASE_URL}assets/img/img_business_meeting.png`;
const modernBuilding = `${import.meta.env.BASE_URL}assets/img/img_modern_building.png`;

// Placeholder images
const imgCultureCert = "https://images.unsplash.com/photo-1646769762753-565020b3bb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGNlcnRpZmljYXRlJTIwZG9jdW1lbnQlMjBnb2xkJTIwc2VhbHxlbnwxfHx8fDE3NzMyMDIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgScienceCert = "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaXBsb21hJTIwY2VydGlmaWNhdGUlMjBzZWFsfGVufDF8fHx8MTc3MzIwMjMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgCanadaSales = "https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzb2Z0d2FyZSUyMHNhbGVzJTIwY29udHJhY3QlMjBtYXB8ZW58MXx8fHwxNzczMjAyMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgKectaAgreem = "https://images.unsplash.com/photo-1758519288905-38b7b00c1023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwYWdyZWVtZW50JTIwY29udHJhY3QlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzczMjAyMzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ───────── Section anchors ───────── */
const sections = [
  { id: "domestic", label: "국내 협약", icon: Handshake, color: "#4A3AFF" },
  { id: "overseas-uni", label: "해외 대학 연계", icon: GraduationCap, color: "#2563eb" },
  { id: "overseas-trans", label: "해외 통번역 연계", icon: Languages, color: "#0891b2" },
  { id: "patents", label: "특허 및 지산권", icon: ScrollText, color: "#7C3AED" },
  { id: "corporate", label: "기업 인증", icon: BadgeCheck, color: "#059669" },
  { id: "government", label: "정부 승인", icon: Shield, color: "#2563eb" },
  { id: "hutechc", label: "휴텍씨 협약", icon: FileText, color: "#4A3AFF" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/* ───────── Data ───────── */

const patents = [
  { title: "통역번역서비스", status: "특허등록", year: "2023", icon: ScrollText, image: imgPatentInterpretationCert },
  { title: "번역서비스", status: "특허등록", year: "2023", icon: ScrollText, image: imgPatentTranslationCert },
  { title: "프롬프트활용서비스", status: "특허출원", year: "2024", icon: Lightbulb, image: imgPatentOptimizedCert },
  { title: "프롬프트릴레이시스템", status: "특허출원", year: "2024", icon: Lightbulb, image: imgPatentRelayCert },
];

const corporateCertifications = [
  { title: "여성기업확인서", year: "2020", icon: BadgeCheck, image: imgWomenEnterpriseCert },
  { title: "벤처기업확인서", year: "2022", icon: Award, image: imgVentureCertReal },
  { title: "창업기업확인서", year: "2020", icon: FileCheck, image: imgStartupCert },
  { title: "중소기업확인서", year: "2022", icon: Building2, image: imgSMBizCert },
];

const governmentApprovals = [
  { title: "과학기술정보통신부 민간자격증 승인", year: "2021", icon: Shield, image: imgCivilQualification },
  { title: "문화관광부 자격증", year: "2008", icon: Award, image: imgCultureCert },
  { title: "과학기술부 자격증", year: "2021", icon: Award, image: imgScienceCert },
  { title: "법무부 승인", year: "2010", icon: Shield, image: imgMOJExplanation },
  { title: "연구개발전담부서 인정서", year: "2021", icon: BookOpen, image: imgResearchInstitute },
];

const hutechcAgreements = [
  { title: "AI 통번역 교육 산학협력 체결", partner: "신한대학교", year: "2021년~", category: "교육", image: imgShinhanUnivMOU },
  { title: "AI통번역 교육 언어교육원 체결", partner: "연세대학교", year: "2018년~", category: "교육", image: imgYonseiUnivMOU },
  { title: "AI 소프트웨어 시스템 판매", partner: "캐나다", year: "2021년~", category: "해외판매", image: imgJuilletHandwritten },
  { title: "AI 번역 시스템 판매", partner: "AIE edu.", year: "2021년~", category: "해외판매", image: imgIAEEduNetMOU },
  { title: "AI 소프트웨어 시스템 협약", partner: "시스트란", year: "2020년~", category: "기술협약", image: imgHutechcSystranAgreem },
  { title: "AI 번역 시스템 판매", partner: "Juillet Beauty Center (캐나다)", year: "2021년~", category: "해외판매", image: imgJuilletMOU },
  { title: "AI 소프트웨어 시스템 판매 협약", partner: "와이즈트랜스", year: "2019년~", category: "기술협약", image: imgWiseSTGlobalMOU },
  { title: "여성친화기업 협약서", partner: "", year: "2021년", category: "인증", image: imgWomenFriendlyAgreem },
  { title: "통번역 업무제휴", partner: "엑스와이씨비", year: "2022년~", category: "업무제휴", image: imgXYCBAgreem },
  { title: "통번역 업무제휴", partner: "이즈커뮤니케이션즈", year: "2022년~", category: "업무제휴", image: imgISCommAgreem },
  { title: "AI 번역 시스템 판매", partner: "BABE (캐나다)", year: "2021년~", category: "해외판매", image: imgBabeCosmeticsMOU },
  { title: "AI 소프트웨어 시스템 협약", partner: "트워크그룹 (Twigfarm)", year: "2022년~", category: "기술협약", image: imgTwigfarmAgreem },
  { title: "통번역 업무제휴", partner: "한국정보통신윤리지도자협회", year: "2022년", category: "업무제휴", image: imgKitelaAgreem },
  { title: "인공지능 번역사 시험 (AITe) 협약서", partner: "국통+휴텍씨", year: "2018년~", category: "시험협약", image: imgAgreemAITranslation },
  { title: "인공지능 번역+휴먼감수 교육 협약서", partner: "국통+휴텍씨", year: "2018년~", category: "교육", image: imgAgreemHumanEditingExam },
];

/* ───────── Card Components ───────── */

function DocumentCard({
  title,
  year,
  icon: Icon,
  color = "#4A3AFF",
  badge,
  image,
}: {
  title: string;
  year?: string;
  icon: React.ElementType;
  color?: string;
  badge?: string;
  image?: string;
}) {
  return (
    <div className="group bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-3 overflow-hidden">
        {!image && (
          <>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${color}14` }}
            >
              <ImageIcon className="w-6 h-6" style={{ color }} />
            </div>
            <span className="text-[12px] text-muted-foreground text-center">이미지 준비 중</span>
          </>
        )}
        {image && (
          <>
            {/* Fully blurred background */}
            <div className="absolute inset-0 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover blur-[8px] opacity-30" />
            </div>
            {/* Slightly visible portion (2/3) */}
            <div className="absolute inset-x-3 top-3 bottom-[33%]">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg shadow-lg opacity-40 blur-[1px]" />
            </div>
          </>
        )}
        <div className="absolute top-3 left-3 right-16">
          <h4 className="text-[13px] text-foreground bg-white/95 px-2 py-1 rounded shadow-sm backdrop-blur-sm" style={{ fontWeight: 700 }}>
            {title}
          </h4>
        </div>
        {year && (
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] text-white shadow-md"
            style={{ fontWeight: 700, backgroundColor: color }}
          >
            {year}
          </span>
        )}
        {badge && !year && (
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] text-white shadow-md"
            style={{ fontWeight: 600, backgroundColor: color }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-2.5 flex items-center justify-center border-t border-border bg-gray-50/50">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ backgroundColor: `${color}14` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </div>
      </div>
    </div>
  );
}

function AgreementCard({
  title,
  partner,
  year,
  image,
}: {
  title: string;
  partner: string;
  year: string;
  image?: string;
}) {
  return (
    <div className="group bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-3 overflow-hidden">
        {!image && (
          <>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/80 transition-transform group-hover:scale-110">
              <ImageIcon className="w-6 h-6 text-[#4A3AFF]/40" />
            </div>
            <span className="text-[12px] text-muted-foreground text-center">협약서 이미지 준비 중</span>
          </>
        )}
        {image && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover blur-[8px] opacity-40" />
            </div>
            <div className="absolute inset-x-3 top-3 bottom-[33%]">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg shadow-lg blur-[1.5px] opacity-60" />
            </div>
          </>
        )}
        <div className="absolute top-3 left-3 right-16">
          <h4 className="text-[13px] text-foreground bg-white/95 px-2 py-1 rounded shadow-sm backdrop-blur-sm" style={{ fontWeight: 700 }}>
            {title}
          </h4>
        </div>
        {year && (
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] text-white bg-[#4A3AFF] shadow-md"
            style={{ fontWeight: 700 }}
          >
            {year}
          </span>
        )}
      </div>
      <div className="p-2.5 flex items-center justify-center border-t border-border bg-gray-50/50">
        <div className="w-6 h-6 rounded-md flex items-center justify-center bg-[#4A3AFF]/10">
          <Handshake className="w-3.5 h-3.5 text-[#4A3AFF]" />
        </div>
      </div>
    </div>
  );
}

/* ───────── Page Component ───────── */
export function PartnershipsAndCertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAgreements =
    activeCategory === "all"
      ? hutechcAgreements
      : hutechcAgreements.filter((a) => a.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              파트너십 및 인증
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              신뢰를 증명하는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                글로벌 파트너십과 인증
              </span>
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              국내외 유수 기관과의 전략적 파트너십과 다수의 공식 인증 및 특허를 통해 휴텍씨의 전문성과 신뢰도를 확인하실 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav Buttons */}
      <section className="py-10 bg-white border-b border-border sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${sec.color}14` }}>
                  <sec.icon className="w-3.5 h-3.5" style={{ color: sec.color }} />
                </div>
                <span className="text-[13px] group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>{sec.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Domestic Agreements (from PartnersPage) */}
      <section id="domestic" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="국내 협약"
            title="국내 주요 업무 협약"
            subtitle="국제통번역시험위원회와의 긴밀한 협력을 통해 전문 인재 양성과 산업 발전을 선도합니다."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
              <img src={ittMou1} alt="ITT MOU" className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-[14px] text-muted-foreground">국제통번역시험 후원 양해각서 체결식</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
              <img src={ittMou2} alt="ITT MOU" className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-[14px] text-muted-foreground">국제통번역시험위원회 정책 회의 및 협약</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
              <img src={ittGroup} alt="ITT Group" className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-[14px] text-muted-foreground">국제통번역시험위원회 발기인 총회</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overseas University */}
      <section id="overseas-uni" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 대학 연계"
            title="해외 대학 교육 연계"
            subtitle="캐나다, 미국 등 세계 주요 대학 및 교육원과 교육 연계 프로그램을 운영합니다."
          />
          
          {/* 6 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px] font-bold">캐나다</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">캐나다 UBC 교육원</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">UBC Robson Square 건물에 위치한 교육원과 연계하여 글로벌 교육 프로그램을 운영합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[12px] font-bold">미국</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">Purdue University</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">미국 퍼듀 대학교와의 교육 파트너십을 통해 최신 교육 방법론을 도입합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[12px] font-bold">미국</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">CSULB University</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">캘리포니아 주립대 롱비치와 TESOL 프로그램을 공동 운영합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[12px] font-bold">말레이시아</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">USM 대학교</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">USM 대학교와의 교류를 통해 다양한 학술 프로그램을 진행합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px] font-bold">미국</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">IVY Tech</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">IVY Tech Community College와의 연계로 직업 교육 프로그램을 운영합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white p-8 rounded-[32px] border border-border h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px] font-bold">미국</span>
                </div>
                <h4 className="text-[18px] font-bold mb-3">LA 한미교육원</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">Korean Education Center와의 협력으로 재미 한국인 대상 교육 프로그램을 운영합니다.</p>
              </div>
            </FadeIn>
          </div>

          {/* 3 Large Image Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-[32px] overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-[16/9] relative overflow-hidden">
                <ImageWithFallback
                  src={businessMeeting}
                  alt="UBC Office Meeting"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h4 className="text-[18px] font-bold mb-3">UBC Office Meeting</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">UBC Robson Square에서의 사무실 미팅. 글로벌 교육 프로그램 운영을 위한 협의가 진행되었습니다.</p>
              </div>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-white rounded-[32px] overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-[16/9] relative overflow-hidden">
                <ImageWithFallback
                  src={floridaVisit}
                  alt="UBC Asian Studies"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h4 className="text-[18px] font-bold mb-3">UBC Asian Studies</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">UBC의 아시아 연구 프로그램. 다양한 문화적 배경을 가진 학생들을 위한 교육 프로그램을 운영합니다.</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="bg-white rounded-[32px] overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-[16/9] relative overflow-hidden">
                <ImageWithFallback
                  src={montclairVisit}
                  alt="UBC Continuing Studies"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <h4 className="text-[18px] font-bold mb-3">UBC Continuing Studies</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">UBC의 지속적인 교육 프로그램. 다양한 분야의 전문가들을 위한 교육 코스를 제공합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Overseas Translation (from PartnersPage) */}
      <section id="overseas-trans" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="통번역 연계"
            title="글로벌 통번역 네트워크"
            subtitle="캐나다 STIBC, 호주 NAATI 등 공신력 있는 해외 협회와 업무 연계를 통해 품질을 보장합니다."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "캐나다 STIBC 협회", desc: "캐나다 브리티시컬럼비아 통번역사 협회와 업무 제휴 및 현지 통번역 업무 연계" },
              { name: "호주 NAATI 협회", desc: "호주 공인 통번역사 인증기관과 협력을 통한 글로벌 표준 확보" },
              { name: "미국 TESOL 협회", desc: "미국 교사 교육 테솔 협회 연계 및 교사 양성 프로그램 운영" },
              { name: "미국 콩코디아 대학 시험처", desc: "통번역 시험의 국제적 공신력 확보를 위한 대학 시험처 업무 연계" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-1">{item.name}</h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Patents (from CertificationsPage) */}
      <section id="patents" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="특허 기술"
            title="독보적인 특허 및 지적재산권"
            subtitle="자체 개발한 AI 통번역 핵심 기술력을 바탕으로 시장을 선도하고 있습니다."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {patents.map((patent, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <DocumentCard
                  title={patent.title}
                  year={patent.year}
                  icon={patent.icon}
                  color="#7C3AED"
                  badge={patent.status}
                  image={patent.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Corporate Certifications (from CertificationsPage) */}
      <section id="corporate" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="기업 인증"
            title="공인된 기업 신뢰도"
            subtitle="여성기업, 벤처기업 등 다수의 인증을 통해 탄탄한 경영 기반과 기술력을 입증했습니다."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {corporateCertifications.map((cert, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <DocumentCard
                  title={cert.title}
                  year={cert.year}
                  icon={cert.icon}
                  color="#059669"
                  image={cert.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Government Approvals (from CertificationsPage) */}
      <section id="government" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="정부 승인"
            title="정부 기관 승인 및 자격증"
            subtitle="과기정통부, 법무부 등 주요 정부 부처의 공식 승인을 받은 검증된 기업입니다."
          />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {governmentApprovals.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <DocumentCard
                  title={item.title}
                  year={item.year}
                  icon={item.icon}
                  color="#2563eb"
                  image={item.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Hutechc Agreements (from CertificationsPage) */}
      <section id="hutechc" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="사업 협약"
            title="폭넓은 비즈니스 파트너십"
            subtitle="국내 유수 대학 및 글로벌 파트너사와 체결한 다양한 사업 협약 이력입니다."
          />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "교육", "기술협약", "업무제휴", "해외판매", "시험협약", "인증"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] transition-all ${
                  activeCategory === cat
                    ? "bg-[#4A3AFF] text-white shadow-md"
                    : "bg-white text-muted-foreground hover:bg-gray-100 border border-border"
                }`}
                style={{ fontWeight: 500 }}
              >
                {cat === "all" ? "전체" : cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredAgreements.map((agreement, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <AgreementCard
                  title={agreement.title}
                  partner={agreement.partner}
                  year={agreement.year}
                  image={agreement.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
