import { Metadata } from "next";

export const siteConfig = {
  name: "Josue Ruiz",
  title: "Josue RZS | Software Developer & Freelancer",
  description:
    "Desarrollador Full Stack de Ambato, Ecuador. Especializado en React, Next.js, PHP, Flutter y desarrollo de aplicaciones web y móviles. Construyo soluciones digitales modernas para empresas ecuatorianas e internacionales.",
  url: "https://josuerzs.dev",
  ogImage: "https://josuerzs.dev/images/me.jpg", // Temporal: Cambiar por og-image.jpg después
  keywords: [
    "Josue Ruiz",
    "JosueRZS",
    // Keywords principales - Ambato
    "Desarrollador Web Ambato",
    "Programador Ambato",
    "Programador Ambateño",
    "Desarrolladores Ambato",
    "Software Developer Ambato",
    "Programador Ambato Ecuador",
    "Freelancer Ambato",
    "Programador Freelance Ambato",
    "Full Stack Developer Ambato",
    // Keywords Ecuador
    "Desarrollador Ecuador",
    "Freelancer Ecuador",
    "Freelancer Ecuatoriano",
    "Programador Ecuador",
    "Desarrollador Freelance Ecuador",
    "Desarrollo Web Ecuador",
    // Keywords Tungurahua
    "Desarrollador Tungurahua",
    "Programador Tungurahua",
    // Stack tecnológico + ubicación
    "React Developer Ambato",
    "Next.js Developer Ecuador",
    "PHP Developer Ambato",
    "Flutter Developer Ecuador",
    "Node.js Developer Ecuador",
    "WordPress Developer Ambato",
    "Ecommerce Developer Ecuador",
    "Azure Developer Ecuador",
    // Servicios específicos
    "Desarrollo de Apps Móviles Ambato",
    "Desarrollo de Aplicaciones Web Ecuador",
    "Diseño Web Ambato",
    "Páginas Web Ambato",
    "Tiendas Online Ecuador",
    // General
    "TypeScript Developer",
    "MySQL PostgreSQL Developer",
    "Vercel Next.js",
    "Portfolio Desarrollador Ecuador",
  ],
  author: {
    name: "Josue Ruiz",
    email: "josuerzsdev@gmail.com",
    url: "https://josuerzs.dev",
  },
  links: {
    github: "https://github.com/JosueRZS",
    linkedin: "https://www.linkedin.com/in/josue-ruiz-0952001b3/",
    instagram: "https://www.instagram.com/josue_rzs/",
  },
};

export function generateMetadata(
  title?: string,
  description?: string,
  path: string = "",
): Metadata {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const siteDescription = description || siteConfig.description;
  const siteUrl = `${siteConfig.url}${path}`;

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: siteUrl,
    },

    openGraph: {
      type: "website",
      locale: "es_ES",
      url: siteUrl,
      title: siteTitle,
      description: siteDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [siteConfig.ogImage],
      // creator: "@josueruizdev", // Descomentar cuando tengas cuenta de Twitter/X
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    verification: {
      google: "tu-google-verification-code", // Agregar después de verificar en Google Search Console
      //yandex: "tu-yandex-verification-code",
      //bing: "tu-bing-verification-code",
    },
  };
}
