"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            تواصل معنا
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            أبدأ مشروعًا مميزًا مع فريقٍ يقدّر الدقة والتفاصيل.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            نرحب بالاستفسارات حول المشاريع، الاستشارات، والتعاون، وسنكون سعداء بتقديم الدعم المقترح في أقرب وقت ممكن.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-10"
          >
            <h3 className="text-2xl font-bold text-slate-950">معلومات التواصل</h3>
            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">📍 الجمهورية اليمنية</p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">📞 +967 XX XXX XXXX</p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">✉️ info@anasghilan.com</p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">🌐 www.anasghilan.com</p>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-red-100 bg-red-50 p-6 text-red-700">
              <p className="text-sm font-semibold uppercase tracking-[0.35em]">Consultation</p>
              <p className="mt-3 text-lg">نقدم استشارات مبدئية مجانية لتقييم احتياجاتك أولاً.</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_35px_100px_-35px_rgba(220,38,38,0.35)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input aria-label="الاسم" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400" placeholder="الاسم" />
              <input aria-label="البريد الإلكتروني" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400" placeholder="البريد الإلكتروني" />
            </div>
            <textarea aria-label="الرسالة" rows={6} className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400" placeholder="اكتب رسالتك..." />
            <button type="submit" className="mt-6 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950">
              إرسال الرسالة
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}