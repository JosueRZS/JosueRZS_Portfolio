"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuMonitorDot, LuServer, LuGitBranch } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiCloud } from "react-icons/ci";

const skillsByCategory = [
  {
    category: "Frontend",
    icon: <LuMonitorDot />,
    skills: [
      { name: "HTML 5", image: "/icons/html5.svg" },
      { name: "CSS 3", image: "/icons/css3.svg" },
      { name: "JavaScript", image: "/icons/javascript.svg" },
    //   { name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Next.js", image: "/icons/nextjs.svg" },
    ],
  },
  {
    category: "Backend",
    icon: <LuServer />,
    skills: [
      { name: "PHP", image: "/icons/php.svg" },
      { name: "Python", image: "/icons/python.svg" },
    //   { name: "C#", image: "/icons/csharp.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "NestJS", image: "/icons/nestjs.svg" },
    ],
  },
  {
    category: "Bases de Datos",
    icon: <GoDatabase />,
    skills: [
      { name: "MySQL", image: "/icons/mysql.svg" },
      { name: "PostgreSQL", image: "/icons/postgresql.svg" },
      { name: "Supabase", image: "/icons/supabase.svg" },
    ],
  },
  {
    category: "Mobile",
    icon: <HiOutlineDevicePhoneMobile />,
    skills: [
        { name: "Dart", image: "/icons/dart.svg" },
        { name: "Flutter", image: "/icons/flutter.svg" },
    ],
  },
  {
    category: "Control de Versiones",
    icon: <LuGitBranch />,
    skills: [
      { name: "Git", image: "/icons/git.svg" },
      { name: "GitHub", image: "/icons/github.svg" },
    ],
  },
  {
    category: "CMS & Cloud",
    icon: <CiCloud />,
    skills: [
      { name: "WordPress", image: "/icons/wordpress.svg" },
      { name: "Elementor", image: "/icons/elementor.svg" },
      { name: "Vercel", image: "/icons/vercel.svg" },
      { name: "Azure", image: "/icons/azure.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-bold text-white tracking-tight">Habilidades</h2>
        <div className="h-px grow bg-zinc-900" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsByCategory.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0b0b0b] border border-zinc-900 rounded-2xl p-6 transition-all duration-300 group/card"
          >
            <div className="space-y-8">
              {/* Encabezado de categoría */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-4xl text-zinc-500 transition-colors capitalize">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-zinc-200 font-bold text-xl transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">
                    {category.skills.length} Tecnologías
                  </p>
                </div>
              </div>

              {/* Skills icons flex container */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="w-14 h-14 rounded-xl bg-black-deep border border-zinc-900 flex items-center justify-center cursor-pointer group-hover:border-zinc-500 group-hover:bg-zinc-800/40 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 text-zinc-200 text-xs rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap font-medium pointer-events-none z-20 shadow-xl">
                      {skill.name}
                      {/* Rombo / Flecha */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-zinc-800 rotate-45" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

