import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { personalInfo, socialLinks } from '../data/content'

/**
 * Hero Component
 * Landing section with introduction and call-to-action
 */
const Hero = () => {
  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    SiLeetcode,
    SiGeeksforgeeks,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 hex-pattern"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Scan line effect */}
      <div className="scan-line absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Profile Section */}
            <motion.div 
              variants={itemVariants}
              className="flex-shrink-0 relative"
            >
              {/* Profile Picture with decorative elements */}
              <div className="relative">
                {/* Decorative ring behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full opacity-20 blur-2xl"></div>
                
                {/* Profile picture */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-glow-lg relative bg-gradient-to-br from-primary-500 to-secondary-500">
                    <img 
                      src={personalInfo.profileImage || '/profile.jpg'} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-full shadow-glow-lg border-2 border-primary-500"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-sm font-semibold text-text-primary">Available</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting Badge */}
              <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
                <span className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-medium border border-primary-500/30 backdrop-blur-sm">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse shadow-glow" />
                  Welcome to my digital space
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div variants={itemVariants} className="mb-6">
                <p className="text-2xl sm:text-3xl text-primary-600 font-semibold mb-2">
                  {personalInfo.title}
                </p>
                <p className="text-base text-text-secondary">
                  {personalInfo.role}
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="relative">
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {personalInfo.heroText}
                  </p>
                  {/* Animated underline */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">1+</div>
                  <div className="text-sm text-text-secondary">Years Exp.</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-secondary-600">2</div>
                  <div className="text-sm text-text-secondary">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent-500">10+</div>
                  <div className="text-sm text-text-secondary">Technologies</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <a
                  href="#projects"
                  className="group px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-xl transition-all shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white text-primary-600 font-medium rounded-xl border-2 border-primary-500/50 hover:border-primary-500 hover:bg-primary-50 hover:shadow-glow transition-all transform hover:-translate-y-1"
                >
                  Let's Connect
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-text-secondary hover:text-primary-600 rounded-xl border border-primary-500/20 hover:border-primary-500 transition-all transform hover:-translate-y-1 hover:scale-110 hover:shadow-glow"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-primary-500 rounded-full shadow-glow"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


