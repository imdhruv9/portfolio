import { FaHeart } from 'react-icons/fa'
import { personalInfo } from '../data/content'

/**
 * Footer Component
 * Site footer with copyright and attribution
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-primary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-300">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-sm text-gray-300 flex items-center gap-2">
            Built with <FaHeart className="text-red-400" size={14} /> using React & Tailwind CSS
          </p>

          {/* Quick Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <a
              href="#hero"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Back to top button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer


