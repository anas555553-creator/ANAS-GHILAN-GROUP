"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { title: "المقاولات العامة", text: "تنفيذ المشاريع السكنية والتجارية والحكومية وفق أعلى معايير الجودة والاحترافية." },
  { title: "الاستشارات الهندسية", text: "تقديم الدراسات والتصاميم والإشراف الهندسي بسمعة ممتازة في السوق." },
  { title: "البنية التحتية", text: "تنفيذ مشاريع الطرق، شبكات المياه، والصرف الصحي بالتخطيط والتنفيذ المتقنين." },
  { title: "التوريدات", text: "توريد المواد والمعدات الإنشائية بكفاءة عالية واحترافية." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pt-28" dir="rtl">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="الخدمات"
            title="خدمات متكاملة على أعلى مستوى"
            description="نقدم خدمات تنفيذية وهندسية متكاملة تضمن جودة الأداء وكفاءة الإنجاز ورضا العملاء."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)]">
                <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">{index + 1}</div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{service.text}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
