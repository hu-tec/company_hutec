import { motion } from "motion/react";
import { Handshake, Globe, Building2, GraduationCap, Languages, Award } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import ITT partnership images
import ittMou1 from "figma:asset/b1b0a869ab05825812326f44301e800f5dad91c6.png";
import ittMou2 from "figma:asset/a67c8d9d080dc37bf6dc25d4421af91af2131101.png";
import ittGroup from "figma:asset/7b3951fefa7f9a66d7ed2fdfe3867cdc1505cd62.png";

// Import university partnership images
import yonseiICS from "figma:asset/2081838724bc1dfa788192cd63b2e74319574e58.png";
import floridaVisit from "figma:asset/eb7f325c42c6e39957505ae2b1a8b318e8db6a6a.png";
import modernBuilding from "figma:asset/2ffe39ec10ba57977c9aa1b94cc07edbfb8ffe34.png";
import businessMeeting from "figma:asset/36d9a81c4ff3e8a49038d5f695dc4fbc63373209.png";
import montclairVisit from "figma:asset/29ff7e3b39375a4b97a9eb2bf7c234cc245032f5.png";

// Import additional university partnership images
import ubcOfficeMeeting from "figma:asset/935a858039b9b3675ffbf1ff6579157375b28685.png";
import ubcAsianStudies from "figma:asset/40535ccb816df32d15be57e118f8b7213ebeaa01.png";
import ubcContinuingStudies from "figma:asset/47164a4913ec29a54cbd74742a1192164f370b48.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function PartnersPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                파트너십
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                글로벌
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  교육 네트워크
                </span>
              </h1>
              <p className="text-white/80 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                [전국민해외교육네트워크]와 국내외 유수 대학 및 협회와의 파트너십을 통해 글로벌 교육 인프라를 확장합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNT1UlMjBzaWduaW5nJTIwY2VyZW1vbnklMjBhZ3JlZW1lbnR8ZW58MXx8fHwxNzcyNDIwNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership Agreement"
                className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domestic Agreements */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="국내 협약"
            title="국내 업무 협약기관"
            subtitle="국제통번역시험위원회와의 긴밀한 협력으로 통번역 시장의 발전을 선도합니다."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-muted rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>국제통번역시험위원회 발기인 총회</h3>
              <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                회의실에서 정장 차림의 관계자들이 모여 통번역 시험의 발전 방향을 논의하고,
                위원회의 공식 출범을 선언한 발기인 총회를 성공적으로 개최했습니다.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-muted rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[18px] mb-3" style={{ fontWeight: 600 }}>양해각서(MOU) 체결</h3>
              <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                국제통번역시험 후원 양해각서 체결식을 통해 양 기관의 대표가 MOU를 체결하고,
                상호 발전을 위한 협력 체계를 구축했습니다.
              </p>
            </motion.div>
          </div>

          {/* Partnership Photos */}
          <motion.div {...fadeUp} className="mt-12">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>협약 체결 현장</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={ittMou1} alt="ITT MOU Signing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px] text-muted-foreground">국제통번역시험 우원 양해각서 체결식</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={ittMou2} alt="ITT Conference" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px] text-muted-foreground">국제통번역시험위원회 양해각서 체결 협약식</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={ittGroup} alt="ITT Founding Members" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px] text-muted-foreground">국제통번역시험위원회 발기인 총회 단체사진</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overseas University */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 대학 연계"
            title="해외 대학 교육 연계"
            subtitle="캐나다, 미국 등 세계 주요 대학 및 교육원과 교육 연계 프로그램을 운영합니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "캐나다 UBC 교육원",
                desc: "UBC Robson Square 건물에 위치한 교육원과 연계하여 글로벌 교육 프로그램을 운영합니다.",
                country: "캐나다",
                icon: Building2,
              },
              {
                name: "Purdue University",
                desc: "미국 퍼듀 대학교와의 교육 파트너십을 통해 최신 교육 방법론을 도입합니다.",
                country: "미국",
                icon: GraduationCap,
              },
              {
                name: "CSULB University",
                desc: "캘리포니아 주립대 롱비치와 TESOL 프로그램을 공동 운영합니다.",
                country: "미국",
                icon: GraduationCap,
              },
              {
                name: "USM 대학교",
                desc: "USM 대학교와의 교류를 통해 다양한 학술 프로그램을 진행합니다.",
                country: "말레이시아",
                icon: Globe,
              },
              {
                name: "IVY Tech",
                desc: "IVY Tech Community College와의 연계로 직업 교육 프로그램을 운영합니다.",
                country: "미국",
                icon: Building2,
              },
              {
                name: "LA 한미교육원",
                desc: "Korean Education Center와의 협력으로 재미 한국인 대상 교육 프로그램을 운영합니다.",
                country: "미국",
                icon: Building2,
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[12px]" style={{ fontWeight: 600 }}>
                    {item.country}
                  </span>
                </div>
                <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.name}</h4>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* University Partnership Photos */}
          <motion.div {...fadeUp} className="mt-16">
            <h3 className="text-[20px] mb-6" style={{ fontWeight: 600 }}>해외 대학 방문 및 협력</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={floridaVisit} alt="University of South Florida 방문" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>University of South Florida</p>
                  <p className="text-[13px] text-muted-foreground">1/14일 학교방문 및 미팅</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={montclairVisit} alt="Montclair State University 방문" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>Montclair State University</p>
                  <p className="text-[13px] text-muted-foreground">뉴욕 Montclair State University</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={businessMeeting} alt="해외 파트너 미팅" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>해외 파트너 미팅</p>
                  <p className="text-[13px] text-muted-foreground">글로벌 교육 파트너십 협의</p>
                </div>
              </div>
            </div>

            {/* Yonsei ICS & Building */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <img src={yonseiICS} alt="연세대 ICS School 영어캠프 협약식" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>Yonsei University & ICS School</p>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    글로벌 영어캠프 협약식. 연세대와 ICS 국제학교의 파트너십을 통해 글로벌 교육 프로그램을 운영합니다.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <img src={modernBuilding} alt="교육 파트너 시설" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>최신 교육 인프라</p>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    현대적 건축과 최첨단 시설을 갖춘 교육 파트너 기관으로 최상의 교육 환경을 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* UBC Additional Photos */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <img src={ubcOfficeMeeting} alt="UBC Office Meeting" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>UBC Office Meeting</p>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    UBC Robson Square에서의 사무실 미팅. 글로벌 교육 프로그램 운영을 위한 협의가 진행되었습니다.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <img src={ubcAsianStudies} alt="UBC Asian Studies" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>UBC Asian Studies</p>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    UBC의 아시아 연구 프로그램. 다양한 문화적 배경을 가진 학생들을 위한 교육 프로그램을 운영합니다.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <img src={ubcContinuingStudies} alt="UBC Continuing Studies" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <p className="text-[14px]" style={{ fontWeight: 600, marginBottom: "4px" }}>UBC Continuing Studies</p>
                  <p className="text-[13px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    UBC의 지속적인 교육 프로그램. 다양한 분야의 전문가들을 위한 교육 코스를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overseas Translation Partners */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="통역 번역 연계"
            title="해외 통역 번역업무 연계"
            subtitle="캐나다, 호주, 미국 등 해외 통번역 관련 협회 및 대학과 업무 연계를 통해 글로벌 서비스 역량을 강화합니다."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "캐나다 STIBC 협회",
                desc: "캐나다 브리티시컬럼비아 통번역사 협회(STIBC)와의 업무 협약을 통해 캐나다 현지 통번역 업무를 연계하고, 국제 행사 부스에서 협회 관계자들과 함께 활동합니다.",
                icon: Languages,
              },
              {
                name: "호주 NAATI 협회",
                desc: "호주 공인 통번역사 인증기관 NAATI와의 협력을 통해 호주 지역 통번역 서비스의 품질 표준을 확보하고 있습니다.",
                icon: Award,
              },
              {
                name: "미국 교사 교육 테솔 협회",
                desc: "미국 TESOL 협회와의 연계로 교사 교육 분야의 국제적 기준을 충족하는 교육 프로그램을 운영합니다.",
                icon: GraduationCap,
              },
              {
                name: "미국 콩코디아 대학 시험처",
                desc: "콩코디아 대학교 시험처와의 업무 연계로 통번역 시험의 국제적 공신력을 확보합니다.",
                icon: Building2,
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.name}</h4>
                    <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}