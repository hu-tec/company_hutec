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
import imgCivilQualification from "figma:asset/633d5d434ea6e6fca69eca484434aa27ad4f2b5b.png";
import imgWomenEnterprise from "figma:asset/c47fb3ee056c64daa65a7d2e3c0632335a74f5b9.png";
import imgExportCert from "figma:asset/06c174071f251358c3eaf356c40043dc650416a3.png";
import imgStartupCert from "figma:asset/b1d358d6781a572cb3fc9ee8869d3096b725bdda.png";
import imgResearchInstitute from "figma:asset/ef6dd4e63014318b4426dae31a7da7c25671e017.png";

// First batch of 10 agreement images
import imgJuilletMOU from "figma:asset/077b48673c977569619911b08e0c9c152c4af280.png";
import imgJuilletHandwritten from "figma:asset/a490847678318edb19ea57142835738d43612e43.png";
import imgAgreemAITranslation from "figma:asset/4850bae1305885afb3e5fe0a89ac6bcf69c655a8.png";
import imgAgreemHumanEditing from "figma:asset/632b32d4c56afea021e8e464ef157a20259d2c2f.png";
import imgShinhanUnivMOU from "figma:asset/158f439f38074ec6c636d16327502bc5c50d9b40.png";
import imgYonseiUnivMOU from "figma:asset/f924f835a12e1715aedfaf1d9cbd3fe20ceb81c2.png";
import imgBabeCosmeticsMOU from "figma:asset/fa9464a2ba454b5d9454292d03a1db47810a4a40.png";
import imgIAEEduNetMOU from "figma:asset/44146a0bced6d0625b6611cb069fb0441598ce11.png";
import imgWiseSTGlobalMOU from "figma:asset/fbbfc907842ec804aa5f08d7d54dee92a3fad1a9.png";

// Second batch
import imgAgreemHumanEditingExam from "figma:asset/514b292089faf966fb87b51e727259259e069b27.png";
import imgMOJExplanation from "figma:asset/40955f27c15b920af34ad89dec4860f8d5abb627.png";
import imgExportJuliet from "figma:asset/59aa02f184df058439cc714510a656ac21937c0b.png";
import imgExportIAE from "figma:asset/06c174071f251358c3eaf356c40043dc650416a3.png";
import imgKuktongSystranAgreem from "figma:asset/5a5e68f97f5382dcb1ed19b8e97aede220d36905.png";
import imgHutechcSystranAgreem from "figma:asset/15e458a84b9177b7069c25bd588db38f0061a10f.png";
import imgXYCBAgreem from "figma:asset/a3ae32e5eff5250c2fd0250b0f47843b5ece569e.png";
import imgWomenFriendlyAgreem from "figma:asset/f8362560f211f1a8748122720439b6118adbdc23.png";
import imgWomenEnterpriseCert from "figma:asset/c47fb3ee056c64daa65a7d2e3c0632335a74f5b9.png";
import imgVentureCertReal from "figma:asset/4cf259b1b2d49b92078fcfec5b8534f2ff1cb066.png";

// Third batch
import imgISCommAgreem from "figma:asset/fb17610f9e3ba5cedabe59bb56e2a9932b6f0152.png";
import imgSMBizCert from "figma:asset/a658bb2ed6919f0fdb4c9c7a1a30a6d44aa875c4.png";
import imgTwigfarmAgreem from "figma:asset/72d44252af9085a57ff0680663eec625d16909b9.png";

// Fourth batch
import imgPatentRelayCert from "figma:asset/a900f957b7e0ab0fa2d0bc0e5fec1833410c827b.png";
import imgPatentOptimizedCert from "figma:asset/0d6b803d565aa1189874bfa7ecd3e76c2e6a6a9d.png";
import imgKitelaAgreem from "figma:asset/1b5ef7fc6f4ae55fbc3633969eb99e68c5d9015b.png";
import imgPatentInterpretationCert from "figma:asset/eff7d9f934a0f6b716644f6d085e8ca6b06be206.png";
import imgPatentTranslationCert from "figma:asset/a1d6d7ad8553917472401c0f23584e571a7b44be.png";

// Partnerships images
import ittMou1 from "figma:asset/b1b0a869ab05825812326f44301e800f5dad91c6.png";
import ittMou2 from "figma:asset/a67c8d9d080dc37bf6dc25d4421af91af2131101.png";
import ittGroup from "figma:asset/7b3951fefa7f9a66d7ed2fdfe3867cdc1505cd62.png";
import yonseiICS from "figma:asset/2081838724bc1dfa788192cd63b2e74319574e58.png";
import floridaVisit from "figma:asset/eb7f325c42c6e39957505ae2b1a8b318e8db6a6a.png";
import montclairVisit from "figma:asset/29ff7e3b39375a4b97a9eb2bf7c234cc245032f5.png";
import businessMeeting from "figma:asset/36d9a81c4ff3e8a49038d5f695dc4fbc63373209.png";
import modernBuilding from "figma:asset/2ffe39ec10ba57977c9aa1b94cc07edbfb8ffe34.png";

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

      {/* 2. Overseas University (from PartnersPage) */}
      <section id="overseas-uni" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 대학 연계"
            title="글로벌 교육 인프라"
            subtitle="캐나다 UBC, 미국 퍼듀 대학교 등 글로벌 명문 대학과 연계한 교육 프로그램을 운영합니다."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={floridaVisit} alt="USF Visit" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white"><p className="text-[13px] font-semibold text-center">University of South Florida</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={montclairVisit} alt="Montclair Visit" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white"><p className="text-[13px] font-semibold text-center">Montclair State University</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={businessMeeting} alt="Meeting" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white"><p className="text-[13px] font-semibold text-center">글로벌 파트너 미팅</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={modernBuilding} alt="Building" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white"><p className="text-[13px] font-semibold text-center">현지 교육 센터 방문</p></div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <img src={yonseiICS} alt="Yonsei ICS" className="w-full h-64 object-cover" />
              <div className="p-5">
                <p className="text-[14px] font-bold mb-2">Yonsei University & ICS School</p>
                <p className="text-[13px] text-muted-foreground">글로벌 영어캠프 협약식. 연세대와 ICS 국제학교의 파트너십을 통한 글로벌 교육 운영.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-[18px] mb-6" style={{ fontWeight: 700 }}>주요 연계 대학 및 기관</h3>
              <div className="grid grid-cols-2 gap-4">
                {["캐나다 UBC 교육원", "Purdue University", "IVY Tech (미국)", "LA 한미교육원", "USM 대학교", "CSULB University"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
