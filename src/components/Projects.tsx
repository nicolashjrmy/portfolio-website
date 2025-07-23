"use client"

import Image from "next/image"
import { Github, Database, ReceiptText, Zap, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Projects() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation()

  const projects = [
    {
      title: "Expense Splitter App",
      description:
        "App that simplifies expense sharing among friends. Built with Node.js, Express, and mySQL in react-native",
      image: "/tripsplitter.png",
      technologies: ["Node.js", "mySQL", "react-native", "Express"],
      features: ["Real-time update and notification", "Authentication", "Still in development"],
      icon: <ReceiptText className="w-8 h-8 text-white" />,
      color: "from-green-400 to-teal-500",
      github: "https://github.com/nicolashjrmy/react-trip-app",
      demo: "https://github.com/nicolashjrmy/react-trip-app",
    },
    {
      title: "KerjApa",
      description: "Job portal that integrates with machine learning to match user skills with job vacancies",
      image: "/kerjapa.png?height=300&width=500",
      technologies: ["Python", "Torch", "Jupyter Notebook", "Figma"],
      features: ["Machine Learning", "Loss: 0.2760", "Accuracy: 0.8893"],
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-purple-400 to-blue-500",
      github: "https://github.com/nicolashjrmy/Capstone-Project-KerjApa-",
      demo: "https://www.figma.com/proto/73c3uhzEqSbm1ZVsH3cgBi/Untitled?node-id=3-3684&starting-point-node-id=3%3A2675&t=IIx7w6hSWccxzMtG-1",
    },
    {
      title: "Chatbot with Voice Recognition",
      description: "Real-time voice recognition (Indonesian) chatbot for Brawijaya Univeristy FAQs",
      image: "/chatbot.jpeg",
      technologies: ["Python", "Torch", "Raspberry Pi"],
      features: ["Real-time processing", "Closed domain chatbot", "Low-cost requirement"],
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-red-400 to-pink-500", 
      github: "https://github.com/nicolashjrmy/voice-recognition-chatbot-raspberrypi",
      demo: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/13042"
    },

  ]

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen w-full py-20 relative overflow-hidden">
        <div className="relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Projects</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Scalable systems and APIs built with modern technologies
            </p>
          </div>

          <div ref={projectsRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ease-out ${
                    projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2">
                    {/* Project image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=500"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 opacity-20`}></div>

                      {/* Floating icon */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 transition-transform duration-300`}
                        >
                          {project.icon}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="absolute top-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          target="_blank"
                          href={project.github}
                          className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-black/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        <a
                          target="_blank"
                          href={project.demo}
                          className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-black/30 transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-slate-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colors font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                            <span className="text-sm text-slate-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
