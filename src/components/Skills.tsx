"use client"

import { Database, Server, Cloud, Code, Shield, Zap, Cpu } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Skills() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: learningRef, isVisible: learningVisible } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Node.js", "Python", "Go", "TypeScript", "Express.js", "FastAPI", "Gin"],
    },  
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Elasticsearch", "DynamoDB"],
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx"],
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Google Cloud", "Azure", "Vercel", "DigitalOcean", "Heroku"],
    },
    {
      title: "Message Queues",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      skills: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "AWS SQS", "Apache Pulsar"],
    },
    {
      title: "Security & Monitoring",
      icon: <Shield className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: ["OAuth 2.0", "JWT", "Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">

      <div className="relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
           Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Tools and technologies I use to build robust backend systems
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-1000 hover:-translate-y-2 ${
                  sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <div
            ref={learningRef}
            className={`mt-16 transition-all duration-1000 ${
              learningVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Always Learning</h3>
                </div>

                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Currently exploring cutting-edge technologies and expanding my expertise
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {["🦀 Rust", "⚡ WebAssembly", "📊 Event Sourcing", "🔗 Blockchain", "🤖 AI/ML APIs"].map(
                    (tech, index) => (
                      <div
                        key={index}
                        className={`px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-500 cursor-default text-sm ${
                          learningVisible ? "animate-fade-in-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
