import { motion } from "motion/react";
import { Heart, Globe, HandHelping, Users, MapPin, Flag } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import real CSR images
import marathonEvent from "figma:asset/0f8453795dd662ffd4ff94633072636e34293459.png";
import icsSchoolGroup from "figma:asset/13806118ac63be6588b69be79c0b92d427c11e90.png";
import icsSchoolBuilding from "figma:asset/eb302d99b812a22ca80b9da1f15088d788689b05.png";

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
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
                사회 공헌
              </span>
              <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                교육으로
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                  세상을 밝히는
                </span>
                <br />나눔의 실천
              </h1>
              <p className="text-white/70 text-[16px] max-w-lg" style={{ lineHeight: 1.8 }}>
                국내외 교육 봉사와 자원봉사로 교육의 가치를 사회에 환원합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652858672796-960164bd632b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBlZHVjYXRpb24lMjBjaGlsZHJlbiUyMENhbWJvZGlhfGVufDF8fHx8MTc3MjQyMDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteer Education"
                className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domestic Education Volunteering */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="국내 교육봉사"
            title="국내 교육 나눔 활동"
            subtitle="CJ 나눔교육, 전국 지역아동센터, 공부방 교육 봉사 등 다양한 교육 나눔을 실천합니다."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CJ 나눔교육사업",
                desc: "전국 지역아동센터와 연계하여 아이들에게 교구 나눠주기 및 영어 교육 봉사를 진행합니다. 타임스미디어는 CJ 영어교육나눔에 적극 동참하고 있습니다.",
                icon: Heart,
                color: "#dc2626",
              },
              {
                title: "전국 공부방 교육",
                desc: "전국 각지의 공부방을 방문하여 소외된 아이들에게 양질의 교육 기회를 제공하고 있습니다.",
                icon: Users,
                color: "#4A3AFF",
              },
              {
                title: "InKAS 해외 입양인 특강",
                desc: "해외 입양인을 대상으로 한국어 및 한국 문화 특강을 진행하여 문화적 유대감을 형성합니다.",
                icon: Globe,
                color: "#2563eb",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-[17px] mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overseas Education Volunteering */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="해외 교육봉사"
            title="해외 교육 봉사 활동"
            subtitle="캄보디아, 네팔, 아프리카 등 교육 인프라가 부족한 지역에 교육의 불씨를 전하고 있습니다."
          />

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                country: "캄보디아",
                desc: "캄보디아 현지 어린이들을 대상으로 한 대규모 교육 봉사 활동을 진행합니다. 태극기와 함께 한국의 교육 정신을 전달합니다.",
                flag: "🇰🇭",
              },
              {
                country: "네팔",
                desc: "네팔 현지 학교에서 칠판 앞에서 직접 교육하는 봉사활동을 진행하며, 교육 자료와 물품을 지원합니다.",
                flag: "🇳🇵",
              },
              {
                country: "아프리카",
                desc: "아프리카 현지 교실에서 아이들에게 영어 교육을 제공하고, 교육 환경 개선을 위한 지원을 합니다.",
                flag: "🌍",
              },
              {
                country: "International Christian School",
                desc: "ICS 국제학교와 연계하여 해외 교육 봉사 프로그램을 운영하고, 글로벌 교육 네트워크를 확장합니다.",
                flag: "🌐",
              },
            ].map((item, i) => (
              <motion.div
                key={item.country}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 flex gap-5"
              >
                <div className="text-[36px] shrink-0">{item.flag}</div>
                <div>
                  <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.country}</h4>
                  <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ICS School Photos */}
          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={icsSchoolGroup} alt="ICS 국제학교 교육 봉사" className="w-full h-[350px] object-cover" />
              <div className="p-5 bg-white">
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>ICS 국제학교:</span> 국제학교와 연계한 교육 봉사 프로그램을 통해 글로벌 교육의 기회를 제공합니다.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={icsSchoolBuilding} alt="ICS 국제학교 건물" className="w-full h-[350px] object-cover" />
              <div className="p-5 bg-white">
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>교육 인프라:</span> 최신 교육 시설을 갖춘 ICS 국제학교를 통해 체계적인 교육 봉사를 실천하고 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Activities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="자원봉사"
            title="자원봉사 활동"
            subtitle="APEC 홍보사절단, 국제평화마라톤대회, 강남구자원봉사센터 등 다양한 사회 공헌 활동에 참여합니다."
          />

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "APEC 홍보사절단",
                desc: "APEC 성공개최를 위한 홍보사절단 활동에 참여하여 국제 행사의 성공적인 운영에 기여했습니다. 공항 출국장에서 APEC 홍보 현수막과 함께 활동했습니다.",
                icon: Flag,
              },
              {
                title: "제12회 국제평화마라톤대회",
                desc: "국제평화마라톤대회에 참가하여 평화의 메시지를 전달하고, 건강한 봉사 문화를 확산시키고 있습니다.",
                icon: MapPin,
              },
              {
                title: "강남구자원봉사센터",
                desc: "아크릴 수세미 만들기 등 지역사회 자원봉사 활동에 적극 참여하여 이웃 사랑을 실천합니다.",
                icon: HandHelping,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-6"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-[14px] text-muted-foreground" style={{ lineHeight: 1.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Marathon Event Photo */}
          <motion.div {...fadeUp} className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={marathonEvent} alt="제12회 국제평화마라톤대회" className="w-full h-[450px] object-cover" />
              <div className="p-6 bg-white">
                <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 600 }}>제12회 국제평화마라톤대회:</span> 타임스 미디어 임직원들이 국제평화마라톤대회에 참가하여 평화와 나눔의 가치를 실천하고 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}