import { motion } from "motion/react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
  compact?: boolean;
}

export function SectionTitle({ badge, title, subtitle, light, align = "center", compact = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${compact ? "mb-6" : "mb-12"} ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-[13px] mb-4 ${
            light ? "bg-white/10 text-white/80" : "bg-secondary text-primary"
          }`}
          style={{ fontWeight: 500 }}
        >
          {badge}
        </span>
      )}
      <h2
        className={`${compact ? "text-[16px]" : "text-[28px] sm:text-[36px]"} mb-3 ${light ? "text-white" : "text-foreground"}`}
        style={{ fontWeight: 700, lineHeight: 1.3 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[16px] max-w-2xl ${align === "center" ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
          style={{ lineHeight: 1.8 }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}