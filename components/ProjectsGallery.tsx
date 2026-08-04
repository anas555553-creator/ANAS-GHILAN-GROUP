"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectContent } from "@/lib/content";

const categories = ["All", "Infrastructure", "Commercial", "Residential"] as const;

export default function ProjectsGallery({ projects }: { projects: ProjectContent[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.status === activeCategory || project.client.includes(activeCategory));
  }, [activeCategory, projects]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mt-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              activeCategory === category
                ? "border-red-500 bg-red-600 text-white"
                : "border-white/15 bg-white/5 text-slate-300 hover:border-red-400/40 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className="overflow-hidden">
              <Image src={project.image} alt={project.titleAr} width={900} height={700} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex h-40 items-end bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">{project.status}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.titleAr}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.descriptionAr}</p>
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 p-6">
              <div>
                <p className="text-sm text-slate-400">{project.location}</p>
                <p className="text-sm font-semibold text-white">{project.year}</p>
              </div>
              <Link href={`/projects/${project.slug}`} className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500">
                عرض التفاصيل
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
