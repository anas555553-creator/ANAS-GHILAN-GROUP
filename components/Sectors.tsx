"use client";

import { motion } from "framer-motion";
import type { SectorContent } from "@/lib/content";

export default function Sectors({ sectors }: { sectors: SectorContent[] }) {
  const displaySectors = sectors.slice(0, 2);

  return (
    <section id="sectors" className="bg-[#f7f7f5] py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Our Sectors</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">قطاعان متكاملان، كل واحد يرفع مستوى القيمة.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">نقدم من خلال قطاعي المقاولات والتصميم الهندسي خدمات متكاملة تجمع بين التنفيذ الدقيق والخبرة الاستشارية الرفيعة.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {displaySectors.map((sector, index) => (
            <motion.div key={sector.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`rounded-[2rem] border border-slate-200 p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:p-10 ${index % 2 === 0 ? "bg-white text-slate-950" : "bg-slate-950 text-white"}`}>
              <div className={`mb-6 inline-flex rounded-[1.25rem] p-4 text-4xl ${index % 2 === 0 ? "bg-red-50" : "bg-white/10"}`}>{sector.icon || "🏗️"}</div>
              <h3 className={`text-3xl font-bold ${index % 2 === 0 ? "text-slate-950" : "text-white"}`}>{sector.titleAr}</h3>
              <h4 className={`mt-2 text-lg font-semibold ${index % 2 === 0 ? "text-red-600" : "text-red-400"}`}>{sector.subtitleAr || sector.titleAr}</h4>
              <p className={`mt-6 text-lg leading-8 ${index % 2 === 0 ? "text-slate-600" : "text-slate-300"}`}>{sector.descriptionAr}</p>
              <button type="button" className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold transition ${index % 2 === 0 ? "bg-red-600 text-white hover:bg-red-500" : "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950"}`}>{sector.ctaAr || "اعرف المزيد"}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}