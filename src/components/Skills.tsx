import { Database, Server, Cloud, Code, Shield, Zap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: ["Node.js", "Python", "Go", "TypeScript", "Express.js", "FastAPI", "Gin"],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-green-600" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Elasticsearch", "DynamoDB"],
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Server className="w-8 h-8 text-purple-600" />,
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx"],
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      skills: ["AWS", "Google Cloud", "Azure", "Vercel", "DigitalOcean", "Heroku"],
    },
    {
      title: "Message Queues & Streaming",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      skills: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "AWS SQS", "Apache Pulsar"],
    },
    {
      title: "Security & Monitoring",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      skills: ["OAuth 2.0", "JWT", "Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
  ]

  return (
    <section id="skills" className="py-16 border-t border-gray-100">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use to build robust, scalable backend systems
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg hover:bg-gray-100 transition-colors cursor-default hover:scale-105 transform duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Currently exploring: Rust, WebAssembly, Event Sourcing, and Advanced Kubernetes patterns
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:shadow-md transition-shadow">
              🦀 Rust
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:shadow-md transition-shadow">
              ⚡ WebAssembly
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:shadow-md transition-shadow">
              📊 Event Sourcing
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
