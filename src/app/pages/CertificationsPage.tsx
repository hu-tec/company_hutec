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
  DollarSign,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FadeIn } from "../components/FadeIn";

// Real document images
import imgCivilQualification from "figma:asset/633d5d434ea6e6fca69eca484434aa27ad4f2b5b.png";
import imgWomenEnterprise from "figma:asset/c47fb3ee056c64daa65a7d2e3c0632335a74f5b9.png";
import imgExportCert from "figma:asset/06c174071f251358c3eaf356c40043dc650416a3.png";
import imgStartupCert from "figma:asset/b1d358d6781a572cb3fc9ee8869d3096b725bdda.png";
import imgWomenFriendly from "figma:asset/7bc5531d27acfe90240a0dd42a351e6dadcf614d.png";
import imgResearchInstitute from "figma:asset/ef6dd4e63014318b4426dae31a7da7c25671e017.png";
import imgVentureCert from "figma:asset/4cf259b1b2d49b92078fcfec5b8534f2ff1cb066.png";

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

// Second batch of agreement and cert images
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

// Third batch of agreement, patent, and biz cert images
import imgISCommAgreem from "figma:asset/fb17610f9e3ba5cedabe59bb56e2a9932b6f0152.png";
import imgSMBizCert from "figma:asset/a658bb2ed6919f0fdb4c9c7a1a30a6d44aa875c4.png";
import imgPatentApplicationCert from "figma:asset/4a104c798f6e72750fdfca7fd661faa231bab784.png";
import imgPatentTranslationCert from "figma:asset/a1d6d7ad8553917472401c0f23584e571a7b44be.png";
import imgPatentInterpretationCert from "figma:asset/eff7d9f934a0f6b716644f6d085e8ca6b06be206.png";
import imgTwigfarmAgreem from "figma:asset/72d44252af9085a57ff0680663eec625d16909b9.png";

// Fourth batch of images
import imgPatentRelayCert from "figma:asset/a900f957b7e0ab0fa2d0bc0e5fec1833410c827b.png";
import imgPatentOptimizedCert from "figma:asset/0d6b803d565aa1189874bfa7ecd3e76c2e6a6a9d.png";
import imgKitelaAgreem from "figma:asset/1b5ef7fc6f4ae55fbc3633969eb99e68c5d9015b.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ───────── Section anchors ───────── */
const sections = [
  { id: "patents", label: "특허 및 지적재산권", icon: ScrollText, color: "#7C3AED" },
  { id: "corporate", label: "기업 인증", icon: BadgeCheck, color: "#059669" },
  { id: "government", label: "정부 승인", icon: Shield, color: "#2563eb" },
  { id: "overseas", label: "해외 매출", icon: Globe, color: "#0891b2" },
  { id: "hutechc", label: "휴텍씨 협약", icon: Handshake, color: "#4A3AFF" },
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
  { title: "문화관광부 자격증", year: "2008", icon: Award },
  { title: "과학기술부 자격증", year: "2021", icon: Award },
  { title: "법무부 승인", year: "2010", icon: Shield, image: imgMOJExplanation },
  { title: "연구개발전담부서 인정서", year: "2021", icon: BookOpen, image: imgResearchInstitute },
];

const overseasSales = [
  { title: "수출입실적 증명서 (대빈)", region: "캐나다", year: "2022", icon: Globe, image: imgExportJuliet },
  { title: "수출입실적 증명서 (뷰티)", region: "캐나다", year: "2022", icon: Globe, image: imgExportIAE },
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

const kuktongAgreements = [
  { title: "AI 시험 협약", partner: "국통+시스트란", year: "2020년~", image: imgKuktongSystranAgreem },
  { title: "AI 시험 협약", partner: "국통+와이즈트랜스", year: "2019년~", image: imgWiseSTGlobalMOU },
  { title: "AI통번역 교육 언어교육원 체결", partner: "연세대학교", year: "2018년~", image: imgYonseiUnivMOU },
  { title: "AI 소프트웨어 시스템 판매", partner: "캐나다", year: "2021년~" },
  { title: "통번역 업무제휴", partner: "휴텍씨+한국정보통신협회", year: "2022년~" },
  { title: "인공지능 번역사 시험 (AITe) 협약서", partner: "국통+휴텍씨", year: "2018년~", image: imgAgreemAITranslation },
  { title: "인공지능 교육 및 시험 협약", partner: "국통+휴텍씨", year: "2018년~", image: imgAgreemHumanEditingExam },
  { title: "인공지능 번역+휴먼감수 교육 협약서", partner: "국통+휴텍씨", year: "2018년~", image: imgAgreemHumanEditingExam },
];

/* ───────── Filter tabs ───────── */
const agreementCategories = [
  { key: "all", label: "전체" },
  { key: "교육", label: "교육 협약" },
  { key: "기술협약", label: "기술 협약" },
  { key: "업무제휴", label: "업무 제휴" },
  { key: "해외판매", label: "해외 판매" },
  { key: "시험협약", label: "시험 협약" },
  { key: "인증", label: "인증" },
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
        {/* Title - top left */}
        <div className="absolute top-3 left-3 right-16">
          <h4 className="text-[13px] text-foreground bg-white/95 px-2 py-1 rounded shadow-sm backdrop-blur-sm" style={{ fontWeight: 700 }}>
            {title}
          </h4>
        </div>
        {/* Year - top right */}
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
      {/* Icon footer */}
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
            {/* Blurred background */}
            <div className="absolute inset-0 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover blur-[2px] opacity-60" />
            </div>
            {/* Visible portion (2/3) */}
            <div className="absolute inset-x-3 top-3 bottom-[33%]">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg shadow-lg" />
            </div>
          </>
        )}
        {/* Title - top left */}
        <div className="absolute top-3 left-3 right-16">
          <h4 className="text-[13px] text-foreground bg-white/95 px-2 py-1 rounded shadow-sm backdrop-blur-sm" style={{ fontWeight: 700 }}>
            {title}
          </h4>
        </div>
        {/* Year - top right */}
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

