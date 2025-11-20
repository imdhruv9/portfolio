import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/content'

/**
 * Education Component
 * Academic background and qualifications
 */
const Education = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="education" className="py-20 bg-white">
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
              Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <FaGraduationCap className="text-primary-600" size={24} />
                </div>

                {/* Degree */}
                <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-text-secondary text-sm mb-1">{edu.institution}</p>
                
                {/* Location */}
                <p className="text-text-light text-sm">{edu.location}</p>

                {/* Year */}
                {edu.year && (
                  <div className="mt-4 pt-4 border-t border-surface-dark">
                    <span className="text-sm text-text-secondary">{edu.year}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education


