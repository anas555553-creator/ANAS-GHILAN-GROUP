export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white sm:py-20" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-black text-red-400">Anas Ghilan Group</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">مجموعة متخصصة في المقاولات العامة، التوريدات، والاستشارات الهندسية، وتقدم حلولاً متكاملة للمشاريع الحكومية والخاصة.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href="#about" className="transition hover:text-red-400">من نحن</a></li>
              <li><a href="#services" className="transition hover:text-red-400">الخدمات</a></li>
              <li><a href="#projects" className="transition hover:text-red-400">المشاريع</a></li>
              <li><a href="#contact" className="transition hover:text-red-400">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">خدماتنا</h3>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li>المقاولات العامة</li>
              <li>الاستشارات الهندسية</li>
              <li>البنية التحتية</li>
              <li>إدارة المشاريع</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">تواصل معنا</h3>
            <div className="mt-5 space-y-3 text-slate-400">
              <p>📍 الجمهورية اليمنية</p>
              <p>📞 +967 XX XXX XXXX</p>
              <p>✉️ info@anasghilan.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">© {new Date().getFullYear()} Anas Ghilan Group. All Rights Reserved.</div>
      </div>
    </footer>
  );
}