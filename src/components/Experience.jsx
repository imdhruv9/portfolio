import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FaBriefcase } from 'react-icons/fa'
import { experience } from '../data/content'

/**
 * Experience Component
 * Professional experience with achievements
 */
const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="experience" className="py-20 bg-surface">
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
              Professional Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-surface-dark" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <FaBriefcase className="text-white" size={16} />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ml-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full">
                        {exp.duration}
                      </span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-text-secondary">
                        <span className="text-primary-600 mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience


