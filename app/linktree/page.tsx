"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  {
    title: "Portafolio Principal",
    url: "/",
    icon: <FaGlobe />,
    description: "Mi sitio web personal y proyectos.",
  },
  {
    title: "GitHub",
    url: "https://github.com/JosueRZS",
    icon: <FaGithub />,
    description: "Mis repositorios e investigaciones.",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josue-ruiz-0952001b3/",
    icon: <FaLinkedin />,
    description: "Mi perfil profesional y red.",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/josue_rzs/",
    icon: <FaInstagram />,
    description: "Compartiendo un poco sobre mí.",
  },
];

export default function LinktreePage() {
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen bg-black-deep flex flex-col items-center justify-start md:justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-120">
        {/* Header Linktree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center overflow-hidden relative">
            {!imageError ? (
              <Image
                src="/images/me.jpg"
                alt="Josue Ruiz"
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-3xl font-bold text-white uppercase">
                JR
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
            Josue Ruiz
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Software Developer
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="space-y-4">
          {links.map((link, idx) => (
            <motion.a
              key={link.title}
              href={link.url}
              target={link.url.startsWith("/") ? "_self" : "_blank"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-900/50 hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl text-zinc-500 group-hover:text-white group-hover:border-zinc-700 transition-all">
                {link.icon}
              </div>
              <div className="grow min-w-0">
                <h3 className="text-[15px] font-bold text-zinc-200 group-hover:text-white mb-1">
                  {link.title}
                </h3>
                <p className="text-xs text-zinc-500 truncate">
                  {link.description}
                </p>
              </div>
              <FiArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Footer Linktree */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em]">
            © 2026 Josue RZS | Derechos reservados.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
