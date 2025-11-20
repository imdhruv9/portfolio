import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { personalInfo } from '../data/content'

/**
 * About Component
 * Professional summary and career goals
 */
const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-surface to-primary-50/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-glow"
            />
          </div>

          {/* About Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-500/20 cyber-border shadow-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-text-secondary leading-relaxed mb-6"
            >
              {personalInfo.aboutText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-4 border-primary-500 pl-6 py-2 relative"
            >
              <p className="text-base text-text-primary italic">
                {personalInfo.careerGoal}
              </p>
              <div className="absolute -left-1 top-0 w-2 h-2 bg-primary-500 rounded-full animate-pulse shadow-glow" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
            >
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-500/30 hover:border-primary-500 hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary-600 mb-1">1+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary-50 to-white rounded-lg border border-secondary-500/30 hover:border-secondary-500 hover:shadow-glow-purple transition-all">
                <div className="text-3xl font-bold text-secondary-600 mb-1">2</div>
                <div className="text-sm text-text-secondary">Major Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-500/30 hover:border-primary-500 hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


