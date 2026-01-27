"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Trayectoria" },
  { href: "#projects", label: "Proyectos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <header className="relative flex items-center justify-between mb-24 px-2 z-50">
      <Link
        href="/"
        className="text-white font-mono font-medium tracking-tighter text-xl z-50"
      >
        &lt; Josue RZS /&gt;
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="mailto:contact@josuerzs.dev"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          Contacto
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 md:hidden z-50 p-2"
        aria-label="Menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-zinc-300 rounded-full"
        />
        <motion.div
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="w-6 h-0.5 bg-zinc-300 rounded-full"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-zinc-300 rounded-full"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {links.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-3xl font-bold text-neutral-400 hover:text-white transition-colors tracking-tighter"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
            >
              <a
                href="mailto:contact@josuerzs.dev"
                onClick={toggleMenu}
                className="text-3xl font-bold text-neutral-400 hover:text-white transition-colors tracking-tighter"
              >
                Contacto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
