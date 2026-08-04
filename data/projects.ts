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
    gallery: [
      "/projects/Abu Amjad Commercial Group Building/02.jpg",
      "/projects/Abu Amjad Commercial Group Building/11.jpg",
    ],
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
    gallery: [
      "/projects/Abu Ziad Trading Building/06.jpg",
      "/projects/Abu Ziad Trading Building/07.jpg",
      "/projects/Abu Ziad Trading Building/08.jpg",
      "/projects/Abu Ziad Trading Building/11.jpg",
      "/projects/Abu Ziad Trading Building/12.jpg",
    ],
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
    gallery: [
      "/projects/Bin Ghailan Tower/07.jpg",
      "/projects/Bin Ghailan Tower/10.jpg",
      "/projects/Bin Ghailan Tower/11.jpg",
      "/projects/Bin Ghailan Tower/12.jpg",
    ],
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
    gallery: [
      "/projects/Commercial & Administrative Building-Raid/03.jpg",
      "/projects/Commercial & Administrative Building-Raid/04.jpg",
      "/projects/Commercial & Administrative Building-Raid/05.jpg",
      "/projects/Commercial & Administrative Building-Raid/11.jpg",
      "/projects/Commercial & Administrative Building-Raid/12.jpg",
      "/projects/Commercial & Administrative Building-Raid/13.jpg",
    ],
  },
];

export const categories = ["All", "Infrastructure", "Commercial", "Residential"] as const;
