import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-[12px]" style={{ fontWeight: 700 }}>HT</span>
              </div>
              <span className="text-[18px]" style={{ fontWeight: 700 }}>휴텍씨</span>
            </div>
            <p className="text-white/60 text-[14px]" style={{ lineHeight: "1.8" }}>
              외국어 교육과 번역 분야의 리딩 그룹으로,
              인공지능 기술을 융합한 혁신적인 서비스를 제공합니다.
            </p>
          </div>

          <div>
            <h4 className="text-[15px] mb-4" style={{ fontWeight: 600 }}>사업 영역</h4>
            <div className="space-y-2.5">
              {[
                { label: "AITe 시험", path: "/business#aite" },
                { label: "ITT 시험", path: "/business#itt" },
                { label: "메타트랜스", path: "/business#metatrans" },
                { label: "통독 서비스", path: "/business#tongdoc" },
                { label: "프롬프트 전문가", path: "/business#prompt" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[15px] mb-4" style={{ fontWeight: 600 }}>바로가기</h4>
            <div className="space-y-2.5">
              {[
                { label: "그룹 소개", path: "/about" },
                { label: "교육 사업", path: "/education" },
                { label: "사회 공헌", path: "/csr" },
                { label: "파트너십", path: "/partners" },
                { label: "언론 보도", path: "/press" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[15px] mb-4" style={{ fontWeight: 600 }}>연락처</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-white/60 text-[14px]">서울 서초구 양재천로 19길 26, 6층 (양재동)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/60 text-[14px]">02-6207-9090</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/60 text-[14px]">hutetchc02@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="text-white/60 text-[13px] space-y-1">
              <p>상호명: 주식회사 휴텍씨</p>
              <p>대표이사: 박미진</p>
            </div>
            <div className="flex gap-6">
              <span className="text-white/40 hover:text-white/60 text-[13px] cursor-pointer transition-colors">
                개인정보처리방침
              </span>
              <span className="text-white/40 hover:text-white/60 text-[13px] cursor-pointer transition-colors">
                이용약관
              </span>
            </div>
          </div>
          <p className="text-white/40 text-[13px] text-center sm:text-left">
            &copy; 2026 HuTechC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}