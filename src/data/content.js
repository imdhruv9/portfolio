// Portfolio Content - Edit this file to update site content
export const personalInfo = {
  name: 'Dhruv Kumar',
  role: 'Software Engineer at Euphoric thought Technologies',
  title: 'Full Stack Developer',
  experience: '1 year',
  tagline: 'Full Stack Developer passionate about building scalable, cloud-ready web applications.',
  heroText: "Building the future, one line of code at a time.",
  profileImage: '/1763662289936.jpg',
  aboutText: "I build modern, maintainable web applications using React on the frontend and Spring Boot on the backend. I enjoy solving problems end-to-end — from designing APIs and database schemas to building delightful user interfaces.",
  careerGoal: "I aim to grow as a full-stack engineer, build cloud-native systems, and contribute to open-source and innovative digital products.",
}

export const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 85 },
  ],
  backend: [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 88 },
    { name: 'Play Framework', level: 82 },
    { name: 'Node.js', level: 80 }
  ],
  database: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 82 },
    { name: 'MongoDB', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 88 },
    { name: 'Jenkins', level: 75 },
    { name: 'AWS', level: 78 },
    { name: 'Docker', level: 80 },
  ],
}

export const projects = [
  {
    id: 1,
    name: 'Soultrps',
    tagline: 'Digital Wellness Marketplace',
    shortDescription: 'Soultrps is a digital wellness marketplace connecting corporate organizations with a wide range of wellness service providers. It enables companies to purchase and manage employee wellness programs — including health insurance, fitness plans, and mental wellness sessions — all in one platform. Soultrps also empowers independent wellness professionals to offer services directly to corporate clients.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL'],
    keyFeatures: [
      'Enterprise SSO integration and secure authentication flows',
      'Scalable REST APIs with Spring Boot and PostgreSQL',
      'Admin and provider dashboards for program management',
      'Role-based access control and auditing',
    ],
    github: 'http://github.com/dhruv-soultrps',
    demo: 'http://example-soultrps.com',
    image: '/project-soultrps.jpg',
    screenshots: [
      '/project-soultrps-1.jpg',
      '/project-soultrps-2.jpg',
      '/project-soultrps-3.jpg',
    ],
  },
  {
    id: 2,
    name: 'Printing Pro',
    tagline: 'Product Showcase & Ordering Platform',
    shortDescription: 'Printing Pro is a product showcase and ordering information site where users can explore a wide range of printing products, calculate prices, contact the vendor for custom orders, and admins can perform CRUD operations on products.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL'],
    keyFeatures: [
      'Product catalog with pricing calculator',
      'Contact/request form for leads',
      'Admin panel for product CRUD',
      'Responsive product cards and search/filter',
    ],
    github: 'http://github.com/dhruv-printingpro',
    demo: 'http://sjslfjl.com',
    image: '/project-printing-pro.jpg',
    screenshots: [
      '/project-printing-pro-1.jpg',
      '/project-printing-pro-2.jpg',
      '/project-printing-pro-3.jpg',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer (Full Stack Developer)',
    company: 'Euphoric',
    duration: '1 year',
    current: true,
    achievements: [
      'Developed scalable backend APIs using Spring Boot and PostgreSQL.',
      'Implemented user authentication and SSO integrations.',
      'Collaborated on frontend development using React and REST APIs.',
      'Participated in design discussions and code reviews.',
    ],
  },
]

export const education = [
  {
    degree: 'MCA',
    institution: 'Uttarakhand Technical University',
    location: 'Dehradun',
    year: 'Recent',
  },
  {
    degree: 'B.Sc. (Hons) Mathematics',
    institution: 'Patliputra University',
    location: 'Patna',
    year: '',
  },
  {
    degree: '12th',
    institution: 'Sir G D Patliputra High School',
    location: 'Patna',
    year: '',
  },
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/dhruv',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dhruv',
    icon: 'FaLinkedin',
  },
  {
    name: 'Email',
    url: 'mailto:imdhruv@zohomail.in',
    icon: 'FaEnvelope',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/dhruv',
    icon: 'SiLeetcode',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://auth.geeksforgeeks.org/user/dhruv',
    icon: 'SiGeeksforgeeks',
  },
]


