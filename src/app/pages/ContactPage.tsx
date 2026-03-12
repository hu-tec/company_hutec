import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  Handshake,
  Lightbulb,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const inquiryTypes = [
  {
    value: "partnership",
    label: "사업 제휴 문의",
    icon: Handshake,
    color: "#4A3AFF",
  },
  {
    value: "business",
    label: "파트너십 문의",
    icon: Users,
    color: "#2563eb",
  },
  {
    value: "collaboration",
    label: "협업 문의",
    icon: Lightbulb,
    color: "#059669",
  },
  {
    value: "question",
    label: "일반 문의",
    icon: MessageCircle,
    color: "#7C3AED",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#4A3AFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[13px] mb-6" style={{ fontWeight: 500 }}>
              문의하기
            </span>
            <h1 className="text-white text-[36px] sm:text-[48px] mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              함께 성장할
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                전문가를 찾습니다
              </span>
            </h1>
            <p className="text-white/70 text-[16px] max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              사업 제휴, 파트너십, 협업을 원하시는 전문가 분들의 연락을 기다립니다.
              <br />
              AI 기술과 교육 분야에서 함께 혁신을 만들어갈 파트너를 찾고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div {...fadeUp}>
              <SectionTitle
                badge="연락처"
                title="휴텍씨 연락처"
                subtitle="언제든지 문의해 주세요. 빠르게 답변 드리겠습니다."
                align="left"
              />

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-5 bg-muted rounded-2xl">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[14px] text-muted-foreground mb-1" style={{ fontWeight: 500 }}>주소</h4>
                    <p className="text-[15px]" style={{ fontWeight: 600 }}>
                      서울 서초구 양재천로 19길 26, 6층 (양재동)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-muted rounded-2xl">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] text-muted-foreground mb-1" style={{ fontWeight: 500 }}>전화번호</h4>
                    <p className="text-[15px]" style={{ fontWeight: 600 }}>02-6207-9090</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-muted rounded-2xl">
                  <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] text-muted-foreground mb-1" style={{ fontWeight: 500 }}>이메일</h4>
                    <p className="text-[15px]" style={{ fontWeight: 600 }}>hutetchc02@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Why Partner with Us */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-[20px] mb-4" style={{ fontWeight: 700 }}>왜 휴텍씨와 함께해야 할까요?</h3>
                <ul className="space-y-3">
                  {[
                    "24년 교육 노하우와 AI 기술의 완벽한 융합",
                    "국내외 주요 대학 및 기업과의 폭넓은 네트워크",
                    "법무부 공인 자격증 등 검증된 신뢰성",
                    "109개 언어 지원과 글로벌 확장 가능성",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                      <span className="text-[14px] text-white/90" style={{ lineHeight: 1.7 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="bg-muted rounded-2xl p-8 lg:p-10">
                <h3 className="text-[24px] mb-6" style={{ fontWeight: 700 }}>문의 신청서</h3>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="text-[14px] text-green-800" style={{ fontWeight: 500 }}>
                      문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락 드리겠습니다.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-[14px] mb-3" style={{ fontWeight: 600 }}>
                      문의 유형 *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type.value })}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.inquiryType === type.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <type.icon
                            className="w-5 h-5 mb-2"
                            style={{ color: formData.inquiryType === type.value ? type.color : "#9CA3AF" }}
                          />
                          <p className="text-[13px]" style={{ fontWeight: 600 }}>{type.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[14px] mb-2" style={{ fontWeight: 600 }}>
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-[14px] mb-2" style={{ fontWeight: 600 }}>
                      소속 (회사명/기관명)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                      placeholder="소속을 입력해주세요"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[14px] mb-2" style={{ fontWeight: 600 }}>
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[14px] mb-2" style={{ fontWeight: 600 }}>
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[14px] mb-2" style={{ fontWeight: 600 }}>
                      문의 내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px] resize-none"
                      placeholder="문의하실 내용을 자세히 작성해주세요. 협업 제안, 파트너십 관련 문의, 궁금한 점 등을 편하게 남겨주세요."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-white rounded-xl text-[15px] hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    style={{ fontWeight: 600 }}
                  >
                    <Send className="w-4 h-4" />
                    문의 신청하기
                  </button>

                  <p className="text-[12px] text-muted-foreground text-center" style={{ lineHeight: 1.7 }}>
                    문의하신 내용은 영업일 기준 1-2일 이내에 회신 드립니다.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4A3AFF] to-[#7B6FFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-white text-[24px] sm:text-[30px] mb-3" style={{ fontWeight: 700 }}>
              전문가와 함께 성장하세요
            </h3>
            <p className="text-white/70 text-[15px]" style={{ lineHeight: 1.8 }}>
              AI 통번역 분야의 선도 기업, 휴텍씨와 함께 미래를 만들어갑니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
