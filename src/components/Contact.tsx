import { Mail, MessageCircle, Twitter, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-100">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-6 flex items-center justify-center">
          <span className="text-2xl">👨‍💻</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s stay in touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interested in backend engineering insights, collaboration opportunities, or just want to chat about
          technology? My inbox is always open.
        </p>
      </div>

      <div className="text-center space-y-6">
        <div className="flex justify-center space-x-6">
          <a href="mailto:alex@example.com" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <Mail size={20} />
            <span>alex@example.com</span>
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <MessageCircle size={18} className="text-gray-600" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Twitter size={18} className="text-gray-600" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Linkedin size={18} className="text-gray-600" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Github size={18} className="text-gray-600" />
          </a>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>I&apos;m Alex</span>
            <span>Senior Backend Engineer</span>
            <a href="#home" className="hover:text-gray-700">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
