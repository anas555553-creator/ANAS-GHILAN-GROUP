"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import type { ProjectContent } from "@/lib/content";

interface ProjectsProps {
  projects: ProjectContent[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// No hardcoded demo images — prefer project.image or project.gallery values.

interface ProjectCardProps {
  project: ProjectContent;
  featured?: boolean;
  index?: number;
}

function getImageSrc(project: ProjectContent, index: number) {
  if (project.image) return project.image;
  if (project.gallery && project.gallery.length) return project.gallery[0];
  return "";
}

function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const imageSrc = getImageSrc(project, index);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 260, damping: 24 } }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_35px_100px_-40px_rgba(2,6,23,0.35)] ${featured ? "min-h-[520px] lg:min-h-[620px]" : "min-h-[320px] sm:min-h-[360px]"}`}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={project.titleAr}
          fill
          sizes="(min-width: 1280px) 70vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/20 to-slate-950/10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.2),transparent_45%)]"
        />
      </div>

      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6 lg:p-8">
        <span className="rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-[11px] font-semibold tracking-[0.22em] text-white backdrop-blur-xl">
          {project.client || "مشروع تنفيذي"}
        </span>
        <span className="rounded-full border border-red-200/50 bg-slate-950/45 px-3.5 py-2 text-[11px] font-semibold tracking-[0.24em] text-red-200 backdrop-blur-xl">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
        <div className="rounded-[1.5rem] border border-white/20 bg-white/12 p-4 backdrop-blur-2xl sm:p-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-red-400" strokeWidth={1.8} />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-red-400" strokeWidth={1.8} />
              {project.year}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-black text-white sm:text-[1.7rem]">{project.titleAr}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">{project.descriptionAr}</p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-950"
            >
              <span>عرض المشروع</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2} />
            </Link>
            <span className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-red-500 to-transparent" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section dir="rtl" id="projects" className="bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            مشاريعنا
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            أعمال هندسية تُحسّن المكان وتُعيد تعريف الجودة.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            نُقدّم مشاريع تنفيذية متكاملة تجمع بين التصميم، الإشراف، والالتزام بالتميز في كل مرحلة.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-6">
          {featuredProject ? (
            <motion.div variants={cardVariants} className="w-full">
              <ProjectCard project={featuredProject} featured index={0} />
            </motion.div>
          ) : null}

          {otherProjects.length > 0 ? (
            <div className="columns-1 gap-6 md:columns-2">
              {otherProjects.map((project, index) => (
                <div key={project.id} className="mb-6 break-inside-avoid">
                  <ProjectCard project={project} index={index + 1} />
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

