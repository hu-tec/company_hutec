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
const seminarRoom = `${import.meta.env.BASE_URL}assets/img/img_seminar_room.png`;
const conferenceEvent = `${import.meta.env.BASE_URL}assets/img/img_conference_event.png`;
const californiaAgreement = `${import.meta.env.BASE_URL}assets/img/img_california_agreement.png`;
const groupSeminar = `${import.meta.env.BASE_URL}assets/img/img_group_seminar.png`;

// Import TESOL partnership images
const tesolGraduation = `${import.meta.env.BASE_URL}assets/img/img_tesol_graduation.png`;
const yonseiTesolMou = `${import.meta.env.BASE_URL}assets/img/img_yonsei_tesol_mou.png`;
const hallymCsulbMou = `${import.meta.env.BASE_URL}assets/img/img_hallym_csulb_mou.png`;
const dankookCsulbMou = `${import.meta.env.BASE_URL}assets/img/img_dankook_csulb_mou.png`;

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
                30년 정통 교육 사업
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                글로벌 교육 그룹의
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  30년 교육 정통성
                </span>
              </h1>
              <p className="text-white/70 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                [외국어 교육 그룹] 타임스미디어가 TESOL, 기업 교육, 통역번역시험, ICS국제학교 등 전 분야에서 30년간 쌓아온 탄탄한 교육 인프라를 확인하세요.
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

      {/* Quick Navigation Banner - Redesigned */}
      <section className="relative -mt-12 sm:-mt-16 mb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border p-3 sm:p-6">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-1">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(section.id)}
                  className="flex-1 min-w-[100px] sm:min-w-[120px] lg:min-w-0 flex flex-col items-center gap-3 py-4 sm:py-6 px-2 rounded-[20px] hover:bg-primary/5 group transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-full" />
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                    <section.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className="text-[14px] text-gray-800" style={{ fontWeight: 700, wordBreak: "keep-all" }}>
                      {section.label}
                    </p>
                    <p className="text-[11px] text-primary/0 group-hover:text-primary transition-all duration-300 mt-0.5" style={{ fontWeight: 600 }}>
                      GO
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
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
          
          <div className="mt-16 space-y-24">
            {/* Row 1: Recent years (2024 - 2012) */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-[46px] left-0 right-0 h-px bg-primary/20 hidden lg:block" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 lg:gap-y-0 relative z-10">
                {[
                  { year: "2024", event: "30년 정통 글로벌 교육 인프라 구축 및 AI 융합 영어 교육 강화" },
                  { year: "2020", event: "온/오프라인 하이브리드 교육 시스템 및 메타버스 연계 강화" },
                  { year: "2017", event: "TESOL 졸업생 누적 12,000명 돌파 (시장 점유율 1위)" },
                  { year: "2015", event: "ICS 국제학교 글로벌 교육 프로그램 연계 및 협약" },
                  { year: "2014", event: "전국 10여개 주요 대학 부설 TESOL 교육원 통합 운영" },
                  { year: "2012", event: "삼성, LG, 현대 등 대기업 공인 외국어 교육 파트너 선정" },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center px-2 text-center"
                  >
                    <div className="mb-4 bg-white border-2 border-primary rounded-full px-5 py-1.5 shadow-sm">
                      <span className="text-primary text-[15px]" style={{ fontWeight: 800 }}>{item.year}</span>
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full mb-6 border-2 border-white ring-1 ring-primary/30 hidden lg:block" />
                    <p className="text-[13px] leading-relaxed text-foreground max-w-[140px]" style={{ fontWeight: 600, wordBreak: "keep-all" }}>
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2: Earlier years (2010 - 1997) */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-[46px] left-0 right-0 h-px bg-border hidden lg:block" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 lg:gap-y-0 relative z-10">
                {[
                  { year: "2010", event: "기업체 맞춤형 외국어 교육 B2B 솔루션 런칭" },
                  { year: "2008", event: "연세대학교 TESOL 교육 센터 개설 및 운영" },
                  { year: "2006", event: "한림대학교 TESOL 교육 센터 공식 개설" },
                  { year: "2005", event: "미국 캘리포니아 주립대 롱비치(CSULB) TESOL 프로그램 도입" },
                  { year: "1999", event: "국내 최초 통역번역 전문 교육 서비스 시작" },
                  { year: "1997", event: "타임즈미디어 교육 법인 설립" },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 6) * 0.1 }}
                    className="flex flex-col items-center px-2 text-center"
                  >
                    <div className="mb-4 bg-white border-2 border-muted-foreground/30 rounded-full px-5 py-1.5 shadow-sm">
                      <span className="text-muted-foreground text-[15px]" style={{ fontWeight: 800 }}>{item.year}</span>
                    </div>
                    <div className="w-3 h-3 bg-muted-foreground/30 rounded-full mb-6 border-2 border-white ring-1 ring-border hidden lg:block" />
                    <p className="text-[13px] leading-relaxed text-muted-foreground max-w-[140px]" style={{ fontWeight: 500, wordBreak: "keep-all" }}>
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
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

          {/* 추가: TESOL 교육 현장 */}
          <motion.div {...fadeUp} className="mt-12 bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
              <ImageWithFallback
                src={groupSeminar}
                alt="TESOL 교육 현장"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                TESOL 교육 현장 미국 캘리포니아 주립대 연계 프로그램을 통해 전문 영어 교사 양성 교육을 진행하고 있습니다.
              </p>
            </div>
          </motion.div>

          {/* TESOL 대학 협약 및 졸업식 */}
          <motion.div {...fadeUp} className="mt-12">
            <h3 className="text-[18px] mb-6" style={{ fontWeight: 600 }}>TESOL 대학 협약 및 졸업식</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { img: yonseiTesolMou, title: "연세대 TESOL 교육 협약식", desc: "Yonsei University TESOL 프로그램 협약" },
                { img: hallymCsulbMou, title: "한림대 CSULB TESOL 협약식", desc: "Hallym University with California State University" },
                { img: tesolGraduation, title: "TESOL 졸업식", desc: "Graduate Certificate in TESOL, Pre-TESOL" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                  <div className="w-full h-48 overflow-hidden">
                    <ImageWithFallback src={item.img} alt={item.title} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>{item.title}</h4>
                    <p className="text-[12px] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="w-full h-[250px] sm:h-[350px] overflow-hidden">
                <ImageWithFallback src={dankookCsulbMou} alt="단국대학교 & California State University, Long Beach" className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>단국대학교 & California State University, Long Beach</h4>
                <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                  TESOL 어학교육 협약식. 단국대학교와 캘리포니아 주립대 롱비치의 공식 파트너십을 통해 글로벌 TESOL 교육 프로그램을 진행합니다.
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
        </div>
      </section>
    </div>
  );
}
