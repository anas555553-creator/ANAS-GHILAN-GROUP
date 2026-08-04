import fs from "fs/promises";
import path from "path";

export type Locale = "ar" | "en";

export interface CompanyValueItem {
  titleAr: string;
  titleEn: string;
  textAr: string;
  textEn: string;
}

export interface CompanyHistoryItem {
  year: string;
  titleAr: string;
  titleEn: string;
  textAr: string;
  textEn: string;
}

export interface CompanyContent {
  companyNameAr: string;
  companyNameEn: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  taglineAr: string;
  taglineEn: string;
  descriptionAr: string;
  descriptionEn: string;
  missionAr: string;
  missionEn: string;
  visionAr: string;
  visionEn: string;
  ctaAr: string;
  ctaEn: string;
  ceoNameAr: string;
  ceoNameEn: string;
  ceoMessageAr: string;
  ceoMessageEn: string;
  values: CompanyValueItem[];
  history: CompanyHistoryItem[];
  isPlaceholder?: boolean;
}

export interface ServiceContent {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon?: string;
  isPlaceholder?: boolean;
}

export interface SectorContent {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon?: string;
  ctaAr?: string;
  ctaEn?: string;
  isPlaceholder?: boolean;
}

export interface ClientContent {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr?: string;
  categoryEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  logo?: string;
  isPlaceholder?: boolean;
}

export interface ProjectContent {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  client: string;
  location: string;
  year: string;
  status: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  gallery: string[];
  services?: string[];
  scope?: string[];
  highlights?: string[];
  isPlaceholder?: boolean;
}

const contentRoot = path.join(process.cwd(), "content");

const fallbackCompany: CompanyContent = {
  companyNameAr: "مجموعة أنس غيلان",
  companyNameEn: "Anas Ghilan Group",
  phone: "+967 770 000 000",
  email: "info@anasghilan.com",
  address: "صنعاء - الجمهورية اليمنية",
  website: "www.anasghilan.com",
  taglineAr: "شريك موثوق في المقاولات العامة والتوريدات والاستشارات الهندسية",
  taglineEn: "A trusted partner in general contracting, supplies, and engineering consultancy",
  descriptionAr: "مجموعة أنس غيلان هي شريك موثوق في تنفيذ المشاريع الحكومية والخاصة عبر خبرة متراكمة في المقاولات العامة، التوريدات، والمهام الهندسية المتكاملة.",
  descriptionEn: "Anas Ghilan Group is a trusted partner for public and private projects, backed by deep experience in general contracting, supplies, and integrated engineering services.",
  missionAr: "تنفيذ المشاريع بكفاءة عالية مع الالتزام بالجودة، الجدول الزمني، والسمعة المهنية، وبناء شراكات طويلة الأمد مع العملاء.",
  missionEn: "Deliver projects with high efficiency, uncompromising quality, disciplined timelines, and lasting client partnerships.",
  visionAr: "أن نكون من الشركات الرائدة في قطاع المقاولات والاستشارات الهندسية عبر حلول مبتكرة ومستدامة ترفع قيمة المشاريع.",
  visionEn: "To be a leading force in contracting and engineering consultancy through innovative, sustainable solutions that elevate project value.",
  ctaAr: "اطلب عرضًا سعرًا",
  ctaEn: "Request a quotation",
  ceoNameAr: "أنس غيلان",
  ceoNameEn: "Anas Ghilan",
  ceoMessageAr: "نؤمن أن الإنجاز الحقيقي لا يُقاس بالعمليات وحدها، بل بالثقة التي نبنيها مع العملاء والتميز الذي نضعه في كل مشروع.",
  ceoMessageEn: "We believe true achievement is not measured by operations alone, but by the trust we build with clients and the excellence we place in every project.",
  values: [
    { titleAr: "الخبرة", titleEn: "Experience", textAr: "أكثر من عقدين من العمل في المقاولات والهندسة والتطوير.", textEn: "More than two decades of work in contracting, engineering, and development." },
    { titleAr: "الالتزام", titleEn: "Commitment", textAr: "نلتزم بالمعايير والجدول الزمني والميزانية بدقة عالية.", textEn: "We adhere to standards, schedules, and budgets with precision." },
    { titleAr: "الاستدامة", titleEn: "Sustainability", textAr: "نبني حلولاً تدعم النمو طويل الأمد وتضيف قيمة مستدامة للمشاريع.", textEn: "We build solutions that support long-term growth and add lasting value." },
  ],
  history: [
    { year: "2010", titleAr: "البداية", titleEn: "The beginning", textAr: "تأسست المجموعة برؤية واضحة في تقديم حلول هندسية ومقاولاتية مميزة.", textEn: "The group was founded with a clear vision for delivering exceptional engineering and contracting solutions." },
    { year: "2016", titleAr: "التوسع", titleEn: "Expansion", textAr: "أصبحنا نموذجًا جديدًا في إدارة المشاريع وتنسيق الأعمال التنفيذية المتعددة.", textEn: "We became a new benchmark in managing complex projects and coordinated execution." },
    { year: "2022", titleAr: "الريادة", titleEn: "Leadership", textAr: "تمكنا من ترسيخ حضور قوي في السوق عبر مشاريع متنوعة وعمليات متطورة.", textEn: "We established a strong market presence across diverse and advanced operations." },
    { year: "2025", titleAr: "الطموح", titleEn: "Ambition", textAr: "نواصل بناء مستقبلٍ أكثر كفاءة وابتكارًا مع كل مشروع جديد.", textEn: "We continue building a more efficient and innovative future with each new project." },
  ],
  isPlaceholder: true,
};

const fallbackServices: ServiceContent[] = [
  {
    id: "general-contracting",
    titleAr: "المقاولات العامة",
    titleEn: "General Contracting",
    descriptionAr: "تنفيذ مشاريع مدنية وتجارية وحكومية وفق أعلى معايير الجودة والاحتراف.",
    descriptionEn: "Execution of civil, commercial, and public projects in line with the highest standards of quality and professionalism.",
    icon: "🏗️",
  },
  {
    id: "engineering-consultancy",
    titleAr: "الاستشارات الهندسية",
    titleEn: "Engineering Consultancy",
    descriptionAr: "تقديم الدراسات والتصاميم والإشراف الهندسي لضمان أداء موثوق وفعّال.",
    descriptionEn: "Delivery of engineering studies, designs, and supervision to ensure reliable and efficient performance.",
    icon: "🧭",
  },
  {
    id: "supplies-and-logistics",
    titleAr: "التوريدات والخدمات اللوجستية",
    titleEn: "Supplies and Logistics",
    descriptionAr: "تأمين المواد والمعدات الأساسية بكفاءة عالية وتنسيق لوجستي دقيق.",
    descriptionEn: "Provision of core materials and equipment with high efficiency and precise coordination.",
    icon: "🚚",
  },
];

const fallbackSectors: SectorContent[] = [
  {
    id: "public-infrastructure",
    titleAr: "البنية التحتية العامة",
    titleEn: "Public Infrastructure",
    subtitleAr: "مشاريع تشغيلية متقدمة",
    subtitleEn: "Advanced operational projects",
    descriptionAr: "نهتم بتطوير البنية التحتية الأساسية التي تدعم الاستقرار والنمو الاقتصادي.",
    descriptionEn: "We focus on developing essential infrastructure that supports stability and economic growth.",
    icon: "🛣️",
    ctaAr: "اعرف المزيد",
    ctaEn: "Learn more",
  },
  {
    id: "commercial-buildings",
    titleAr: "المباني التجارية",
    titleEn: "Commercial Buildings",
    subtitleAr: "تصميم وتنفيذ متكامل",
    subtitleEn: "Integrated design and delivery",
    descriptionAr: "نقدم حلولاً متكاملة للمشاريع التجارية التي تجمع بين التصميم المبتكر والإنجاز الموثوق.",
    descriptionEn: "We provide integrated solutions for commercial projects that combine innovative design with reliable delivery.",
    icon: "🏢",
    ctaAr: "اعرف المزيد",
    ctaEn: "Learn more",
  },
];

const fallbackClients: ClientContent[] = [
  {
    id: "public-sector",
    nameAr: "الجهات الحكومية",
    nameEn: "Public Sector Institutions",
    categoryAr: "جهة حكومية",
    categoryEn: "Government entity",
    descriptionAr: "شراكات موثوقة مع الجهات الحكومية في قطاعي البنية التحتية والمشاريع الاستراتيجية.",
    descriptionEn: "Trusted partnerships with government bodies in infrastructure and strategic projects.",
  },
  {
    id: "private-sector",
    nameAr: "القطاع الخاص",
    nameEn: "Private Sector",
    categoryAr: "شريك تجاري",
    categoryEn: "Business partner",
    descriptionAr: "مساندة المستثمرين والشركات في المشاريع ذات الأولوية التشغيلية والتشغيلية.",
    descriptionEn: "Supporting investors and companies in projects with strong operational and commercial priorities.",
  },
];

const fallbackProjects: ProjectContent[] = [
  {
    id: "project-placeholder",
    slug: "project-placeholder",
    titleAr: "المشروع قيد الإعداد",
    titleEn: "Project coming soon",
    client: "قريبًا",
    location: "قريبًا",
    year: "2026",
    status: "Upcoming",
    descriptionAr: "سيتم إضافة تفاصيل هذا المشروع قريبًا.",
    descriptionEn: "Project details will be added soon.",
    image: "",
    gallery: [],
    isPlaceholder: true,
  },
];

async function readJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function readMarkdownFile(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

async function readJsonFiles(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".json")).map((entry) => path.join(dirPath, entry.name));
  } catch {
    return [];
  }
}

async function readProjectDirectories(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(dirPath, entry.name));
  } catch {
    return [];
  }
}

async function readGalleryImages(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const projectDirName = path.basename(path.dirname(dirPath));
    return entries.filter((entry) => entry.isFile()).map((entry) => `/projects/${projectDirName}/${entry.name}`);
  } catch {
    return [];
  }
}

export async function getCompanyContent(): Promise<CompanyContent> {
  const companyJsonPath = path.join(contentRoot, "company", "company.json");
  const legacyConfigPath = path.join(contentRoot, "company", "company-config.json");
  const config = await readJsonFile<Partial<CompanyContent>>(companyJsonPath);
  const legacyConfig = config ? null : await readJsonFile<Partial<CompanyContent>>(legacyConfigPath);
  const source = config || legacyConfig;

  return {
    companyNameAr: source?.companyNameAr || fallbackCompany.companyNameAr,
    companyNameEn: source?.companyNameEn || fallbackCompany.companyNameEn,
    phone: source?.phone || fallbackCompany.phone,
    email: source?.email || fallbackCompany.email,
    address: source?.address || fallbackCompany.address,
    website: source?.website || fallbackCompany.website,
    taglineAr: source?.taglineAr || fallbackCompany.taglineAr,
    taglineEn: source?.taglineEn || fallbackCompany.taglineEn,
    descriptionAr: source?.descriptionAr || fallbackCompany.descriptionAr,
    descriptionEn: source?.descriptionEn || fallbackCompany.descriptionEn,
    missionAr: source?.missionAr || fallbackCompany.missionAr,
    missionEn: source?.missionEn || fallbackCompany.missionEn,
    visionAr: source?.visionAr || fallbackCompany.visionAr,
    visionEn: source?.visionEn || fallbackCompany.visionEn,
    ctaAr: source?.ctaAr || fallbackCompany.ctaAr,
    ctaEn: source?.ctaEn || fallbackCompany.ctaEn,
    ceoNameAr: source?.ceoNameAr || fallbackCompany.ceoNameAr,
    ceoNameEn: source?.ceoNameEn || fallbackCompany.ceoNameEn,
    ceoMessageAr: source?.ceoMessageAr || fallbackCompany.ceoMessageAr,
    ceoMessageEn: source?.ceoMessageEn || fallbackCompany.ceoMessageEn,
    values: source?.values || fallbackCompany.values,
    history: source?.history || fallbackCompany.history,
    isPlaceholder: !source,
  };
}

export async function getServicesContent(): Promise<ServiceContent[]> {
  const serviceCollectionPath = path.join(contentRoot, "services", "services.json");
  const servicesCollection = await readJsonFile<ServiceContent[]>(serviceCollectionPath);
  if (Array.isArray(servicesCollection) && servicesCollection.length) {
    return servicesCollection.map((service) => ({ ...service }));
  }

  const serviceFiles = await readJsonFiles(path.join(contentRoot, "services"));
  if (!serviceFiles.length) {
    return fallbackServices.map((service) => ({ ...service }));
  }

  const services = await Promise.all(
    serviceFiles.map(async (filePath) => {
      const service = await readJsonFile<Partial<ServiceContent>>(filePath);
      return {
        id: service?.id || path.basename(filePath, ".json"),
        titleAr: service?.titleAr || "خدمة غير متوفرة",
        titleEn: service?.titleEn || "Service unavailable",
        descriptionAr: service?.descriptionAr || "سيتم إضافة تفاصيل هذه الخدمة قريبًا.",
        descriptionEn: service?.descriptionEn || "Service details will be added soon.",
        icon: service?.icon || "🛠️",
      } satisfies ServiceContent;
    })
  );

  return services.length ? services : fallbackServices.map((service) => ({ ...service }));
}

export async function getSectorsContent(): Promise<SectorContent[]> {
  const sectorCollectionPath = path.join(contentRoot, "sectors", "sectors.json");
  const sectorsCollection = await readJsonFile<SectorContent[]>(sectorCollectionPath);
  if (Array.isArray(sectorsCollection) && sectorsCollection.length) {
    return sectorsCollection.map((sector) => ({ ...sector }));
  }

  const sectorFiles = await readJsonFiles(path.join(contentRoot, "sectors"));
  if (!sectorFiles.length) {
    return fallbackSectors.map((sector) => ({ ...sector }));
  }

  const sectors = await Promise.all(
    sectorFiles.map(async (filePath) => {
      const sector = await readJsonFile<Partial<SectorContent>>(filePath);
      return {
        id: sector?.id || path.basename(filePath, ".json"),
        titleAr: sector?.titleAr || "قطاع غير متوفر",
        titleEn: sector?.titleEn || "Sector unavailable",
        subtitleAr: sector?.subtitleAr || "",
        subtitleEn: sector?.subtitleEn || "",
        descriptionAr: sector?.descriptionAr || "سيتم إضافة تفاصيل هذا القطاع قريبًا.",
        descriptionEn: sector?.descriptionEn || "Sector details will be added soon.",
        icon: sector?.icon || "🏗️",
        ctaAr: sector?.ctaAr || "اعرف المزيد",
        ctaEn: sector?.ctaEn || "Learn more",
      } satisfies SectorContent;
    })
  );

  return sectors.length ? sectors : fallbackSectors.map((sector) => ({ ...sector }));
}

