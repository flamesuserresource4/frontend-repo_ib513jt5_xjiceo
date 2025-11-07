import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Globe } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center gap-8 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-wider text-white/80 backdrop-blur">
            Portfolio • Interactive • Modern
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Siddhant Kale
          </h1>
          <p className="max-w-2xl text-lg text-white/80 md:text-xl">
            IT Engineering Student | Aspiring Full-Stack Developer
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="inline-flex items-center gap-2"><MapPin size={16} /> Mumbai, India</div>
            <a
              href="mailto:siddhantkale@email.com"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail size={16} /> siddhantkale@email.com
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/20"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-pink-500/30 bg-pink-500/20 px-4 py-2 text-sm font-medium text-pink-100 backdrop-blur transition hover:border-pink-500/60 hover:bg-pink-500/30"
            >
              <Globe size={16} /> View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
