import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import ContactForm from './ContactForm'
import { socialLinks } from '../data/content'

/**
 * Contact Component
 * Contact form and social links
 */
const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    SiLeetcode,
    SiGeeksforgeeks,
  }

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-text-secondary max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-display font-semibold text-text-primary mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon]
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                          <Icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                        <div>
                          <div className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {link.url.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
                  Quick Response
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, please reach out via email or LinkedIn.
                </p>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