export async function getClientsContent(): Promise<ClientContent[]> {
  const clientsCollectionPath = path.join(contentRoot, "clients", "clients.json");
  const clientsCollection = await readJsonFile<ClientContent[]>(clientsCollectionPath);
  if (Array.isArray(clientsCollection) && clientsCollection.length) {
    return clientsCollection.map((client) => ({ ...client }));
  }

  return fallbackClients.map((client) => ({ ...client }));
}

export async function getProjectsContent(): Promise<ProjectContent[]> {
  const projectDirs = await readProjectDirectories(path.join(contentRoot, "projects"));
  if (!projectDirs.length) {
    return fallbackProjects.map((project) => ({ ...project }));
  }

  const projects = await Promise.all(
    projectDirs.map(async (dirPath) => {
      const projectFile = path.join(dirPath, "project.json");
      const markdownFile = path.join(dirPath, "README.md");
      const projectData = await readJsonFile<Partial<ProjectContent> & Record<string, unknown>>(projectFile);
      const markdown = await readMarkdownFile(markdownFile);
      const gallery = await readGalleryImages(path.join(dirPath, "gallery"));
      const titleAr = (projectData?.titleAr as string | undefined) || (projectData?.title_ar as string | undefined) || "مشروع غير متوفر";
      const titleEn = (projectData?.titleEn as string | undefined) || (projectData?.title_en as string | undefined) || "Project unavailable";
      const descriptionAr = (projectData?.descriptionAr as string | undefined) || (projectData?.description_ar as string | undefined) || markdown || "سيتم إضافة تفاصيل هذا المشروع قريبًا.";
      const descriptionEn = (projectData?.descriptionEn as string | undefined) || (projectData?.description_en as string | undefined) || markdown || "Project details will be added soon.";
      const services = Array.isArray(projectData?.services) ? (projectData.services as string[]) : [];
      const scope = Array.isArray(projectData?.scope) ? (projectData.scope as string[]) : [];
      const highlights = Array.isArray(projectData?.highlights) ? (projectData.highlights as string[]) : [];

      return {
        id: (projectData?.id as string | undefined) || path.basename(dirPath),
        slug: (projectData?.slug as string | undefined) || path.basename(dirPath).toLowerCase(),
        titleAr,
        titleEn,
        client: (projectData?.client as string | undefined) || "",
        location: (projectData?.location as string | undefined) || "",
        year: (projectData?.year as string | undefined) || "",
        status: (projectData?.status as string | undefined) || "Completed",
        descriptionAr,
        descriptionEn,
        image: (projectData?.image as string | undefined) || gallery[0] || "",
        gallery: gallery.length ? gallery : projectData?.image ? [(projectData.image as string)] : [],
        services,
        scope,
        highlights,
      } satisfies ProjectContent;
    })
  );

  return projects.length ? projects : fallbackProjects.map((project) => ({ ...project }));
}

export function getLocalizedText<T extends { titleAr?: string; titleEn?: string; descriptionAr?: string; descriptionEn?: string }>(
  item: T,
  locale: Locale = "ar"
) {
  if (locale === "en") {
    return {
      title: item.titleEn || item.titleAr || "",
      description: item.descriptionEn || item.descriptionAr || "",
    };
  }

  return {
    title: item.titleAr || item.titleEn || "",
    description: item.descriptionAr || item.descriptionEn || "",
  };
}

export function getLocalizedCompanyText(company: CompanyContent, locale: Locale = "ar") {
  if (locale === "en") {
    return {
      name: company.companyNameEn || company.companyNameAr,
      tagline: company.taglineEn || company.taglineAr,
      description: company.descriptionEn || company.descriptionAr,
      mission: company.missionEn || company.missionAr,
      vision: company.visionEn || company.visionAr,
      cta: company.ctaEn || company.ctaAr,
    };
  }

  return {
    name: company.companyNameAr || company.companyNameEn,
    tagline: company.taglineAr || company.taglineEn,
    description: company.descriptionAr || company.descriptionEn,
    mission: company.missionAr || company.missionEn,
    vision: company.visionAr || company.visionEn,
    cta: company.ctaAr || company.ctaEn,
  };
}
