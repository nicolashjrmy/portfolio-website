"use client"

import type React from "react"

import { Mail, Github, Send, User, MessageSquare } from "lucide-react"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const thisYear = new Date().getFullYear()

export default function Contact() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
      const body = encodeURIComponent(
        `Hi Nicolash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`,
      )

      // Open email client
      window.location.href = `mailto:nicolashjeremy17@gmail.com?subject=${subject}&body=${body}`

      // Reset form and show success
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus("success")

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen w-full py-20 relative overflow-hidden">
        <div className="relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Let&apos;s Connect</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              Interested in backend engineering insights, collaboration opportunities, or just want to chat about
              technology? Let's start a conversation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contact Info */}
              <div
                className={`space-y-8 transition-all duration-1000 ease-out ${
                  sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 text-center">Direct Contact</h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:nicolashjeremy17@gmail.com"
                      className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Email</p>
                        <p className="text-black font-semibold group-hover:text-slate-700">
                          nicolashjeremy17@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-black mb-6 text-center">Connect on Social</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/nicolashjrmy"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <FaInstagram size={20} className="text-white" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/nicolashjrmy"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <FaLinkedinIn size={20} className="text-white" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.github.com/nicolashjrmy"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={`transition-all duration-1000 ease-out ${
                  formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors bg-white/50"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors bg-white/50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors bg-white/50"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors bg-white/50 resize-none"
                        placeholder="Tell me about your project, idea, or just say hello..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate-600 to-slate-800 text-white py-4 px-6 rounded-lg hover:from-slate-700 hover:to-slate-900 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Opening Email...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {submitStatus === "success" && (
                      <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 font-medium">
                          Email client opened! Your message is ready to send.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium">
                          Something went wrong. Please try again or email directly.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-slate-200/50">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <span className="font-medium">© {thisYear} Nicolash Jeremy. All rights reserved.</span>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="font-medium">Backend Engineer</span>
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  <a href="#home" className="hover:text-slate-700 transition-colors font-medium">
                    Back to Top ↑
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
