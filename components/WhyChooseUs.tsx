"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  TimerReset,
  BadgeCheck,
  Lightbulb,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "الجودة",
    text: "نلتزم بأعلى معايير الجودة في جميع مراحل التنفيذ.",
  },
  {
    icon: Building2,
    title: "الخبرة",
    text: "سنوات من الخبرة في المشاريع الحكومية والخاصة.",
  },
  {
    icon: TimerReset,
    title: "الالتزام",
    text: "نسلم المشاريع ضمن الوقت المحدد وبكفاءة عالية.",
  },
  {
    icon: BadgeCheck,
    title: "السلامة",
    text: "تطبيق أعلى معايير الأمن والسلامة في مواقع العمل.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    text: "حلول هندسية حديثة وتقنيات متطورة في التنفيذ.",
  },
  {
    icon: Users,
    title: "شراكة طويلة",
    text: "نبني علاقات طويلة الأمد مع عملائنا وشركائنا.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-bold text-red-400">
            لماذا نحن
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            لماذا تختار
            <span className="text-red-500"> مجموعة أنس غيلان؟</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            نقدم حلولاً هندسية ومقاولات متكاملة تجمع بين الجودة،
            والسرعة، والاحترافية، لنحول الأفكار إلى مشاريع ناجحة.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity:0,y:40 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{
                  duration:.6,
                  delay:index*0.08
                }}
                viewport={{ once:true }}
                whileHover={{
                  y:-10,
                  scale:1.03
                }}
                className="group rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-xl shadow-red-900/30">

                  <Icon className="h-8 w-8 text-white"/>

                </div>

                <h3 className="mt-8 text-2xl font-black text-white group-hover:text-red-400 transition">

                  {item.title}

                </h3>

                <div className="mt-4 h-1 w-12 rounded-full bg-red-500"/>

                <p className="mt-5 text-base leading-8 text-slate-300">

                  {item.text}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}