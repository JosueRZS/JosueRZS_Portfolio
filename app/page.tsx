import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/section/Hero";
import GithubGraph from "@/components/section/GithubGraph";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Journey from "@/components/section/Journey";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-8 md:py-12 relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <GithubGraph />
        <Skills />
        <Journey />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
