"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectContent } from "@/lib/content";

export default function ProjectDetailContent({ project }: { project: ProjectContent }) {
  const gallery = project.gallery?.length ? project.gallery : [project.image || ""];

  return (
    <main className="bg-slate-950 pt-28 text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-red-400 transition hover:text-red-300">
          ← العودة إلى المعرض
        </Link>

        <div className="mt-10 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">{project.status}</p>
              <h1 className="mt-4 text-4xl font-black sm:text-5xl">{project.titleAr}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">{project.descriptionAr}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-400">العميل</p>
                  <p className="mt-2 font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">الموقع</p>
                  <p className="mt-2 font-semibold">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">السنة</p>
                  <p className="mt-2 font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">الحالة</p>
                  <p className="mt-2 font-semibold">{project.status}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2rem] border border-white/10">
              <Image src={project.image} alt={project.titleAr} width={1200} height={800} className="h-[420px] w-full object-cover" />
            </motion.div>
            <div className="grid gap-6">
              {gallery.slice(1).map((image, index) => (
                <motion.div key={image} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: index * 0.08 }} className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image src={image} alt={`${project.titleAr} ${index + 2}`} width={700} height={500} className="h-44 w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
