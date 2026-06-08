"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Actividad GitHub
        </h2>
        <div className="h-px grow bg-zinc-900" />
      </div>

      <div className="w-full flex flex-col items-center justify-center relative min-h-45 rounded-2xl bg-zinc-900/10 border border-zinc-900/50 p-8">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black-deep/50 backdrop-blur-[2px] z-10 rounded-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-zinc-800 border-t-zinc-400 rounded-full"
            />
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase animate-pulse">
              Sincronizando...
            </p>
          </div>
        )}

        {mounted && (
          <div
            className={`w-full flex justify-center transition-all duration-1000 ${loading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
          >
            <GitHubCalendar
              username="JosueRZS"
              showWeekdayLabels
              transformData={(data) => {
                if (loading) setTimeout(() => setLoading(false), 300);
                return data;
              }}
              labels={{
                totalCount: "{{count}} contribuciones en el último año",
              }}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              fontSize={15}
              blockSize={16}
              blockMargin={5}
            />
          </div>
        )}
      </div>
    </section>
  );
}
