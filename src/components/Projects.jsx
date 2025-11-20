import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/content'

/**
 * Projects Component
 * Displays portfolio projects with filtering capability
 */
const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  // Get unique tech stack items for filter
  const allTech = [...new Set(projects.flatMap((p) => p.techStack))]
  const filters = ['all', ...allTech]

  // Filter projects based on selected tech
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.techStack.includes(filter))

  return (
    <section id="projects" className="py-20 bg-white">
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
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            role="tablist"
            aria-label="Project filters"
          >
            {filters.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tech
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-surface-dark'
                }`}
                role="tab"
                aria-selected={filter === tech}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No projects found with this technology.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects


