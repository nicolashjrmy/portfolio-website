"use client"

import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import type { TimelineItemType } from "@/types"
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
      logo: "/gct.png",
      color: "from-green-400 to-teal-500",
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
      logo: "/ina.png",
      color: "from-red-400 to-pink-500",
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
      logo: "/ub.png",
      color: "from-green-400 to-teal-500",
      achievements: ["GPA: 3.67/4.0", "Research in Embedded Machine Learning", "Graduating cum laude"],
    },
    {
      title: "High School",
      company: "SMAN 70 Jakarta",
      location: "Jakarta, ID",
      period: "2016 - 2019",
      type: "education",
      logo: "/70.png",
      color: "from-purple-400 to-blue-500",
      achievements: ["Avg grade: 88.10", "Active in Student Council and Extraculicullar Activities"],
    },
  ]

  const TimelineItem = ({
    item,
    index,
    isLast,
    isVisible,
  }: { item: TimelineItemType; index: number; isLast: boolean; isVisible: boolean }) => (
    <div
      className={`relative flex items-start group mb-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-px h-20 bg-gradient-to-b from-slate-300 to-transparent"></div>
      )}

      {/* Timeline dot */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border border-slate-200 rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300">
          {item.logo ? (
            <Image
              src={item.logo || "/placeholder.svg"}
              alt={`${item.company} logo`}
              width={32}
              height={32}
              className="rounded"
            />
          ) : item.type === "work" ? (
            <Briefcase className="w-4 h-4 text-white" />
          ) : (
            <GraduationCap className="w-4 h-4 text-white" />
          )}
      </div>

      {/* Content */}
      <div className="ml-8 flex-1">
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-lg text-slate-700 font-semibold">{item.company}</p>
            </div>
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
              {item.period}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>
          <div className="space-y-4">
            {item.achievements.map((achievement: string, achievementIndex: number) => (
              <div key={achievementIndex} className="flex items-start space-x-3">
                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2 flex-shrink-0`}></div>
                <span className="text-base text-slate-600 leading-relaxed font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen w-full py-20 relative overflow-hidden">
      <div className="w-full min-h-screen flex flex-col justify-center">
        {/* Work Experience */}
        <div ref={workRef} className="mb-32 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Work Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              Building scalable backend systems at leading tech companies
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div
              className={`bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl transition-all duration-1000 ease-out ${
                workVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="grid lg:grid-cols-5 gap-0 min-h-items">
                {/* Left Sidebar - Job List */}
                <div className="lg:col-span-2 p-8 border-r border-slate-200/50 flex items-center justify-center">
                  <div className="space-y-4 w-full max-w-md">
                    {workExperience.map((job, index) => (
                      <div
                        key={job.id}
                        onClick={() => setSelectedJob(index)}
                        className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 items-center ${
                          selectedJob === index
                            ? "bg-slate-50 border border-slate-200 shadow-md"
                            : "hover:bg-slate-50/50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          {/* Company Logo */}
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center shadow-lg">
                            <Image
                              src={job.logo ?? "/default-logo.png"}
                              alt={`${job.company} logo`}
                              width={32}
                              height={32}
                              className="rounded"
                            />
                          </div>
                          {/* Job Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-black font-bold text-base truncate">{job.title}</h3>
                            <p className="text-slate-500 text-sm truncate">{job.company}</p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                              selectedJob === index ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Job Details */}
                <div className="lg:col-span-3 p-8">
                  <div className="h-full flex flex-col justify-center">
                    {/* Job Header */}
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-black mb-3">{selectedJobData.title}</h3>
                      <p className="text-slate-700 text-xl mb-4 font-semibold">{selectedJobData.company}</p>
                      <div className="flex items-center space-x-6 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedJobData.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedJobData.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Achievements */}
                    <div className="space-y-5">
                      {selectedJobData.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`flex items-start space-x-4 transition-all duration-500 ease-out ${
                            workVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                          }`}
                          style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${selectedJobData.color} rounded-full mt-3 flex-shrink-0`}></div>
                          <p className="text-slate-600 text-base leading-relaxed font-medium">{achievement}</p>
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
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              educationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Education</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              Computer science foundation with focus on distributed systems
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
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
      </div>
    </section>
  )
}