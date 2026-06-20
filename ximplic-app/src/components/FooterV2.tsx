import { Link } from "react-router-dom";

export default function FooterV2() {
  const col = "flex flex-col gap-2.5";
  const link = "text-sm text-white/50 hover:text-white transition-colors";
  return (
    <footer className="px-6 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="group flex items-center gap-2.5 mb-4">
            <img src="/XIM_Logo/ximplic-mark-white.svg" alt="Ximplic" className="w-6 h-6 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-90" />
            <span className="font-semibold tracking-tight">Ximplic</span>
          </Link>
          <p className="text-sm text-white/55 max-w-[28ch]">Simplifying intelligence for everyday devices.</p>
        </div>
        <div className={col}>
          <h3 className="text-xs font-medium tracking-widest uppercase text-white/55 mb-1.5">Products</h3>
          <Link to="/products" className={link}>All products</Link>
          <Link to="/products/vyzora" className={link}>Vyzora</Link>
          <Link to="/products/vextyl" className={link}>Vextyl</Link>
          <Link to="/products/xengra" className={link}>Xengra</Link>
        </div>
        <div className={col}>
          <h3 className="text-xs font-medium tracking-widest uppercase text-white/55 mb-1.5">Company</h3>
          <Link to="/about" className={link}>About</Link>
          <Link to="/news" className={link}>News</Link>
          <Link to="/events" className={link}>Events</Link>
          <Link to="/#contact" className={link}>Contact</Link>
        </div>
        <div className={col}>
          <h3 className="text-xs font-medium tracking-widest uppercase text-white/55 mb-1.5">Get in touch</h3>
          <a href="mailto:info@ximplic.com" className={link}>info@ximplic.com</a>
          <Link to="/#contact" className={link}>Request evaluation</Link>
          <a href="https://www.linkedin.com/company/ximplic-systems" target="_blank" rel="noopener" className={link}>LinkedIn</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Ximplic. All rights reserved.</span>
        <span>Edge AI inference IP · Groningen, The Netherlands</span>
      </div>
    </footer>
  );
}
