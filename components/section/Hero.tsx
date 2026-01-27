"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase">
              Disponible para proyectos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            Josue Ruiz <br />
            <span className="text-zinc-500">Software Developer</span>
          </h1>

          <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 font-normal">
            Desarrollador ecuatoriano enfocado en construir aplicaciones web
            útiles y confiables.
          </p>

          <div className="flex justify-between md:justify-start md:gap-x-10 gap-y-4 text-[14px] sm:text-sm font-mono uppercase tracking-widest w-full">
            <a
              href="https://github.com/JosueRZS"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              [ GitHub ]
            </a>
            <a
              href="https://www.linkedin.com/in/josue-ruiz-0952001b3/"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              [ LinkedIn ]
            </a>
            <a
              href="mailto:contact@josuerzs.dev"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              [ Contacto ]
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block w-full max-w-180"
        >
          <DotLottieReact src="/animations/development.lottie" loop autoplay />
        </motion.div>
      </div>
    </section>
  );
}
