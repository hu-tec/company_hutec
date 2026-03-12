import { motion } from "motion/react";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Users,
  Award,
  Globe,
  Briefcase,
  Star,
  Handshake,
  MapPin,
  Landmark,
  Languages,
  FileCheck,
  School,
  Plane,
  Sun,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import real event images
import seminarRoom from "figma:asset/7717fc5df9e00360533a21fe35c3538e929d5e04.png";
import conferenceEvent from "figma:asset/213abecac011c9a9622bddd86089f95390d1a7d7.png";
import californiaAgreement from "figma:asset/2e65bf8ad923ff330ca7beff29c1c205ae1124d9.png";
import groupSeminar from "figma:asset/aa857c2d23ee0b6d99759b2a262dd0c2c109a034.png";

// Import TESOL partnership images
import tesolGraduation from "figma:asset/b50f7e0999b07d772a252dcc13fc3792cb1511e3.png";
import yonseiTesolMou from "figma:asset/2c895ebd2ffdbd6741b648f76a255263777f8956.png";
import hallymCsulbMou from "figma:asset/9f13ea926c561a31ca11d36d431ac373d5c69693.png";
import dankookCsulbMou from "figma:asset/dbdd65adc2cd76e865f71f92c424c0bbf16672a8.png";

// Import PPT reference images
import educationOverview1 from "figma:asset/3a37d686853066fb3361ec605886b2b490fe8361.png";
import educationOverview2 from "figma:asset/30be621916760808a6a5d3a54eefbab8b08f5b8a.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const majorCorps = [
  "삼성", "LG", "현대", "SK", "두산", "동부", "교보", "한진",
  "SK Telecom", "유한킴벌리", "SK주", "금호", "롯데", "KT&G",
  "CJ그룹", "동아제약", "한국조폐공사", "KT", "신세계", "기아자동차", "포스코",
];

const govAgencies = [
  "행정자치부", "산업자원부", "정보통신부", "건설교통부", "과학기술부",
  "노동부", "특허청", "금융감독원", "한국철도공사", "한국전력",
  "MBC", "건강보험공단", "한국관광공사", "중소기업청", "한국마사회",
];

const publicOrgs = [
  "KOGAS", "KiTECO", "KIAC", "중앙전파관리소", "대한석유협회",
  "KSIA", "POSCO", "Panasonic", "한국방송통신전파진흥원",
  "한국정보통신산업협회", "건설교통부",
];

// Section navigation items
const sections = [
  { id: "tesol", label: "테솔", icon: GraduationCap },
  { id: "corporate", label: "기업교육", icon: Briefcase },
  { id: "interpretation", label: "통역번역시험", icon: Languages },
  { id: "ics", label: "ICS국제학교", icon: School },
  { id: "mba", label: "MBA", icon: Award },
  { id: "overseas", label: "해외 업무 진행", icon: Plane },
  { id: "camp", label: "영어캠프", icon: Sun },
  { id: "agreements", label: "협약진행", icon: Handshake },
];

/* ───── 국내 업무 협약 ───── */
const domesticAgreements = [
  { title: "국제통번역사시험 총동문 참석진 체결식", desc: "체결식 사진" },
  { title: "국제통번역시험위원회 발기인 총회", desc: "발기인(발) 총회" },
  { title: "국제통번역시험위원회 정책회의", desc: "정책회의 및 원정회의" },
];

/* ───── 해외 대학 교육 연계 ───── */
const overseasUniversities = [
  { name: "캐나다 UBC 교육원", region: "캐나다", icon: Globe },
  { name: "Purdue University", region: "미국", icon: GraduationCap },
  { name: "IVY Tech", region: "미국", icon: GraduationCap },
  { name: "LA 한미교육원", region: "미국 LA", icon: Building2 },
  { name: "USM 대학교", region: "미국", icon: GraduationCap },
  { name: "CSULB University", region: "미국", icon: GraduationCap },
];

