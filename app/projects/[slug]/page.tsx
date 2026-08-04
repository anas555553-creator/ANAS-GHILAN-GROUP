import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { notFound } from "next/navigation";
import { getProjectsContent } from "@/lib/content";

export async function generateStaticParams() {
  const projects = await getProjectsContent();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = await getProjectsContent();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProjectDetailContent project={project} />
      <Footer />
    </>
  );
}
