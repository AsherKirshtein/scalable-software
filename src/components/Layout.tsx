import Nav from "./Nav";
import { Outlet, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#0B1F3B]/95 text-slate-900">
      {/* Softer startup background: less aggressive navy */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* red glow */}
        <div className="absolute left-1/2 top-[-220px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#E11D2E]/10 blur-[130px]" />
        {/* soft white glow */}
        <div className="absolute right-[-260px] top-[240px] h-[560px] w-[560px] rounded-full bg-white/8 blur-[130px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Lighter surface so the navy doesn't feel heavy */}
        <div className="rounded-[28px] border border-white/12 bg-white/97 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
        
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <footer className="mt-10 rounded-3xl border border-white/12 bg-white/6 px-5 py-6 text-sm text-white/75 backdrop-blur sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} ScalableSoftware</div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link className="hover:text-white" to="/services">Services</Link>
              <Link className="hover:text-white" to="/products">Products</Link>
              <Link className="hover:text-white" to="/work">Work</Link>
              <Link className="hover:text-white" to="/careers">Careers</Link>
              <Link className="hover:text-white" to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
