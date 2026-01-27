"use client";

export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
      <p>© {new Date().getFullYear()} Josue RZS</p>
      <div className="flex gap-6">
        <a href="https://github.com/JosueRZS" target="_blank" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/josue-ruiz-0952001b3/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="https://www.instagram.com/josue_rzs/" target="_blank" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </footer>
  );
}