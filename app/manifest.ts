import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Josue Ruiz - Software Developer",
    short_name: "Josue RZS",
    description:
      "Desarrollador Full Stack de Ambato, Ecuador. Especializado en React, Next.js, PHP y Flutter. Portfolio de proyectos web y móviles.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#10b981",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "lifestyle"],
    lang: "es-EC",
    dir: "ltr",
    scope: "/",
  };
}
