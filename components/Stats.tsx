"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { number: 15, suffix: "+", title: "سنة خبرة" },
  { number: 250, suffix: "+", title: "مشروع مكتمل" },
  { number: 120, suffix: "+", title: "عميل وشريك" },
  { number: 300, suffix: "+", title: "مهندس وفني" },
];

export default function Stats() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.16),_transparent_50%),#020617] py-24 text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Performance</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">أرقام تعكس القوة، الاستقرار، والنهج المتقدم</h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl">
              <h3 className="text-5xl font-black text-red-400"><AnimatedCounter value={item.number} suffix={item.suffix} /></h3>
              <p className="mt-4 text-lg font-semibold text-slate-200">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}