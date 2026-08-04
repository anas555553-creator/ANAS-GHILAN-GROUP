"use client";

import { motion } from "framer-motion";
import type { CompanyContent } from "@/lib/content";

export default function About({ company }: { company: CompanyContent | null }) {
  const values = company?.values || [];
  const history = company?.history || [];

  return (
    <motion.section id="about" className="bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.08),_transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-24 sm:py-32" dir="rtl" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true, margin: "-80px" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            من نحن
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {company?.visionAr || "شريك موثوق في التشييد، الهندسة، والإنجاز"}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {company?.descriptionAr || "تجمع مجموعة أنس غيلان بين الخبرة التنفيذية والابتكار الهندسي لتقديم مشاريع ذات قيمة عالية وجودة استثنائية ونتائج مستدامة."}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10"
          >
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
              رؤيتنا
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {company?.visionAr || "أن نكون من الشركات الرائدة في مجال التشييد والاستشارات الهندسية من خلال حلول مبتكرة ومستدامة بمستوى عالمي."}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-3xl font-black text-slate-950">01</p>
                <p className="mt-3 text-slate-600">تنفيذ متكامل يجمع بين البعد الهندسي والاقتصادي.</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-3xl font-black text-slate-950">02</p>
                <p className="mt-3 text-slate-600">أسلوب تشغيلي يجمع بين المرونة والنتائج الملموسة.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_35px_100px_-40px_rgba(220,38,38,0.45)] sm:p-10"
          >
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-semibold text-red-300">
              رسالتنا
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {company?.missionAr || "تنفيذ المشاريع بكفاءة عالية واحترافية تضمن الجودة والالتزام بالوقت وبناء شراكات طويلة الأمد مع العملاء."}
            </p>
            <div className="mt-8 space-y-4">
              {values.slice(0, 3).map((item) => (
                <div key={item.titleAr} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <h4 className="text-lg font-bold text-white">{item.titleAr}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.textAr}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-10"
          >
            <h3 className="text-2xl font-bold text-slate-950">الرحلة التاريخية</h3>
            <div className="mt-8 space-y-6">
              {history.map((item) => (
                <div key={item.year} className="flex gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="min-w-[70px] rounded-full bg-red-600/10 px-3 py-2 text-center text-sm font-black text-red-600">{item.year}</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950">{item.titleAr}</h4>
                    <p className="mt-2 text-base leading-8 text-slate-600">{item.textAr}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_-35px_rgba(15,23,42,0.45)] sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">CEO Message</p>
            <h3 className="mt-4 text-2xl font-bold">رسالة المدير التنفيذي</h3>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              “{company?.ceoMessageAr || "نؤمن أن الإنجاز الحقيقي لا يُقاس بالعمليات فحسب، بل بالثقة التي نبنيها مع العملاء، والتميز الذي نضعه في كل مشروع، والعمل الذي يترك أثرًا دائمًا."}”
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">القيادة</p>
              <p className="mt-2 text-xl font-bold text-white">{company?.ceoNameAr || "أنس غيلان"}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">المؤسس والرئيس التنفيذي</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}