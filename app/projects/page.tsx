import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGallery from "@/components/ProjectsGallery";
import { getProjectsContent } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getProjectsContent();

  return (
    <>
      <Navbar />
      <main className="bg-slate-950 pt-28 text-white" dir="rtl">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="المشاريع"
            title="معرض مشاريعٍ يُظهر التميز"
            description="استكشف مجموعة من المشاريع التنفيذية التي تجمع بين التصميم، الهندسة، والتشغيل في بيئة أعمال عالية الجودة."
          />
          <ProjectsGallery projects={projects} />
        </section>
      </main>
      <Footer />
    </>
  );
}
