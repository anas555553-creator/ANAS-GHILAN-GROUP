"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "الخدمات" },
  { href: "/projects", label: "المشاريع" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-slate-950/80 py-3 backdrop-blur-2xl" : "bg-transparent py-5"}`}>
      <motion.div className="h-[2px] origin-left bg-red-500" style={{ scaleX }} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/hero.jpg" alt="شعار مجموعة أنس غيلان" width={56} height={56} className="rounded-full border border-red-500/40 object-cover" />
          <div>
            <h2 className="text-base font-black tracking-[0.2em] text-white">ANAS GHILAN</h2>
            <p className="text-sm text-slate-300">Group of Excellence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/85 transition hover:text-red-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full border border-red-400/30 bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 lg:inline-flex">
          اطلب عرض سعر
        </Link>
      </div>
    </header>
  );
}