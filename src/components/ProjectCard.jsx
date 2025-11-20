import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/**
 * ProjectCard Component
 * Card displaying project summary with hover effects
 */
const ProjectCard = ({ project, index, isInView, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-surface rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`View details for ${project.name}`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Name & Tagline */}
        <h3 className="text-xl font-display font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-text-secondary mb-2">{project.tagline}</p>
        
        {/* Short Description */}
        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white text-text-primary text-xs font-medium rounded-full border border-surface-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features (First 3) */}
        <ul className="space-y-1 mb-4">
          {project.keyFeatures.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-sm text-text-secondary flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-surface-dark">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.name} on GitHub`}
          >
            <FaGithub size={18} />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.name} live demo`}
          >
            <FaExternalLinkAlt size={16} />
            <span>Live Demo</span>
          </a>
          <button
            className="ml-auto text-sm text-primary-600 font-medium hover:text-primary-700"
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard


