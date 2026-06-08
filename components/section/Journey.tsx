"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    type: "work",
    title: "Analista de Desarrollo",
    company: "Grupo Ambacar",
    period: "2026 - ACTUALMENTE",
    description:
      "Desarrollo y optimización de aplicaciones web, integración de APIs y mantenimiento de sistemas empresariales.",
  },
  {
    type: "work",
    title: "Desarrollador de Software",
    company: "Gala Corp",
    period: "2025 - 2026",
    description:
      "Desarrollo de aplicaciones web y mantenimiento de sistemas críticos para la gestión empresarial.",
  },
  {
    type: "work",
    title: "Técnico Junior en Desarrollo",
    company: "ISTE",
    period: "2023 - 2025",
    description:
      "Apoyo en el desarrollo de módulos frontend y optimización de peticiones al servidor.",
  },
  {
    type: "work",
    title: "Soporte Técnico Empresarial",
    company: "PELByte",
    period: "2021 - 2023",
    description:
      "Gestión de infraestructura tecnológica y soporte especializado a usuarios finales.",
  },
];

const educations = [
  {
    type: "edu",
    title: "Tecnologado en Desarrollo Web",
    subtitle: "ISTE",
    period: "2021 - 2023",
  },
  {
    type: "edu",
    title: "Bachillerato en Ciencias",
    subtitle: "Unidad Educativa Ambato",
    period: "2013 - 2020",
  },
];

const certifications = [
  {
    type: "cert",
    title: "LCSPC",
    subtitle: "CertiProf",
    period: "2024",
    link: "https://drive.google.com/file/d/14AMcHFvOPmhA1sAQZM9lLrOErks6r3gB/view?usp=sharing",
  },
  {
    type: "cert",
    title: "DevNet Associate",
    subtitle: "CISCO Networking Academy",
    period: "2024",
    link: "https://drive.google.com/file/d/1dTlrOlBDlNYzaE6Lmi2AL-ISBqfuAsM6/view?usp=drive_link",
  },
  {
    type: "cert",
    title: "Administración Técnica",
    subtitle: "UDET",
    period: "2023",
    link: "https://drive.google.com/file/d/1ABa7QcSv6h-FnFamRqJD5v5N9zBVdHae/view?usp=drive_link",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="mb-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Trayectoria
        </h2>
        <div className="h-px grow bg-zinc-900" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        {/* Column 1: Education */}
        <div className="relative">
          <h3 className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase mb-12 flex items-center gap-3">
            {/* <span className="w-8 h-px bg-zinc-800"></span> */}
            Educación
          </h3>

          <div className="flex flex-col">
            {educations.map((item: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative pl-24 pb-12 last:pb-0"
              >
                {/* Line Segment */}
                {idx !== educations.length - 1 && (
                  <div className="absolute left-7.75 top-16 bottom-0 w-0.5 bg-zinc-800" />
                )}

                <motion.div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-black-deep border border-zinc-900 flex items-center justify-center z-10 group-hover:border-zinc-500 group-hover:scale-110 group-hover:rotate-5 transition-all duration-300 overflow-hidden p-3.5 shadow-2xl">
                  <FaGraduationCap className="text-zinc-500 group-hover:text-white transition-colors text-2xl" />
                </motion.div>

                <div className="flex flex-col pt-1">
                  <h4 className="text-zinc-100 group-hover:text-white font-bold text-lg leading-tight transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-sm mt-1.5 font-medium transition-colors">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {item.period.includes("CURSANDO") && (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    )}
                    <span className="text-zinc-600 group-hover:text-zinc-500 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors">
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Certifications */}
        <div className="relative">
          <h3 className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase mb-12 flex items-center gap-3">
            {/* <span className="w-8 h-px bg-zinc-800"></span> */}
            Certificados
          </h3>

          <div className="flex flex-col">
            {certifications.map((item: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative pl-24 pb-12 last:pb-0"
              >
                {/* Line Segment */}
                {idx !== certifications.length - 1 && (
                  <div className="absolute left-7.75 top-16 bottom-0 w-0.5 bg-zinc-800" />
                )}

                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <motion.div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-black-deep border border-zinc-900 flex items-center justify-center z-10 group-hover:border-zinc-500 group-hover:scale-110 transition-all duration-300 overflow-hidden p-3.5 shadow-2xl cursor-pointer">
                    <PiCertificateBold className="text-zinc-500 group-hover:text-white transition-colors text-2xl" />
                  </motion.div>
                </a>

                <div className="flex flex-col pt-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    <h4 className="text-zinc-100 group-hover:text-white font-bold text-lg leading-tight transition-colors flex items-center gap-2">
                      {item.title}
                      <FiExternalLink className="text-zinc-600 group-hover:text-zinc-400 text-[10px]" />
                    </h4>
                  </a>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-sm mt-1.5 font-medium transition-colors">
                    {item.subtitle}
                  </p>
                  <span className="text-zinc-600 group-hover:text-zinc-500 font-mono text-[11px] uppercase mt-2 tracking-[0.2em] transition-colors">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 3: Work Experience */}
        <div className="relative">
          <h3 className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase mb-12 flex items-center gap-3">
            {/* <span className="w-8 h-px bg-zinc-800"></span> */}
            Experiencia Laboral
          </h3>

          <div className="flex flex-col">
            {experiences.map((exp: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative pl-24 pb-12 last:pb-0"
              >
                {/* Line Segment */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-7.75 top-16 bottom-0 w-0.5 bg-zinc-800" />
                )}

                <motion.div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-black-deep border border-zinc-900 flex items-center justify-center z-10 group-hover:border-zinc-500 group-hover:scale-110 group-hover:-rotate-5 transition-all duration-300 overflow-hidden p-3.5 shadow-2xl">
                  <FaBriefcase className="text-zinc-500 group-hover:text-white transition-colors text-2xl" />
                </motion.div>

                <div className="flex flex-col pt-1">
                  <h4 className="text-zinc-100 group-hover:text-white font-bold text-lg leading-tight transition-colors">
                    {exp.company}
                  </h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-sm mt-1.5 font-medium transition-colors">
                    {exp.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {exp.period.includes("ACTUALMENTE") && (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    )}
                    <span className="text-zinc-600 group-hover:text-zinc-500 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