/* ───────── Stats ───────── */
const stats = [
  { label: "등록 특허", value: "4건", icon: ScrollText },
  { label: "기업 인증", value: "4건", icon: BadgeCheck },
  { label: "정부 승인", value: "5건", icon: Shield },
  { label: "사업 협약", value: "15건", icon: Handshake },
  { label: "국통 협약", value: "8건", icon: FileText },
];

/* ───────── Page Component ───────── */
export function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAgreements =
    activeCategory === "all"
      ? hutechcAgreements
      : hutechcAgreements.filter((a) => a.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                협약 및 인증
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                휴텍씨 그룹
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  협약 및 인증 모음
                </span>
              </h1>
              <p className="text-white/70 text-[16px] max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
                기업 인증, 특허, 정부 승인, 사업 협약 등 휴텍씨 그룹의 공식 이력을 한눈에 확인하실 수 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="bg-white rounded-2xl shadow-lg border border-border p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-[#4A3AFF]/10 flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-[#4A3AFF]" />
                </div>
                <p className="text-[20px] text-foreground" style={{ fontWeight: 700 }}>{stat.value}</p>
                <p className="text-[12px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Nav Buttons */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
            <p className="text-[13px] text-muted-foreground">바로가기</p>
          </div>
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

      {/* ═══════ Section 1: 특허 및 지적재산권 (FIRST) ═══════ */}
      <section id="patents" className="py-8 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-[16px] text-foreground" style={{ fontWeight: 700 }}>
              <span className="text-primary">특허</span> - 특허 및 지적재산권 <span className="text-muted-foreground text-[14px]" style={{ fontWeight: 400 }}>(AI 통번역 핵심 기술을 자체 개발하고 지적재산권을 확보한 기술 선도 기업입니다)</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {patents.map((patent, i) => (
              <FadeIn key={`${patent.title}-${patent.year}`} delay={i * 0.08}>
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

      {/* ═══════ Section 2: 기업 인증 및 확인서 ═══════ */}
      <section id="corporate" className="py-8 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-[16px] text-foreground" style={{ fontWeight: 700 }}>
              <span className="text-primary">기업 인증</span> - 기업 인증 및 확인서 <span className="text-muted-foreground text-[14px]" style={{ fontWeight: 400 }}>(여성기업, 벤처기업, 창업기업 등 다수의 공식 인증을 획득한 신뢰받는 기업입니다)</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {corporateCertifications.map((cert, i) => (
              <FadeIn key={cert.title} delay={i * 0.08}>
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

      {/* ═══════ Section 3: 정부 승인 및 자격증 ═══════ */}
      <section id="government" className="py-8 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-[16px] text-foreground" style={{ fontWeight: 700 }}>
              <span className="text-primary">정부 승인</span> - 정부 승인 및 자격증 <span className="text-muted-foreground text-[14px]" style={{ fontWeight: 400 }}>(과학기술정보통신부, 법무부, 문화관광부 등 정부 기관의 공식 승인을 받은 검증된 기업입니다)</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {governmentApprovals.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
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

      {/* ═══════ Section 4: 해외 매출 실적 ═══════ */}
      <section id="overseas" className="py-8 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-[16px] text-foreground" style={{ fontWeight: 700 }}>
              <span className="text-primary">해외 실적</span> - 해외 매출 실적 <span className="text-muted-foreground text-[14px]" style={{ fontWeight: 400 }}>(캐나다 등 글로벌 시장에 AI 소프트웨어를 수출하며 해외 매출을 지속 확대하고 있습니다)</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            {overseasSales.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <DocumentCard
                  title={item.title}
                  year={item.year}
                  icon={item.icon}
                  color="#0891b2"
                  image={item.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Section 5: 휴텍씨 사업 협약 ═══════ */}
      <section id="hutechc" className="py-8 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-[16px] text-foreground" style={{ fontWeight: 700 }}>
              <span className="text-primary">휴텍씨 협약</span> - 휴텍씨 사업 협약서 <span className="text-muted-foreground text-[14px]" style={{ fontWeight: 400 }}>(연세대, 신한대 등 국내 대학과 해외 파트너사까지, 폭넓은 협력 네트워크를 보유하고 있습니다)</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {agreementCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-[13px] transition-all ${
                  activeCategory === cat.key
                    ? "bg-[#4A3AFF] text-white shadow-md"
                    : "bg-white text-muted-foreground hover:bg-gray-200 border border-border"
                }`}
                style={{ fontWeight: 500 }}
              >
                {cat.label}
                {activeCategory === cat.key && (
                  <span className="ml-1.5 text-[11px] opacity-80">
                    ({filteredAgreements.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filteredAgreements.map((agreement, i) => (
              <FadeIn key={`${agreement.title}-${agreement.partner}-${i}`} delay={i * 0.05}>
                <AgreementCard
                  title={agreement.title}
                  partner={agreement.partner}
                  year={agreement.year}
                  image={agreement.image}
                />
              </FadeIn>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4A3AFF] to-[#7B6FFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-white text-[24px] sm:text-[30px] mb-3" style={{ fontWeight: 700 }}>
              신뢰할 수 있는 파트너, 휴텍씨
            </h3>
            <p className="text-white/70 text-[15px] mb-6" style={{ lineHeight: 1.8 }}>
              공인된 인증과 다양한 협약을 기반으로 AI 통번역 산업을 선도하고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}