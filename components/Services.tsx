"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Hammer,
  Wrench,
  Truck,
  ClipboardCheck,
  HardHat,
} from "lucide-react";
import type { ServiceContent } from "@/lib/content";

const defaultServices = [
  {
    icon: Building2,
    title: "المقاولات العامة",
    text: "تنفيذ المشاريع السكنية والتجارية والحكومية بأعلى معايير الجودة.",
  },
  {
    icon: Hammer,
    title: "الإنشاءات",
    text: "تنفيذ أعمال الخرسانة والهياكل والتشطيبات المتكاملة.",
  },
  {
    icon: Wrench,
    title: "الاستشارات الهندسية",
    text: "تصميم وإدارة وإشراف هندسي احترافي للمشاريع.",
  },
  {
    icon: Truck,
    title: "التوريدات",
    text: "توريد جميع المواد والمعدات الهندسية وفق أعلى المواصفات.",
  },
  {
    icon: ClipboardCheck,
    title: "إدارة المشاريع",
    text: "تخطيط وتنظيم ومتابعة المشاريع حتى التسليم النهائي.",
  },
  {
    icon: HardHat,
    title: "الصيانة والتشغيل",
    text: "حلول صيانة وتشغيل مستدامة للمباني والمنشآت.",
  },
];

const iconMap: Record<string, LucideIcon> = {
  "general-contracting": Building2,
  "engineering-consultancy": Wrench,
  "supplies-and-logistics": Truck,
  "construction": Hammer,
  "project-management": ClipboardCheck,
  "maintenance-and-operations": HardHat,
};

export default function Services({ services: contentServices }: { services?: ServiceContent[] }) {
  const services = (contentServices && contentServices.length > 0 ? contentServices : defaultServices).map((service) => {
    if ("titleAr" in service && "descriptionAr" in service) {
      const contentService = service as ServiceContent;
      const fallbackIcon = iconMap[contentService.id] ?? Building2;
      return { title: contentService.titleAr, text: contentService.descriptionAr, icon: fallbackIcon };
    }

    const defaultService = service as { title: string; text: string; icon: LucideIcon };
    return { title: defaultService.title, text: defaultService.text, icon: defaultService.icon };
  });

  return (
    <section
      id="services"
      dir="rtl"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-red-50 px-5 py-2 font-bold text-red-600">
            خدماتنا
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            حلول متكاملة لجميع المشاريع
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            نقدم خدمات هندسية وإنشائية متكاملة تضمن الجودة والالتزام
            وتحقيق أفضل النتائج لعملائنا.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service,index)=>{

            const Icon=service.icon;

            return(

              <motion.div
                key={service.title}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  duration:.5,
                  delay:index*0.08
                }}
                whileHover={{
                  y:-8,
                  scale:1.02
                }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">
                  <Icon className="h-8 w-8 text-white"/>
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {service.title}
                </h3>

                <div className="mt-4 h-1 w-12 rounded-full bg-red-500"/>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.text}
                </p>

              </motion.div>

            )

          })}

        </div>

      </div>
    </section>
  );
}