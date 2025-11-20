import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectCard from '../components/ProjectCard'

const mockProject = {
  id: 1,
  name: 'Test Project',
  tagline: 'A test project',
  shortDescription: 'This is a test project description',
  techStack: ['React', 'Node.js'],
  keyFeatures: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  github: 'https://github.com/test',
  demo: 'https://demo.test.com',
  image: '/test-image.jpg',
}

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('displays tech stack badges', () => {
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('displays key features', () => {
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    expect(screen.getByText(/Feature 1/)).toBeInTheDocument()
    expect(screen.getByText(/Feature 2/)).toBeInTheDocument()
    expect(screen.getByText(/Feature 3/)).toBeInTheDocument()
  })

  it('renders GitHub and demo links', () => {
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    const githubLink = screen.getByRole('link', { name: /view test project on github/i })
    const demoLink = screen.getByRole('link', { name: /view test project live demo/i })
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test')
    expect(demoLink).toHaveAttribute('href', 'https://demo.test.com')
  })

  it('calls onClick when card is clicked', async () => {
    const user = userEvent.setup()
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    const card = screen.getByRole('button', { name: /view details for test project/i })
    await user.click(card)
    
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('calls onClick when View Details button is clicked', async () => {
    const user = userEvent.setup()
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    const viewDetailsButton = screen.getByRole('button', { name: /view details/i })
    await user.click(viewDetailsButton)
    
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup()
    const mockOnClick = vi.fn()
    render(<ProjectCard project={mockProject} index={0} isInView={true} onClick={mockOnClick} />)
    
    const card = screen.getByRole('button', { name: /view details for test project/i })
    card.focus()
    await user.keyboard('{Enter}')
    
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})


