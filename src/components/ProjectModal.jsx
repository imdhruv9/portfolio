import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/**
 * ProjectModal Component
 * Modal with extended project details and screenshots
 */
const ProjectModal = ({ project, onClose }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-surface-dark p-6 flex items-start justify-between z-10">
            <div>
              <h2 id="modal-title" className="text-2xl font-display font-bold text-text-primary mb-1">
                {project.name}
              </h2>
              <p className="text-text-secondary">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">About</h3>
              <p className="text-text-secondary leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-text-secondary">
                    <span className="text-primary-600 mr-3 mt-1 text-xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden bg-surface aspect-video"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-surface-dark">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-text-primary text-white rounded-lg hover:bg-text-secondary transition-colors"
              >
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <FaExternalLinkAlt size={18} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal


