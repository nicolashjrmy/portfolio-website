import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <Navigation />
      <Hero />
      {/* <main className="bg-white"> */}
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* </main> */}
    </div>
  )
}
