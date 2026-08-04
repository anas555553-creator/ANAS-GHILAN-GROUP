"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pt-28" dir="rtl">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="تواصل معنا"
            title="تواصل مع فريقنا اليوم"
            description="نحن مستعدون لمساعدتك في تحويل أفكارك إلى مشاريع ملموسة ذات جودة عالية ونتائج موثوقة."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900">معلومات التواصل</h2>
              <div className="mt-8 space-y-6 text-lg text-slate-600">
                <p>📍 العنوان: الجمهورية اليمنية</p>
                <p>📞 الهاتف: +967 XX XXX XXXX</p>
                <p>✉️ البريد الإلكتروني: info@anasghilan.com</p>
                <p>🌐 الموقع: www.anasghilan.com</p>
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-red-50 p-6 text-red-700">
                <p className="text-sm font-semibold uppercase tracking-[0.35em]">Consultation</p>
                <p className="mt-3 text-lg">نقدم استشارات مبدئية مجانية لتقييم احتياجاتك أولاً.</p>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_35px_100px_-35px_rgba(220,38,38,0.35)] sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <input aria-label="الاسم" placeholder="الاسم" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right outline-none placeholder:text-slate-400 focus:border-red-400" />
                <input aria-label="البريد الإلكتروني" type="email" placeholder="البريد الإلكتروني" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right outline-none placeholder:text-slate-400 focus:border-red-400" />
              </div>
              <textarea aria-label="الرسالة" rows={6} placeholder="اكتب رسالتك..." className="mt-6 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right outline-none placeholder:text-slate-400 focus:border-red-400" />
              <button type="submit" className="mt-6 rounded-full bg-red-600 px-8 py-3.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950">إرسال الرسالة</button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
