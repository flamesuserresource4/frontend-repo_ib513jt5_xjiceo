import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Education
        </motion.h2>

        <div className="mt-8 grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-lg font-medium">
                B.E. in Information Technology
              </h3>
              <span className="text-sm text-white/60">2023 – 2027 (Expected)</span>
            </div>
            <p className="mt-1 text-white/80">
              Vidyavardhini’s College of Engineering and Technology, Mumbai
              University
            </p>
            <p className="mt-2 text-sm text-white/70">CGPA: 8.5/10</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h4 className="text-base font-medium">12th Grade (HSC)</h4>
            <p className="text-white/80">School Name • Year • Percentage</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h4 className="text-base font-medium">10th Grade (SSC)</h4>
            <p className="text-white/80">School Name • Year • Percentage</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
