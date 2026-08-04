"use client";

const clients = ["وزارة الأشغال", "القطاع الحكومي", "القطاع الخاص", "الهيئات الهندسية", "الشركات الاستثمارية", "شركاء النجاح"];

export default function Clients() {
  return (
    <section id="clients" className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Trusted Clients</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">عملاؤنا يثقون بنا لأننا نحقق النتائج.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">نفخر ببناء شراكات طويلة الأمد مع الجهات الحكومية والخاصة، ونحرص على تحقيق التميز في كل مشروع.</p>
        </div>

        <div className="relative rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.25)] backdrop-blur-xl">
          <div className="marquee flex w-max items-center gap-6 whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client}-${index}`} className="group flex h-24 min-w-[220px] items-center justify-center rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 text-center text-base font-semibold text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                <span className="transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 grayscale">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}