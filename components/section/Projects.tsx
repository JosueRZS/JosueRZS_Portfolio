"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "Blackanderlust",
    description:
      "Landing Page Coorporativa para empresa de relaciones públicas ambateña. Diseño elegante y dinámico con enfoque en storytelling visual y catálogo de servicios.",
    media: "/images/screenshots/Blackanderlust_1920.png",
    demo: "https://blackanderlust.com/",
    github: null,
  },
  {
    title: "Marcfashion",
    description:
      "Ecommerce internacional para la sastrería ambateña Marcfashion. Implementación completa de pasarela de pagos, gestión de inventario automatizada y panel administrativo personalizado.",
    media: "/images/screenshots/Marcfashion_1920.png",
    demo: "https://sastreriamarcfashion.com/",
    github: null,
  },
  {
    title: "Gala Export",
    description:
      "Plataforma corporativa para empresa exportadora de productos ecuatorianos a nivel mundial. Optimización SEO multilingüe, blog dinámico y arquitectura enfocada a la conversión B2B.",
    media: "/images/screenshots/Gala_Export_1920.png",
    demo: "https://www.galaexportec.com/",
    github: null,
  },
  {
    title: "PSI",
    description:
      "Solución empresarial con integración del ecosistema de Azure/Sharepoint para la gestión documental, pensado para como un dashboard conectado del sistema de gestión documental principal (SGA).",
    media: "/images/screenshots/PSI_Censurado_1920.png",
    demo: null,
    github: null,
  },
  {
    title: "App Móvil",
    description:
      "Desarrollo de aplicación móvil para gestión interna de cada estudiante de una institución educativa. Funcionalidades incluyen notificaciones push, calendario académico y acceso a recursos educativos.",
    media: "/images/screenshots/App_Movil_Censurado_blanco_1920.png",
    demo: null,
    github: null,
  },
  {
    title: "PELByte",
    description:
      "Presencia digital para consultora tecnológica. Diseño minimalista enfocado en la claridad de servicios y captación de clientes para soporte IT especializado.",
    media: "/images/screenshots/PELByte_1920.png",
    demo: "https://pelbyte.com",
    github: null,
  },
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = projects[activeIdx];

  return (
    <section id="projects">
      <div className="flex items-center gap-4 mb-20 whitespace-nowrap">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Proyectos Freelancer
        </h2>
        <div className="h-px grow bg-zinc-900" />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Visualización del Proyecto (Derecha) */}
        <div className="lg:col-span-8 flex flex-col gap-8 order-2 lg:order-2">
          {/* Contenedor de Imagen Estable */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-900 bg-zinc-950/20">
            <div className="absolute inset-0">
              <Image
                src={activeProject.media}
                alt={activeProject.title}
                fill
                className="object-cover object-top"
                priority={activeIdx === 0}
              />
              {/* Overlay sutil persistente */}
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Información (Izquierda) */}
            <div className="max-w-xl space-y-4 order-1">
              <h3 className="text-white text-xl font-medium md:hidden">
                {activeProject.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                {activeProject.description}
              </p>
            </div>

            {/* Acciones/Botones (Derecha) */}
            <div className="flex flex-col gap-2 min-w-50 w-full md:w-auto order-2">
              <div className="relative group/tooltip">
                <a
                  href={activeProject.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-4 py-3 rounded border border-zinc-900 text-zinc-400 transition-all group ${
                    !activeProject.demo
                      ? "opacity-20 cursor-not-allowed"
                      : "hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                  }`}
                  onClick={(e) => !activeProject.demo && e.preventDefault()}
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Sitio Web
                  </span>
                  <FaGlobe
                    className={`transition-colors ${!activeProject.demo ? "text-zinc-800" : "text-zinc-600 group-hover:text-white"}`}
                  />
                </a>

                {!activeProject.demo && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 text-zinc-200 text-[10px] rounded-lg border border-zinc-800 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-300 whitespace-nowrap font-medium pointer-events-none z-20 shadow-xl">
                    Aplicación Privada
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-zinc-800 rotate-45" />
                  </div>
                )}
              </div>

              <div className="relative group/tooltip">
                <a
                  href={activeProject.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-4 py-3 rounded border border-zinc-900 text-zinc-400 transition-all group ${
                    !activeProject.github
                      ? "opacity-20 cursor-not-allowed"
                      : "hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                  }`}
                  onClick={(e) => !activeProject.github && e.preventDefault()}
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Repositorio
                  </span>
                  <FaGithub
                    className={`transition-colors ${!activeProject.github ? "text-zinc-800" : "text-zinc-600 group-hover:text-white"}`}
                  />
                </a>

                {!activeProject.github && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 text-zinc-200 text-[10px] rounded-lg border border-zinc-800 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-300 whitespace-nowrap font-medium pointer-events-none z-20 shadow-xl">
                    Repositorio Privado
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-zinc-800 rotate-45" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menú de Proyectos (Izquierda) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 order-1 lg:order-1">
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`group flex items-center justify-between py-6 border-t border-zinc-900 text-left transition-all duration-300 ${
                  activeIdx === i ? "border-zinc-700" : "hover:border-zinc-800"
                }`}
              >
                <span
                  className={`text-lg transition-all duration-300 ${
                    activeIdx === i
                      ? "text-white translate-x-1"
                      : "text-zinc-600 group-hover:text-zinc-400"
                  }`}
                >
                  {project.title}
                </span>

                {activeIdx === i && (
                  <motion.span
                    layoutId="active-indicator"
                    className="text-[12px] text-zinc-500 font-mono"
                  >
                    SELECCIONADO
                  </motion.span>
                )}
              </button>
            ))}
            <div className="border-t border-zinc-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
