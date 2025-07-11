import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
