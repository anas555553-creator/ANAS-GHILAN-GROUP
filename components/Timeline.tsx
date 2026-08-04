"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2009",
    title: "تأسيس المجموعة",
    description: "انطلاقنا من رؤية واضحة نحو بناء شراكات طويلة الأمد في قطاع المقاولات والاستشارات الهندسية.",
  },
  {
    year: "2014",
    title: "التوسع في المشاريع الكبرى",
    description: "توسّعنا في تنفيذ مشاريع بنية تحتية ومرافق حيوية بقدرة تشغيلية عالية ومواصفات قياسية.",
  },
  {
    year: "2019",
    title: "التركيز على الجودة والاحتراف",
    description: "عززنا منظومة الجودة والإدارة وتطوير فرق العمل لتقديم أداء متميز في كل مرحلة من مراحل المشروع.",
  },
  {
    year: "2025",
    title: "الريادة في التنفيذ المتقدم",
    description: "نواصل التميز من خلال حلول مبتكرة، تنفيذ دقيق، ومرتكز على الثقة والالتزام بمستويات عالمية.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Our Journey</p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">مسارنا في بناء الثقة والإنجاز.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">نعمل على توسيع نطاق الإبداع الهندسي والتنفيذ المتقن عبر سنوات من التميز والالتزام بالمعايير العالمية.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">
          {milestones.map((item, index) => (
            <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <div className="mb-6 inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">{item.year}</div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
