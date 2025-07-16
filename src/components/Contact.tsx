import { Mail, Github } from "lucide-react"
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa6'

const thisYear = new Date().getFullYear()

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
            <span>nicolashjeremy17@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            target="_blank"
            href="https://www.instagram.com/nicolashjrmy"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaInstagram size={18} className="text-gray-600" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedIn.com/in/nicolashjrmy"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaLinkedinIn size={18} className="text-gray-600" />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/nicolashjrmy"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Github size={18} className="text-gray-600" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>© {thisYear} Nicolash Jeremy. All rights reserved.</span>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Backend Engineer</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <a href="#home" className="hover:text-gray-700">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
