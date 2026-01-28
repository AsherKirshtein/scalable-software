import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const base =
  "rounded-xl px-3 py-2 text-sm font-semibold transition text-white/85 hover:text-white hover:bg-white/10";

const active =
  "bg-white/15 text-white ring-1 ring-white/15";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F3B]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="ScalableSoftware logo" className="h-9 w-auto" />
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-white">
              ScalableSoftware
            </div>
            <div className="text-xs text-white/60">
              ship fast • iterate weekly • polish matters
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
          >
            Products
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
          >
            Work
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
          >
            Contact
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? `${base} ${active}` : base)}>
            About
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? `${base} ${active}` : base)}>
            FAQ
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? `${base} ${active}` : base)}>
            Pricing
          </NavLink>

        </nav>

        <a
          className="rounded-2xl bg-[#E11D2E] px-4 py-2 text-sm font-bold text-white shadow-sm hover:opacity-90"
          href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Project%20Inquiry"
        >
          Let’s build →
        </a>
      </div>
    </header>
  );
}
