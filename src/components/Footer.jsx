import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/70">© 2025 Siddhant Kale — All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:siddhantkale@email.com"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
