import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getCompanyContent, getLocalizedCompanyText, getProjectsContent, getSectorsContent, getServicesContent } from "@/lib/content";

export default async function Home() {
  const [company, services, sectors, projects] = await Promise.all([
    getCompanyContent(),
    getServicesContent(),
    getSectorsContent(),
    getProjectsContent(),
  ]);

  const localizedCompany = getLocalizedCompanyText(company, "ar");

  return (
    <>
      <Navbar />
      <Hero company={localizedCompany} />
      <About company={company} />
      <WhyChooseUs />
      <Sectors sectors={sectors} />
      <Services services={services} />
      <Projects projects={projects} />
      <Stats />
      <Timeline />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}