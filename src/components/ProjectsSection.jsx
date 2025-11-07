import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Face Recognition–Based Attendance System",
    description:
      "Built with Flask, OpenCV, and face_recognition; integrated with MongoDB for student data and attendance tracking.",
    tags: ["Flask", "OpenCV", "MongoDB", "face_recognition"],
    link: "#",
  },
  {
    title: "SplitEase – Bill Splitter App",
    description:
      "Inspired by Splitwise for hostel students. React + Node.js + MongoDB with real-time balance and group summaries.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Love Meter Mini Game",
    description:
      "Fun browser-based game using HTML, CSS, and JS. Optimized for mobile and desktop.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive red & black themed personal site with animations and separate pages for Skills, Education, and Contact.",
    tags: ["React", "Animations", "Design"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-white/90">{proj.title}</h3>
                <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm text-white/70">{proj.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
