export type Project = {
  slug: string;
  title: string;
  category: "Infrastructure" | "Commercial" | "Residential";
  summary: string;
  client: string;
  location: string;
  year: string;
  scope: string;
  services: string[];
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "abdulaziz-ghanem-group",
    title: "مجموعة عبدالعزيز غانم",
    category: "Commercial",
    summary: "تنفيذ مبنى تجاري متعدد الاستخدامات بأعلى معايير الجودة.",
    client: "Abdulaziz Ghanem Group",
    location: "Sanaa, Yemen",
    year: "2024",
    scope: "Construction",
    services: ["Construction", "Structural Works", "Finishing"],
    image: "/projects/Abdulaziz Ghanem Group/cover.jpg",
    gallery: [
      "/projects/Abdulaziz Ghanem Group/01.jpg",
      "/projects/Abdulaziz Ghanem Group/02.jpg",
      "/projects/Abdulaziz Ghanem Group/03.jpg",
      "/projects/Abdulaziz Ghanem Group/04.jpg",
      "/projects/Abdulaziz Ghanem Group/05.jpg",
      "/projects/Abdulaziz Ghanem Group/06.jpg",
    ],
  },
  {
    slug: "abu-amjad-commercial-group-building",
    title: "مجمع أبو أمجد التجاري",
    category: "Commercial",
    summary: "تنفيذ مبنى تجاري واستثماري.",
    client: "Abu Amjad Commercial Group",
    location: "Sanaa, Yemen",
    year: "2024",
    scope: "Construction",
    services: ["Construction", "Concrete", "Finishing"],
    image: "/projects/Abu Amjad Commercial Group Building/cover.jpg",
    gallery: [],
  },
  {
    slug: "abu-ziad-trading-building",
    title: "مبنى أبو زياد التجاري",
    category: "Commercial",
    summary: "تنفيذ مبنى تجاري.",
    client: "Abu Ziad Trading",
    location: "Sanaa, Yemen",
    year: "2024",
    scope: "Construction",
    services: ["Construction"],
    image: "/projects/Abu Ziad Trading Building/cover.jpg",
    gallery: [],
  },
  {
    slug: "bin-ghailan-tower",
    title: "برج بن غيلان",
    category: "Commercial",
    summary: "تنفيذ برج تجاري.",
    client: "Bin Ghailan",
    location: "Sanaa, Yemen",
    year: "2024",
    scope: "Construction",
    services: ["Construction"],
    image: "/projects/Bin Ghailan Tower/cover.jpg",
    gallery: [],
  },
  {
    slug: "commercial-administrative-building",
    title: "المبنى التجاري والإداري",
    category: "Commercial",
    summary: "تنفيذ مبنى تجاري وإداري.",
    client: "Commercial & Administrative Building",
    location: "Sanaa, Yemen",
    year: "2024",
    scope: "Construction",
    services: ["Construction"],
    image: "/projects/Commercial & Administrative Building-Raid/cover.jpg",
    gallery: [],
  },
];

export const categories = ["All", "Infrastructure", "Commercial", "Residential"] as const;
