"use client"

import { Briefcase, GraduationCap, MapPin} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {TimelineItemType} from "@/types"

export default function Experience() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation()
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation()

  const workExperience = [
    {
      title: "Backend Developer",
      company: "PT Green City Traffic",
      location: "Jakarta, ID",
      period: "Apr 2025 - Present",
      type: "work",
      color: "from-orange-400 to-red-500",
      achievements: [
        "Led development of distributed microservices handling 10M+ requests/day",
        "Reduced API response time by 40% through database optimization",
        "Mentored 5 junior engineers and established code review standards",
      ],
    },
    {
      title: "Software Engineer",
      company: "Digital Data Integrasi",
      location: "Jakarta, ID",
      period: "Jan 2024 - Jan 2025",
      type: "work",
      color: "from-purple-400 to-blue-500",
      achievements: [
        "Built payment processing APIs serving 50+ countries",
        "Implemented fraud detection system reducing false positives by 25%",
        "Designed and deployed Kubernetes infrastructure for high availability",
      ],
    },
    {
      title: "Backend Developer",
      company: "INA Digital",
      location: "Jakarta, ID",
      period: "Jan 2024 - Dec 2024",
      type: "work",
      color: "from-green-400 to-teal-500",
      achievements: [
        "Developed e-commerce backend systems for 1M+ merchants",
        "Optimized database queries improving checkout speed by 30%",
        "Collaborated with frontend teams on GraphQL API design",
      ],
    },
  ]

  const education = [
    {
      title: "Bachelor of Computer Engineering",
      company: "Brawijaya University",
      location: "Malang, ID",
      period: "2019 - 2023",
      type: "education",
      color: "from-red-400 to-pink-500",
      achievements: ["GPA: 3.67/4.0", "Research in Embedded Machine Learning", "Graduating cum laude"],
    },
    {
      title: "High School",
      company: "SMAN 70 Jakarta",
      location: "Jakarta, ID",
      period: "2016 - 2019",
      type: "education",
      color: "from-blue-400 to-indigo-500",
      achievements: ["Avg grade: 88.10", "Active in Student Council and Extraculicullar Activities"],
    },
  ]

  const TimelineItem = ({
    item,
    index,
    isLast,
    isVisible,
  }: { item: TimelineItemType; index: number; isLast: boolean; isVisible: boolean }) => (
    <div className="relative flex items-start group mb-12">
      {/* Timeline line */}
      {!isLast && <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-gray-100"></div>}

      {/* Timeline dot */}
      <div
        className={`relative z-10 flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
          {item.type === "work" ? (
            <Briefcase className="w-5 h-5 text-white" />
          ) : (
            <GraduationCap className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="ml-8 flex-1">
        <div
          className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-lg text-gray-700 font-semibold">{item.company}</p>
            </div>
            <span
              className={`inline-block bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
            >
              {item.period}
            </span>
          </div>

          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            {item.achievements.map((achievement: string, achievementIndex: number) => (
              <div key={achievementIndex} className="flex items-start space-x-3">
                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2 flex-shrink-0`}></div>
                <span className="text-sm text-gray-600 leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-50 to-blue-50 rounded-full opacity-40 animate-float-delay"></div>

      {/* Work Experience */}
      <div ref={workRef} className="mb-24 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            PROFESSIONAL JOURNEY
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable backend systems at leading tech companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === workExperience.length - 1}
              isVisible={workVisible}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div ref={educationRef} className="relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            educationVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computer science foundation with focus on distributed systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === education.length - 1}
              isVisible={educationVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
