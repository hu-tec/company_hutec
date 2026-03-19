import { motion } from "motion/react";
import {
  Newspaper,
  Calendar,
  ExternalLink,
  Search,
  ChevronLeft,
  ChevronRight,
  FileText,
  BookOpen,
  Award,
  Tv
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";

import imgEvent1 from "@/assets/press_event1.png";
import imgEvent2 from "@/assets/press_event2.png";
import imgEvent3 from "@/assets/press_event3.png";
import imgEvent4 from "@/assets/press_event4.png";

export function PressPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              PRESS RELEASE
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              휴텍씨의 새로운
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                도약과 성장의 소식
              </span>
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              미디어를 통해 비춰지는 휴텍씨의 혁신적인 행보와 글로벌 성과를 실시간으로 확인하실 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* New Press Layout Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* 5-2. 국내 언론 보도 */}
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[13px] font-bold mb-4">
                미디어 노출
              </span>
              <h2 className="text-[32px] font-bold mb-4">국내 언론 보도</h2>
              <p className="text-muted-foreground text-[16px]">
                인공지능 번역 대결, 번역 시험, TESOL, 국제학교, 교육봉사 등 다양한 활동이 보도되었습니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-[24px] border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <Newspaper className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3">인공지능 번역 대결</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">
                    구글, 파파고, 시스트란 등 주요 AI 번역기와 인간 번역사 간의 번역 대결 현장이 주요 뉴스로 보도되었습니다. 기자 및 청중이 모인 대규모 행사입니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">KBS</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">SBS</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">채널A</span>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-[24px] border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3">번역 시험 관련 보도</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">
                    영자 신문 기사 스크랩과 모바일 앱 화면이 소개되며, 통번역 시험의 공신력이 언론에서 인정받고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">영자 신문</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="p-8 rounded-[24px] border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3">테솔 관련 보도</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">
                    MBC 뉴스데스크(2008년 1월 25일) 방송에서 TESOL 교육의 가치와 성과를 집중 보도했습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">MBC 뉴스데스크</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="p-8 rounded-[24px] border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3">국제 학교 보도</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">
                    ICS 국제학교의 교육 성과와 글로벌 인증 현황이 언론에 소개되었습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[12px] rounded-md font-bold">교육 전문지</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="p-8 rounded-[24px] border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3">전국 지역아동센터 교육봉사</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">
                    전국 지역아동센터에서의 교육봉사 활동이 사회공헌 사례로 언론에 보도되었습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] rounded-md font-bold">사회 뉴스</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 5-3. 언론 보도 현장 */}
          <div>
            <h3 className="text-[20px] font-bold mb-6">언론 보도 현장</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "번역 대결 행사장", img: imgEvent1 },
                { title: "박미진 대표 발표", img: imgEvent2 },
                { title: "언론사 취재 현장", img: imgEvent3 },
                { title: "기자단 촬영", img: imgEvent4 }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 border-t border-border">
                    <p className="text-[13px] font-medium text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-4. 기자 회견 현장 */}
          <div>
            <h3 className="text-[20px] font-bold mb-6">기자 회견 현장</h3>
            <div className="rounded-3xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow flex flex-col">
              <div className="w-full h-64 sm:h-80 md:h-[450px] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1540575339264-569259c87820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600" alt="Press Conference" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 border-t border-border bg-white relative">
                <h4 className="text-[18px] font-bold mb-4">인간 vs 인공지능 번역대결 기자회견</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  2017년 2월 21일, 국내외 주요 언론사 기자들이 참석한 가운데 인간 vs 인공지능 번역대결 행사 기자회견이 개최되었습니다.
                  KBS, SBS, JTBC, 연합뉴스 등 다수의 방송사와 언론사에서 현장을 취재했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 5-5. 주요 방송사 보도 */}
          <div>
            <h3 className="text-[20px] font-bold mb-6">주요 방송사 보도</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { tag: "KBS 뉴스", title: "AI 번역기 vs 인간 번역 대결", img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
                { tag: "KBS 뉴스", title: "인간 vs 인공지능 번역 대결", img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
                { tag: "SBS 뉴스", title: "인간 vs 인공지능 번역대결", img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
                { tag: "JTBC 뉴스", title: "번역 대결... 인간 vs 인공지능 세기의 대결", img: "https://images.unsplash.com/photo-1504711432819-51f197fa1048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
                { tag: "연합뉴스TV", title: "인간이 인공지능 이겼다...번역대결서 압승", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[24px] border border-border overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col border-t border-border">
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md text-[11px] font-bold">
                        <Tv className="w-3.5 h-3.5" />
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-[16px] font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