/* ───── 해외 통역 번역업무 연계 ───── */
const overseasTranslationPartners = [
  { name: "캐나다 STIBC 협회", region: "캐나다", desc: "통역번역 업무 제휴" },
  { name: "호주 NAATI 협회", region: "호주", desc: "통역번역 자격 인증 연계" },
  { name: "미국 교사 교육 테솔 협회", region: "미국", desc: "TESOL 교육 연계" },
  { name: "미국 콩코디아 대학 시험전", region: "미국", desc: "대학 시험 연계 프로그램" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export function EducationPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                24년 경력 사업
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                외국어 교육 그룹의
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  24년 교육 전문성
                </span>
              </h1>
              <p className="text-white/70 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                [외국어 교육 그룹] 타임스미디어가 TESOL, 기업 교육, 통역번역시험, ICS국제학교 등 전 분야에서 24년간 쌓아온 교육 인프라를 확인하세요.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={conferenceEvent}
                alt="Corporate Education Seminar"
                className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gradient-to-b from-white to-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[20px] mb-6 text-center" style={{ fontWeight: 600 }}>바로가기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {sections.map((section, i) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollToSection(section.id)}
                className="group bg-white border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[13px]" style={{ fontWeight: 500 }}>{section.label}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Times Media History */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="HISTORY"
            title="타임스미디어 교육 연혁"
            subtitle="1997년부터 이어온 외국어 교육 그룹의 발자취와 주요 성과입니다."
          />
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {[
                { year: "1997", event: "타임즈미디어 교육 법인 설립" },
                { year: "1999", event: "국내 최초 통역번역 전문 교육 서비스 시작" },
                { year: "2005", event: "미국 캘리포니아 주립대 롱비치(CSULB) TESOL 프로그램 도입" },
                { year: "2006", event: "한림대학교 TESOL 교육 센터 공식 개설" },
                { year: "2008", event: "연세대학교 TESOL 교육 센터 개설 및 운영" },
                { year: "2010", event: "기업체 맞춤형 외국어 교육 B2B 솔루션 런칭" },
              ].map((item, i) => (
                <motion.div
                  key={`hist-left-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-primary text-[20px] shrink-0" style={{ fontWeight: 700, width: "60px" }}>{item.year}</span>
                  <div className="pt-1.5 border-l-2 border-primary/20 pl-4">
                    <p className="text-[15px] leading-relaxed text-foreground" style={{ fontWeight: 500 }}>{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { year: "2012", event: "삼성, LG, 현대 등 대기업 공인 외국어 교육 파트너 선정" },
                { year: "2014", event: "전국 10여개 주요 대학 부설 TESOL 교육원 통합 운영" },
                { year: "2015", event: "ICS 국제학교 글로벌 교육 프로그램 연계 및 협약" },
                { year: "2017", event: "TESOL 졸업생 누적 12,000명 돌파 (시장 점유율 1위)" },
                { year: "2020", event: "온/오프라인 하이브리드 교육 시스템 및 메타버스 연계 강화" },
                { year: "2022", event: "AI 융합 영어 교육 커리큘럼 도입 및 차세대 교육 인프라 구축" },
              ].map((item, i) => (
                <motion.div
                  key={`hist-right-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-primary text-[20px] shrink-0" style={{ fontWeight: 700, width: "60px" }}>{item.year}</span>
                  <div className="pt-1.5 border-l-2 border-primary/20 pl-4">
                    <p className="text-[15px] leading-relaxed text-foreground" style={{ fontWeight: 500 }}>{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESOL Section */}
      <section id="tesol" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="1. TESOL"
            title="테솔 교육센터"
            subtitle="캘리포니아 주립대, 연세대 및 10여개 센터에서 2만여명 배출한 영어교사 교육 프로그램"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: GraduationCap, label: "졸업생", value: "2만여명", desc: "누적 졸업생 수" },
              { icon: Building2, label: "전국 센터", value: "10개+", desc: "연세대 등 주요 대학" },
              { icon: Globe, label: "해외 센터", value: "다수 운영", desc: "글로벌 네트워크" },
              { icon: Award, label: "교사교육", value: "500기수+", desc: "12년간 운영" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[24px] text-primary" style={{ fontWeight: 700 }}>{item.value}</p>
                <p className="text-[14px] text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-[18px] mb-4" style={{ fontWeight: 600 }}>주요 교육 프로그램</h3>
              <div className="space-y-3">
                {[
                  "TESOL 미국 캘리포니아 주립대 연계 프로그램",
                  "연세대 및 전국 10여개 센터 운영",
                  "다양한 교사교육 커리큘럼",
                  "IVY League TESOL WORKSHOP",
                  "해외 센터 연계 프로그램",
                  "대학부설 교육기관 운영",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={californiaAgreement}
                alt="캘리포니아 주립대 협약식"
                className="w-full h-full min-h-[280px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* California Agreement Photo */}
          <motion.div {...fadeUp} className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={groupSeminar} alt="TESOL 교육 세미나" className="w-full h-[400px] object-cover" />
              <div className="p-6 bg-white">
                <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>TESOL 교육 현장:</span> 미국 캘리포니아 주립대 연계 프로그램을 통해 전문 영어 교사 양성 교육을 진행하고 있습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TESOL Partnership & Graduation Photos */}
          <motion.div {...fadeUp} className="mt-12">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>TESOL 대학 협약 및 졸업식</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={yonseiTesolMou} alt="연세대 TESOL 교육 협약식" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>연세대 TESOL 교육 협약식</p>
                  <p className="text-[13px] text-muted-foreground">Yonsei University TESOL 프로그램 협약</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={hallymCsulbMou} alt="한림대 CSULB TESOL 협약식" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>한림대 CSULB TESOL 협약식</p>
                  <p className="text-[13px] text-muted-foreground">Hallym University with California State University</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={tesolGraduation} alt="TESOL Pre-TESOL 졸업식" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>TESOL 졸업식</p>
                  <p className="text-[13px] text-muted-foreground">Graduate Certificate in TESOL Pre-TESOL</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <img src={dankookCsulbMou} alt="단국대 CSULB TESOL 어학교육 협약식" className="w-full h-[360px] object-cover" />
              <div className="p-6">
                <p className="text-[15px]" style={{ fontWeight: 600, marginBottom: "6px" }}>단국대학교 & California State University, Long Beach</p>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  TESOL·어학교육 협약식. 단국대학교와 캘리포니아 주립대 롱비치의 공식 파트너십을 통해 글로벌 TESOL 교육 프로그램을 운영합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Education */}
      <section id="corporate" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="2. 기업교육"
            title="기업체, 정부기관, 공공기관 교육"
            subtitle="국내 유수의 대기업과 정부기관에 맞춤형 외국어 교육 프로그램을 제공합니다."
          />

          {/* Marquee rows */}
          <div className="space-y-6 mb-12">
            {/* Row 1: 주요 기업체 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[15px]" style={{ fontWeight: 600 }}>주요 기업체</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
                <div className="flex animate-[marquee_30s_linear_infinite]">
                  {[...majorCorps, ...majorCorps].map((corp, i) => (
                    <span
                      key={`corp-${i}`}
                      className="flex-shrink-0 px-5 py-2.5 mx-1.5 bg-white rounded-lg text-[14px] border border-border shadow-sm whitespace-nowrap"
                      style={{ fontWeight: 500 }}
                    >
                      {corp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: 정부기관 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-[15px]" style={{ fontWeight: 600 }}>정부기관</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
                <div className="flex animate-[marquee-reverse_26s_linear_infinite]">
                  {[...govAgencies, ...govAgencies].map((agency, i) => (
                    <span
                      key={`gov-${i}`}
                      className="flex-shrink-0 px-5 py-2.5 mx-1.5 bg-white rounded-lg text-[14px] border border-border shadow-sm whitespace-nowrap"
                      style={{ fontWeight: 500 }}
                    >
                      {agency}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3: 공공기관 및 단체 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[15px]" style={{ fontWeight: 600 }}>공공기관 및 단체</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
                <div className="flex animate-[marquee_22s_linear_infinite]">
                  {[...publicOrgs, ...publicOrgs].map((org, i) => (
                    <span
                      key={`pub-${i}`}
                      className="flex-shrink-0 px-5 py-2.5 mx-1.5 bg-white rounded-lg text-[14px] border border-border shadow-sm whitespace-nowrap"
                      style={{ fontWeight: 500 }}
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Training Image */}
          <motion.div {...fadeUp} className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={seminarRoom} alt="Corporate Training Seminar" className="w-full h-[400px] object-cover" />
              <div className="p-6 bg-white">
                <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>기업체 교육 현장:</span> 국내 주요 기업과 정부기관을 대상으로 한 전문 외국어 교육 프로그램을 진행하고 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 통역번역시험 Section */}
      <section id="interpretation" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="3. 통역번역시험"
            title="국제 통역번역 시험 프로그램"
            subtitle="전문 통역번역사 양성을 위한 체계적인 시험 및 교육 프로그램을 운영합니다."
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileCheck, label: "시험 운영", desc: "국제통역번역사시험 정기 실시" },
              { icon: Award, label: "자격 인증", desc: "전문 통역번역사 자격 부여" },
              { icon: Globe, label: "글로벌 네트워크", desc: "해외 협회 연계" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.label}</h4>
                  <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGludGVycHJldGF0aW9uJTIwZXhhbSUyMHRlc3R8ZW58MXx8fHwxNzczMTIwMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="국제 통역번역 시험"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>주요 프로그램</h3>
                <div className="space-y-2">
                  {[
                    "국제통역번역사시험 정기 실시",
                    "통역번역 자격 인증 프로그램",
                    "전문 통역번역사 양성 교육",
                    "해외 협회 (NAATI, STIBC) 연계",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ICS 국제학교 Section */}
      <section id="ics" className="py-20 lg:py-28 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="4. ICS국제학교"
            title="ICS 국제학교 교육"
            subtitle="글로벌 인재 양성을 위한 국제학교 교육 프로그램을 운영합니다."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-[18px] mb-4" style={{ fontWeight: 600 }}>교육 특징</h3>
              <div className="space-y-3">
                {[
                  "국제 커리큘럼 기반 교육",
                  "원어민 교사 전문 교육",
                  "글로벌 인재 양성 프로그램",
                  "국제학교 진학 준비 과정",
                  "영어 몰입 교육 환경",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczMTIwMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ICS 국제학교 교육 현장"
                className="w-full h-full min-h-[320px] object-cover"
              />
            </motion.div>
          </div>

          <motion.div {...fadeUp}>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                <span style={{ fontWeight: 600 }}>ICS 국제학교:</span> 글로벌 스탠다드에 부합하는 국제학교 교육 프로그램을 통해 미래 글로벌 리더를 양성합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MBA Section */}
      <section id="mba" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="5. MBA"
            title="MBA 교육 프로그램"
            subtitle="Pre-MBA 과정을 통해 취업스펙과 업무역량강화를 동시에 달성. 최대 100% 국비지원 가능"
          />

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: GraduationCap, label: "Pre-MBA", desc: "MBA 진학 준비 과정" },
              { icon: Briefcase, label: "취업 스펙", desc: "취업 경쟁력 강화" },
              { icon: Award, label: "국비 지원", desc: "최대 100% 지원 가능" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.label}</h4>
                  <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621972600542-4cc56f0c72c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYmElMjBidXNpbmVzcyUyMGVkdWNhdGlvbiUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzczMTIwMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MBA 교육 프로그램"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>프로그램 특징</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "체계적인 Pre-MBA 커리큘럼",
                    "비즈니스 실무 역량 강화",
                    "글로벌 MBA 진학 준비",
                    "취업 및 경력 개발 지원",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 해외 업무 진행 Section */}
      <section id="overseas" className="py-20 lg:py-28 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="6. 해외 업무 진행"
            title="해외 업무 연계 프로그램"
            subtitle="세계 각국의 유수 대학 및 교육기관과 긴밀한 업무 연계 네트워크를 운영합니다."
          />

          {/* 해외 대학 교육 연계 */}
          <div className="mb-16">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>해외 대학 교육 연계</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {overseasUniversities.map((univ, i) => (
                <FadeIn key={univ.name} delay={i * 0.08}>
                  <div className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4A3AFF]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <univ.icon className="w-6 h-6 text-[#4A3AFF]" />
                      </div>
                      <div>
                        <h4 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>{univ.name}</h4>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-[13px] text-muted-foreground">{univ.region}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 해외 통역 번역업무 연계 */}
          <div className="mb-12">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>해외 통역번역업무 연계</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {overseasTranslationPartners.map((partner, i) => (
                <FadeIn key={partner.name} delay={i * 0.1}>
                  <div className="group bg-white rounded-2xl border border-[#4A3AFF]/10 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#4A3AFF]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Languages className="w-7 h-7 text-[#4A3AFF]" />
                      </div>
                      <div>
                        <h4 className="text-[16px] mb-1" style={{ fontWeight: 600 }}>{partner.name}</h4>
                        <div className="flex items-center gap-1.5 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-[13px] text-muted-foreground">{partner.region}</span>
                        </div>
                        <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{partner.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662702933459-eeb71db82f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2VhcyUyMGJ1c2luZXNzJTIwbWVldGluZyUyMGludGVybmF0aW9uYWx8ZW58MXx8fHwxNzczMTIwMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="해외 업무 미팅"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>글로벌 네트워크:</span> 세계 각국의 유수 대학 및 협회와의 긴밀한 파트너십을 통해 국제적 교육 프로그램을 운영합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 영어캠프 Section */}
      <section id="camp" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="7. 영어캠프"
            title="영어 캠프 프로그램"
            subtitle="학생들의 영어 실력 향상과 글로벌 역량 강화를 위한 집중 캠프 프로그램을 운영합니다."
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Sun, label: "계절 캠프", desc: "여름/겨울 집중 프로그램" },
              { icon: Users, label: "그룹 활동", desc: "팀워크 중심 학습" },
              { icon: Globe, label: "문화 교류", desc: "글로벌 문화 체험" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.label}</h4>
                  <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-8">
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-[18px] mb-4" style={{ fontWeight: 600 }}>캠프 특징</h3>
              <div className="space-y-3">
                {[
                  "원어민 교사와 함께하는 집중 영어 교육",
                  "다양한 액티비티와 문화 체험",
                  "레벨별 맞춤 커리큘럼",
                  "영어 스피킹 집중 훈련",
                  "팀 프로젝트 및 발표 활동",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760128294835-7da91d2a7c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bW1lciUyMGxlYXJuaW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzMxMjAxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="영어 캠프 활동"
                className="w-full h-full min-h-[320px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 협약진행 Section */}
      <section id="agreements" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="8. 협약진행"
            title="국내외 업무 협약"
            subtitle="국내외 주요 기관 및 대학과의 전략적 파트너십을 통해 교육 네트워크를 확장합니다."
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {domesticAgreements.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-[15px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Reference image */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <img
                src={educationOverview2}
                alt="국내 업무 협약기간, 해외 대학 교육 연계, 해외 통역 번역업무 연계"
                className="w-full object-contain"
              />
              <div className="p-6">
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  <span style={{ fontWeight: 600 }}>국내 업무 협약 및 해외 연계 현황:</span> 체결식 사진, 해외 대학 교육 연계, 해외 통역 번역업무 연계 등의 종합 현황입니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519288480-1489c17b1519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwYWdyZWVtZW50JTIwc2lnbmluZ3xlbnwxfHx8fDE3NzMxMjAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="협약 체결식"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>주요 협약 현황</h3>
                <div className="space-y-2">
                  {[
                    "국내외 주요 대학 교육 협약",
                    "국제 통역번역 시험위원회 체결",
                    "해외 교육기관 업무 제휴",
                    "기업 및 정부기관 교육 파트너십",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Education */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="기타 교육 과정"
            title="그 외 교육 과정"
            subtitle="다양한 분야의 전문 교육 프로그램을 운영합니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "의료 관광교육",
                desc: "의료 관광 분야의 전문 인력 양성을 위한 외국어 교육 프로그램",
                icon: Users,
              },
              {
                title: "TESOL-BUSINESS",
                desc: "비즈니스 영어와 TESOL을 결합한 특화 프로그램으로 현장 실무 역량 강화",
                icon: Briefcase,
              },
              {
                title: "영어멘토 입단식",
                desc: "영어멘토 입단식을 통해 체계적인 멘토링 시스템을 운영하고 있습니다",
                icon: Star,
              },
              {
                title: "영어회화 전문강사 교육",
                desc: "전문 영어회화 강사 양성을 위한 실전 중심 교육 과정",
                icon: GraduationCap,
              },
              {
                title: "타임스어평생교육원",
                desc: "평생교육 차원에서 다양한 연령층을 대상으로 외국어 교육 프로그램 운영",
                icon: BookOpen,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Reference image for other education */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white">
              <img
                src={educationOverview1}
                alt="테솔 교육센터, 기업체 교육, 그 외 교육 과정 종합"
                className="w-full object-contain"
              />
              <div className="p-6">
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  <span style={{ fontWeight: 600 }}>교육 사업 종합 현황:</span> 테솔 교육센터, 기업체 교육, 의료 관광교육, MBA 교육, 영어멘토 등 다양한 교육 프로그램 운영 현황입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
