import Image from "next/image"
import { Github, Database, Server, Zap, ArrowUpRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Expense Splitter App",
      description:
        "App that simplifies expense sharing among friends. Built with Node.js, Express, and mySQL in react-native",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "mySQL", "react-native", "Express"],
      features: ["Real-time update and notification", "Authentication", "Still in development"],
      icon: <Server className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Analytics Engine",
      description: "High-throughput data processing system using Apache Kafka and ClickHouse for real-time analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Kafka", "ClickHouse", "Kubernetes"],
      features: ["1M+ events/sec", "Real-time processing", "Horizontal scaling"],
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-yellow-500 to-orange-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Multi-tenant SaaS Backend",
      description: "Scalable multi-tenant architecture with row-level security and automated database migrations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Go", "PostgreSQL", "Docker", "Terraform"],
      features: ["Multi-tenancy", "Auto-migrations", "Role-based access"],
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-500",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border border-gray-300 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            FEATURED WORK
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Backend{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scalable systems and APIs built with modern technologies
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Floating background card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-10`}
                ></div>

                <div className="relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  {/* Project image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>

                    {/* Floating icon */}
                    <div className="absolute top-6 left-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                      >
                        {project.icon}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute top-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.demo}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
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
