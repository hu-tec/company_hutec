import { motion } from "motion/react";
import {
  Heart,
  Users,
  Globe,
  Star,
  BookOpen,
  Handshake,
  Building2,
  GraduationCap,
  Sparkles,
  Flag,
  MapPin,
  Link,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function CSRPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              SOCIAL RESPONSIBILITY
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              교육으로 세상에
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                선한 영향력을 더합니다
              </span>
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              휴텍씨는 교육의 기회가 모두에게 평등하게 전달될 수 있도록 다양한 사회 공헌 활동을 전개하며 지속 가능한 미래를 만들어갑니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="VALUES"
            title="사회 공헌 핵심 가치"
            subtitle="우리는 교육 인프라를 활용하여 지역 사회와 글로벌 공동체에 기여합니다."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "나눔의 가치", 
                desc: "소외 계층을 위한 무상 외국어 교육 및 장학 지원 프로그램을 운영합니다.",
                color: "text-red-500",
                bg: "bg-red-50"
              },
              { 
                icon: Globe, 
                title: "글로벌 공헌", 
                desc: "개발도상국 교육 환경 개선 및 다문화 가정 언어 교육을 지원합니다.",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              { 
                icon: Users, 
                title: "상생 경영", 
                desc: "지역 사회와의 협력을 통해 교육 생태계의 동반 성장을 도모합니다.",
                color: "text-green-500",
                bg: "bg-green-50"
              }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-10 rounded-[32px] border border-border bg-white hover:shadow-xl transition-all h-full text-center">
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-[20px] mb-4" style={{ fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Activities */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="ACTIVITIES"
            title="주요 활동 현황"
            subtitle="휴텍씨가 실천하고 있는 구체적인 사회 공헌 활동들을 소개합니다."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-white rounded-[32px] overflow-hidden border border-border flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-video sm:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MzIxNTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education Charity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                <span className="text-primary text-[13px] font-bold mb-2">장학 지원</span>
                <h3 className="text-[19px] mb-3" style={{ fontWeight: 700 }}>저소득층 외국어 교육 지원</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  경제적 어려움으로 교육의 기회를 갖지 못하는 학생들에게 ITT 자격증 및 TESOL 교육 과정을 전액 장학금으로 지원합니다.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-white rounded-[32px] overflow-hidden border border-border flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-video sm:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzMyMTU1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Eco Education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                <span className="text-green-600 text-[13px] font-bold mb-2">환경 교육</span>
                <h3 className="text-[19px] mb-3" style={{ fontWeight: 700 }}>지속 가능 환경 캠페인</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  기후 위기 대응을 위한 글로벌 환경 교육 자료를 다국어로 제작 및 배포하여 전 세계 학생들의 환경 인식을 높입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domestic Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="국내 교육봉사"
            title="국내 교육 나눔 활동"
            subtitle="CJ 나눔교육, 전국 지역아동센터, 공부방 교육 봉사 등 다양한 교육 나눔을 실천합니다."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-[32px] border border-border bg-white hover:shadow-lg transition-all h-full text-center">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-[20px] mb-4" style={{ fontWeight: 700 }}>CJ 나눔교육사업</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">전국 지역아동센터와 연계하여 아이들에게 교구 나눠주기 및 영어 교육 봉사를 진행합니다. 타임스미디어는 CJ 영어 교육나눔에 적극 동참하고 있습니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-10 rounded-[32px] border border-border bg-white hover:shadow-lg transition-all h-full text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-[20px] mb-4" style={{ fontWeight: 700 }}>전국 공부방 교육</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">전국 각지의 공부방을 방문하여 소외된 아이들에게 양질의 교육 기회를 제공하고 있습니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-10 rounded-[32px] border border-border bg-white hover:shadow-lg transition-all h-full text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-[20px] mb-4" style={{ fontWeight: 700 }}>InKAS 해외 입양인 특강</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">해외 입양인을 대상으로 한국어 및 한국 문화 특강을 진행하여 문화적 유대감을 형성합니다.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overseas Education */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 교육봉사"
            title="해외 교육 봉사 활동"
            subtitle="캄보디아, 네팔, 아프리카 등 교육 인프라가 부족한 지역에 교육의 불씨를 전하고 있습니다."
          />
          {/* 4 Small Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-[32px] border border-border flex flex-col items-start gap-4 h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="font-bold text-[18px]">KH</span>
                </div>
                <div>
                  <h4 className="text-[18px] mb-2" style={{ fontWeight: 700 }}>캄보디아</h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">캄보디아 현지 어린이들을 대상으로 한 대규모 교육 봉사 활동을 진행합니다. 태극기와 함께 한국의 교육 정신을 전달합니다.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-[32px] border border-border flex flex-col items-start gap-4 h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="font-bold text-[18px]">NP</span>
                </div>
                <div>
                  <h4 className="text-[18px] mb-2" style={{ fontWeight: 700 }}>네팔</h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">네팔 현지 학교에서 칠판 앞에서 직접 교육하는 봉사활동을 진행하며, 교육 자료와 물품을 지원합니다.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-[32px] border border-border flex flex-col items-start gap-4 h-full">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-[18px] mb-2" style={{ fontWeight: 700 }}>아프리카</h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">아프리카 현지 교실에서 아이들에게 영어 교육을 제공하고, 교육 환경 개선을 위한 지원을 합니다.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-[32px] border border-border flex flex-col items-start gap-4 h-full">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-[18px] mb-2" style={{ fontWeight: 700 }}>International Christian School</h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">ICS 국제학교와 연계하여 해외 교육 봉사 프로그램을 운영하고, 글로벌 교육 네트워크를 확장합니다.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* 2 Large Image Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div {...fadeUp} transition={{ delay: 0.5 }} className="bg-white rounded-[32px] overflow-hidden border border-border">
              <div className="aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB2b2x1bnRlZXJ8ZW58MXx8fHwxNzcxMjM0NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ICS Volunteer Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">ICS 국제학교: </span> 국제학교와 연계한 교육 봉사 프로그램을 통해 글로벌 교육의 기회를 제공합니다.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.6 }} className="bg-white rounded-[32px] overflow-hidden border border-border">
              <div className="aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc2Nob29sfGVufDF8fHx8MTc3MTIzNDU4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ICS Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">교육 인프라: </span> 최신 교육 시설을 갖춘 ICS 국제학교를 통해 체계적인 교육 봉사를 실천하고 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="자원봉사"
            title="자원봉사 활동"
            subtitle="APEC 홍보사절단, 국제평화마라톤대회, 강남구자원봉사센터 등 다양한 사회 공헌 활동에 참여합니다."
          />
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-muted p-8 rounded-[32px] border border-border flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Flag className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 700 }}>APEC 홍보사절단</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">APEC 성공개최를 위한 홍보사절단 활동에 참여하여 국제 행사의 성공적인 운영에 기여했습니다. 공항 출국장에서 APEC 홍보 현수막과 함께 활동했습니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-muted p-8 rounded-[32px] border border-border flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 700 }}>제12회 국제평화마라톤대회</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">국제평화마라톤대회에 참가하여 평화의 메시지를 전달하고, 건강한 봉사 문화를 확산시키고 있습니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-muted p-8 rounded-[32px] border border-border flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <Link className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-[18px] mb-3" style={{ fontWeight: 700 }}>강남구자원봉사센터</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">아크릴 수세미 만들기 등 지역사회 자원봉사 활동에 적극 참여하여 이웃 사랑을 실천합니다.</p>
              </div>
            </FadeIn>
          </div>

          {/* Large Image Card */}
          <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="bg-muted rounded-[32px] overflow-hidden border border-border">
            <div className="aspect-[21/9] sm:aspect-[21/7]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbnxlbnwxfHx8fDE3NzEyMzQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marathon Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">제12회 국제평화마라톤대회: </span> 타임스 미디어 임직원들이 국제평화마라톤대회에 참가하여 평화와 나눔의 가치를 실천하고 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <Sparkles className="w-12 h-12 text-primary/30 mx-auto mb-8" />
            <h2 className="text-[28px] sm:text-[34px] leading-tight mb-8" style={{ fontWeight: 800 }}>
              "진정한 교육의 완성은 나눔에 있습니다. 휴텍씨는 더 넓은 세상을 향한 나눔의 걸음을 멈추지 않겠습니다."
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground text-[15px]" style={{ fontWeight: 600 }}>휴텍씨 임직원 일동</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
