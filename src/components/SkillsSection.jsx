import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "C", "C++", "Java"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask"],
  },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman", "Firebase"],
  },
  {
    title: "Other",
    items: [
      "Linux",
      "REST APIs",
      "Machine Learning basics",
      "OpenCV",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Technical Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-medium text-white/90">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
