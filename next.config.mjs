// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Mejorar SEO y rendimiento
  poweredByHeader: false, // Eliminar header X-Powered-By
  compress: true, // Habilitar compresión gzip
  generateEtags: true, // Generar ETags para cache
};

export default nextConfig;
  