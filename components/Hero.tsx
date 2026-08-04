"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 250, suffix: "+", label: "مشروع مكتمل" },
  { value: 15, suffix: "+", label: "سنة خبرة" },
  { value: 120, suffix: "+", label: "عميل وشريك" },
];

const trustBadges = [
  { title: "ضمان تنفيذ", detail: "التزام واضح بالجدول والجودة" },
  { title: "تسليم دقيق", detail: "في الوقت المحدد وبأعلى المعايير" },
  { title: "استشارات فنية", detail: "خطة متكاملة من التصميم إلى التشغيل" },
];

export default function Hero({ company }: { company: { name: string; cta: string } | null }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950" dir="rtl" aria-label="Hero section">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.38),_transparent_34%),linear-gradient(120deg,_rgba(2,6,23,0.97)_0%,_rgba(2,6,23,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-red-600/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.28em] text-red-300 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              {company?.name || "Anas Ghilan Group"}
            </div>

            <h1 className="mt-8 text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              نبني المشاريع
              <span className="mt-3 block bg-gradient-to-r from-white via-red-100 to-red-500 bg-clip-text text-transparent">
                بأعلى درجات الدقة والهيبة.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              شركة متكاملة في المقاولات العامة، التوريدات، والاستشارات الهندسية، تقدم حلولًا تنفيذية تجمع بين الخبرة، الاحتراف، والالتزام بالتميز.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className="rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_-15px_rgba(220,38,38,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                {company?.cta || "اطلب عرض سعر"}
              </Link>
              <Link href="/contact" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950">
                تواصل معنا
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
                  <span className="font-semibold text-white">{badge.title}</span>
                  <span className="mr-2 text-slate-400">{badge.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 }} className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:p-6">
              <div className="rounded-[1.5rem] border border-red-500/20 bg-slate-950/70 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">التنفيذ الاستراتيجي</p>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-300">2026</span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  حلول هندسية تحفظ القيمة وتُعزز الثقة.
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  من التصميم إلى الإشراف، نُقدّم منظومة متكاملة توازن بين الكفاءة التشغيلية، الجودة التنفيذية، والالتزام بالمعايير الدولية.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.1rem] border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl">
                      <p className="text-2xl font-black text-white sm:text-3xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden rounded-full border border-red-500/30 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 shadow-2xl shadow-black/40 backdrop-blur-xl lg:block">
              <span className="font-semibold text-white">مُشرفون على</span>
              <div className="mt-1 text-red-400">أعمال معقدة</div>
            </div>

            <div className="absolute -right-3 bottom-8 hidden rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200 shadow-2xl shadow-black/40 backdrop-blur-xl lg:block">
              <span className="font-semibold text-white">معايير عالمية</span>
              <div className="mt-1 text-red-400">وتسليم استثنائي</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-white/80">
        <div className="mb-2 h-10 w-6 rounded-full border border-white/40 p-1">
          <div className="mx-auto h-2.5 w-1.5 rounded-full bg-white/90 animate-[bounce_1.8s_infinite]" />
        </div>
        <p className="text-[11px] uppercase tracking-[0.35em]">Scroll</p>
      </motion.div>
    </section>
  );
}