# Dhruv's Portfolio Website

A modern, responsive, and recruiter-ready single-page portfolio website built with React and Tailwind CSS. This portfolio showcases professional experience, projects, skills, education, and contact information with a focus on accessibility, SEO, and performance.

![Portfolio Preview](./public/og-image.jpg)

## 🚀 Features

- **Modern Tech Stack**: Built with React 18 and Vite for blazing-fast development
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Smooth Animations**: Powered by Framer Motion with `prefers-reduced-motion` support
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt included
- **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- **Form Validation**: Client-side contact form with inline validation
- **Project Filtering**: Filter projects by technology stack
- **Optimized Performance**: Code splitting, lazy loading, and optimized bundle size
- **Testing**: Unit tests with Vitest and React Testing Library
- **CI/CD Ready**: GitHub Actions workflow included

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── public/
│   ├── project-*.jpg           # Project placeholder images
│   ├── og-image.jpg            # Social sharing image
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # SEO sitemap
├── src/
│   ├── components/             # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── SEO.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── content.js          # Portfolio content (edit here!)
│   ├── tests/                  # Unit tests
│   │   ├── setup.js
│   │   ├── ContactForm.test.jsx
│   │   └── ProjectCard.test.jsx
│   ├── utils/
│   │   └── useInView.js        # Custom hook for scroll animations
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── .env.example                # Environment variables template
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── index.html                  # HTML template
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # You are here!
```

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Build Tools
- **Vite** - Next-generation frontend tooling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Testing & Quality
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

### CI/CD
- **GitHub Actions** - Continuous integration
- **Netlify/Vercel** - Deployment platforms (configured)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Windows Installation Commands

1. **Clone the repository** (or extract the ZIP file):
```powershell
# If using Git
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**:
```powershell
npm install
```

3. **Create environment file** (optional):
```powershell
# Copy the example environment file
copy .env.example .env

# Edit .env with your values (using notepad or any editor)
notepad .env
```

4. **Start development server**:
```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

### macOS/Linux Installation Commands

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env

# Start development server
npm run dev
```

## 📜 Available Scripts

| Command | Description | Windows Command |
|---------|-------------|-----------------|
| `npm run dev` | Start development server | `npm run dev` |
| `npm run build` | Build for production | `npm run build` |
| `npm run preview` | Preview production build | `npm run preview` |
| `npm run test` | Run unit tests | `npm run test` |
| `npm run lint` | Lint code with ESLint | `npm run lint` |
| `npm run format` | Format code with Prettier | `npm run format` |

## ✏️ Customizing Content

All portfolio content is centralized in `src/data/content.js`. Edit this file to update:

- Personal information
- Skills and proficiency levels
- Project details and links
- Work experience
- Education history
- Social media links

### Example: Adding a New Project

```javascript
// In src/data/content.js
export const projects = [
  {
    id: 3, // Increment the ID
    name: 'New Project Name',
    tagline: 'Short tagline',
    shortDescription: 'Detailed description...',
    techStack: ['React', 'Node.js'],
    keyFeatures: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
    image: '/project-new.jpg',
    screenshots: ['/project-new-1.jpg'],
  },
  // ... existing projects
]
```

### Example: Updating Skills

```javascript
// In src/data/content.js
export const skills = {
  frontend: [
    { name: 'HTML', level: 95 }, // Adjust level (0-100)
    { name: 'CSS', level: 90 },
    // Add more skills...
  ],
}
```

## 📦 Building for Production

### Build the Project (Windows)

```powershell
# Create production build
npm run build

# The build output will be in the 'dist' folder
# Preview the production build locally
npm run preview
```

### Build the Project (macOS/Linux)

```bash
npm run build
npm run preview
```

The optimized production files will be in the `dist/` directory.

## 🚀 Deployment

### Deploy to Netlify

#### Method 1: Netlify CLI (Recommended)

1. **Install Netlify CLI** (Windows):
```powershell
npm install -g netlify-cli
```

2. **Login to Netlify**:
```powershell
netlify login
```

3. **Initialize and deploy**:
```powershell
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Method 2: Drag and Drop

1. Build your project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to deploy

#### Method 3: GitHub Integration

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Deploy to Vercel

#### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (Windows):
```powershell
npm install -g vercel
```

2. **Login and deploy**:
```powershell
vercel login
vercel --prod
```

#### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Environment Variables for Deployment

When deploying, set these environment variables in your hosting platform:

- `VITE_SITE_URL` - Your site URL (e.g., `https://yourname.com`)
- `VITE_SITE_NAME` - Your site name
- `VITE_ANALYTICS_ID` - Google Analytics ID (optional)

**On Netlify**:
- Go to Site Settings → Build & Deploy → Environment
- Add variables

**On Vercel**:
- Go to Project Settings → Environment Variables
- Add variables

## ⚙️ GitHub Actions CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

1. Runs on push to `main` branch
2. Installs dependencies
3. Runs linter
4. Runs tests
5. Builds the project
6. Uploads build artifacts

### Setting Up GitHub Secrets

For automated deployment, add these secrets in GitHub:

**Repository Settings → Secrets and variables → Actions**

**For Netlify**:
- `NETLIFY_AUTH_TOKEN` - Get from Netlify User Settings → Applications
- `NETLIFY_SITE_ID` - Get from Netlify Site Settings → General

**For Vercel**:
- `VERCEL_TOKEN` - Get from Vercel Account Settings → Tokens
- `VERCEL_ORG_ID` - Get from Vercel Project Settings
- `VERCEL_PROJECT_ID` - Get from Vercel Project Settings

Then uncomment the relevant deployment job in `.github/workflows/deploy.yml`.

## 🧪 Running Tests

```powershell
# Run tests once
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## 🎨 Color Palette

The site uses a light theme inspired by Airbnb with generous whitespace:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#e74c60` | Main brand color, CTAs |
| Secondary | `#0ea5e9` | Accents, links |
| Accent | `#eab308` | Highlights |
| Surface | `#f9fafb` | Background |
| Text Primary | `#1f2937` | Main text |
| Text Secondary | `#6b7280` | Secondary text |

Edit `tailwind.config.js` to customize the color palette.

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Skip-to-main-content link
- Color contrast compliance (WCAG AA)
- `prefers-reduced-motion` support
- Alt text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Port already in use (Windows)

```powershell
# Find process using port 5173
netstat -ano | findstr :5173

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### Clear npm cache

```powershell
npm cache clean --force
rd /s /q node_modules
del package-lock.json
npm install
```

### Build errors

```powershell
# Delete build folder and rebuild
rd /s /q dist
npm run build
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **GitHub**: [https://github.com/dhruv](https://github.com/dhruv)
- **LinkedIn**: [https://linkedin.com/in/dhruv](https://linkedin.com/in/dhruv)
- **Email**: [dhruv@example.com](mailto:dhruv@example.com)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ by Dhruv**

