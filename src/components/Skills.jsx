import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'
import { skills } from '../data/content'

/**
 * Skills Component
 * Display technical skills with futuristic hexagon cards
 */
const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, icon: FaCode, color: 'primary', gradient: 'from-primary-500 to-primary-600' },
    { title: 'Backend', skills: skills.backend, icon: FaServer, color: 'secondary', gradient: 'from-secondary-500 to-secondary-600' },
    { title: 'Database', skills: skills.database, icon: FaDatabase, color: 'primary', gradient: 'from-primary-600 to-secondary-500' },
    { title: 'DevOps & Tools', skills: skills.tools, icon: FaTools, color: 'secondary', gradient: 'from-secondary-600 to-accent-500' },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4"
            >
              Technical Arsenal
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-glow"
            />
          </div>

          {/* Skills Grid - Hexagon Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-glow overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    
                    {/* Category Title */}
                    <h3 className="relative text-lg font-display font-bold text-text-primary mb-4">
                      {category.title}
                    </h3>
                    
                    {/* Skills List */}
                    <div className="relative space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-text-secondary font-medium">{skill.name}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={isInView && skill.level >= (i + 1) * 20 ? { scale: 1 } : { scale: 0 }}
                                transition={{ 
                                  duration: 0.2, 
                                  delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 + i * 0.05 
                                }}
                                className={`w-2 h-2 rounded-full ${
                                  skill.level >= (i + 1) * 20 
                                    ? `bg-gradient-to-r ${category.gradient}` 
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-center text-lg font-semibold text-text-primary mb-6">Complete Tech Stack</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[...skills.frontend, ...skills.backend, ...skills.database, ...skills.tools].map(
                (tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.7 + index * 0.02,
                      type: 'spring',
                      stiffness: 200
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 text-text-primary text-sm font-medium rounded-full border border-primary-500/20 hover:border-primary-500 hover:shadow-glow transition-all cursor-default"
                  >
                    {tech.name}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


