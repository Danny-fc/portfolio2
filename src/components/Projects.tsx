import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Skybloom",
    image: "/skybloom2.png",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://skybloomjourneys.netlify.app",
    github: "https://github.com/Danny-fc/Project-SkyBloom.git",
  },
  {
    name: "BMW Car Show",
    image: "/bmw.png",
    tech: ["HTML", "CSS"],
    live: "https://bmwcarshow.netlify.app",
    github: "https://github.com/Danny-fc/BMW-car-grid.git",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-white/80 to-blue-50 dark:from-black/40 dark:to-[#171717]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-black/30 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform border border-gray-100 dark:border-gray-800 items-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={340}
                className="object-cover w-full h-48"
              />
              <div className="p-5 flex-1 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-blue-100 dark:bg-blue-900 text-xs px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-300 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
