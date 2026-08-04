"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { title: "الخبرة", text: "أكثر من عقدين من العمل في المقاولات والهندسة والتطوير." },
  { title: "الالتزام", text: "نحن نلتزم بالمعايير والجدول الزمني والميزانية بدقة." },
  { title: "الاستدامة", text: "نبني حلولاً تدعم النمو طويل الأمد ورفع قيمة المشاريع." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pt-28" dir="rtl">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="من نحن"
            title="مؤسسة تُبنى على الخبرة والموثوقية"
            description="تعمل مجموعة أنس غيلان على تقديم حلولٍ شاملة في المقاولات العامة والتوريدات والاستشارات الهندسية، مع التزام واضح بالقيمة، الجودة، والنتائج المستدامة."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:p-10">
              <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">رؤيتنا</div>
              <p className="mt-6 text-lg leading-8 text-slate-600">أن نكون من الشركات الرائدة في قطاع المقاولات والاستشارات الهندسية من خلال تقديم حلول متقدمة ومبتكرة تدعم تطور المجتمع والاقتصاد.</p>
              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">النهج</p>
                <p className="mt-3 text-base leading-8 text-slate-600">نجمع بين الدقة العملية والإدارة المتقنة لإيصال المشاريع إلى مستوى أداء يرفع القيمة ويعزز الثقة.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-[0_30px_90px_-40px_rgba(220,38,38,0.2)] sm:p-10">
              <div className="inline-flex rounded-full border border-red-200 bg-white px-3 py-1 text-sm font-semibold text-red-600">رسالتنا</div>
              <p className="mt-6 text-lg leading-8 text-slate-600">تنفيذ المشاريع بكفاءة عالية مع الالتزام بالجودة والجدول الزمني، وبناء شراكات قوية مع العملاء والجهات المعنية.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-red-100 bg-white p-5">
                  <p className="text-3xl font-black text-slate-950">01</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">التخطيط الدقيق قبل التنفيذ.</p>
                </div>
                <div className="rounded-[1.25rem] border border-red-100 bg-white p-5">
                  <p className="text-3xl font-black text-slate-950">02</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">إشراف مستمر حتى التسليم.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
