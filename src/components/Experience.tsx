"use client"

import { Briefcase, GraduationCap, MapPin, Calendar} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {TimelineItemType} from "@/types"
import { useState } from "react" 
import Image from "next/image"

export default function Experience() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation()
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation()

    const [selectedJob, setSelectedJob] = useState(0)
    
    const workExperience = [
      {
      id: 0,
      title: "Backend Developer",
      company: "PT Green City Traffic",
      location: "Jakarta, ID",
      period: "Apr 2025 - Present",
      type: "work",
      logo: "/ddi.png",
      achievements: [
        "Led development of distributed microservices handling 10M+ requests/day",
        "Reduced API response time by 40% through database optimization",
        "Mentored 5 junior engineers and established code review standards",
      ],
    },
    {
      id: 1,
      title: "Software Engineer",
      company: "Digital Data Integrasi",
      location: "Jakarta, ID",
      period: "Jan 2024 - Jan 2025",
      type: "work",
      logo: "/ddi.png",
      color: "from-purple-400 to-blue-500",
      achievements: [
        "Built payment processing APIs serving 50+ countries",
        "Implemented fraud detection system reducing false positives by 25%",
        "Designed and deployed Kubernetes infrastructure for high availability",
      ],
    },
    {
      id: 2,
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
  const selectedJobData = workExperience[selectedJob]

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
        <div className="max-w-7xl mx-auto">
          <div
            className={`bg-white border border-gray-200 rounded-3xl shadow-lg p-8 transition-all duration-1000 ${
              workVisible ? "animate-scale-in animate-delay-300" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Sidebar - Job List */}
              <div className="lg:col-span-2 space-y-4">
                {workExperience.map((job, index) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(index)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedJob === index
                        ? "bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300"
                        : "bg-white hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Company Logo */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                      >
                        <Image src={job.logo ?? "/default-logo.png"} alt={`${job.company} logo`} width={24} height={24} />
                      </div>

                      {/* Job Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-black font-semibold text-sm truncate">{job.title}</h3>
                        <p className="text-gray-600 text-sm truncate">{job.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Panel - Job Details */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  {/* Job Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{selectedJobData.title}</h3>
                    <p className="text-gray-700 text-lg mb-3">{selectedJobData.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedJobData.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedJobData.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Achievements */}
                  <div className="space-y-4">
                    {selectedJobData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${selectedJobData.color} rounded-full mt-2 flex-shrink-0`}
                        ></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
