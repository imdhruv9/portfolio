# Contributing to Your Portfolio

Thank you for your interest in customizing this portfolio! This guide will help you understand how to modify and extend the portfolio for your needs.

## 🎯 Quick Start for Customization

### 1. Update Personal Information

Edit `src/data/content.js`:

```javascript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  title: 'Your Title',
  // ... update all fields
}
```

### 2. Add/Update Projects

```javascript
export const projects = [
  {
    id: 1,
    name: 'Your Project',
    tagline: 'Short description',
    shortDescription: 'Longer description...',
    techStack: ['React', 'Node.js'],
    keyFeatures: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/...',
    demo: 'https://...',
    image: '/project-image.jpg',
    screenshots: ['/screenshot1.jpg'],
  },
]
```

### 3. Update Skills

Adjust skill levels (0-100):

```javascript
export const skills = {
  frontend: [
    { name: 'React', level: 90 },
    // Add more skills
  ],
}
```

### 4. Replace Images

1. Add your images to `public/` folder
2. Update paths in `src/data/content.js`
3. Recommended formats:
   - Projects: JPG/PNG (800x600px)
   - Screenshots: JPG/PNG (1200x800px)
   - Optimize with: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

## 🎨 Customizing Styling

### Color Theme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#your-color', // Main brand color
  },
  // Update other colors
}
```

### Fonts

1. Update font imports in `index.html`
2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Animations

Edit animation speeds in component files or disable in `tailwind.config.js`.

## 🧩 Adding New Sections

### Example: Adding a "Certifications" Section

1. **Create component** (`src/components/Certifications.jsx`):

```javascript
import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  
  return (
    <section id="certifications" className="py-20 bg-white">
      {/* Your content */}
    </section>
  )
}

export default Certifications
```

2. **Add data** to `src/data/content.js`:

```javascript
export const certifications = [
  {
    name: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: '2023',
  },
]
```

3. **Import and use** in `src/App.jsx`:

```javascript
import Certifications from './components/Certifications'

// Add in JSX
<Certifications />
```

4. **Update navigation** in `src/components/Header.jsx`:

```javascript
const navItems = [
  // ... existing items
  { name: 'Certifications', href: '#certifications' },
]
```

## 🧪 Testing Your Changes

### Run Tests

```bash
npm run test
```

### Test Locally

```bash
npm run dev
# Open http://localhost:5173
```

### Test Production Build

```bash
npm run build
npm run preview
```

### Test Responsiveness

- Use Chrome DevTools Device Toolbar
- Test on actual mobile devices
- Check tablets, desktop, and large screens

## 📱 Responsive Design Guidelines

### Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)

### Best Practices

1. Design mobile-first
2. Test all breakpoints
3. Ensure touch targets are 44x44px minimum
4. Use relative units (rem, %, vh/vw)

## ♿ Accessibility Guidelines

### When Adding Content

1. **Images**: Always add alt text
   ```jsx
   <img src="..." alt="Descriptive text" />
   ```

2. **Links**: Make link text descriptive
   ```jsx
   <a href="...">View Project Details</a> // Good
   <a href="...">Click here</a> // Bad
   ```

3. **Forms**: Label all inputs
   ```jsx
   <label htmlFor="name">Name</label>
   <input id="name" name="name" />
   ```

4. **Buttons**: Use semantic HTML
   ```jsx
   <button type="submit">Submit</button> // Good
   <div onClick={...}>Submit</div> // Bad
   ```

### Testing Accessibility

- Keyboard navigation (Tab, Enter, Escape)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast checker
- Run Lighthouse audit

## 🐛 Debugging

### Common Issues

**Issue**: Changes not showing

```bash
# Clear cache and restart
# Windows
rd /s /q node_modules .vite
npm install
npm run dev

# macOS/Linux
rm -rf node_modules .vite
npm install
npm run dev
```

**Issue**: Build errors

```bash
# Check for linting errors
npm run lint

# Check for test failures
npm run test
```

**Issue**: Images not loading

- Check file path: Use `/image.jpg` not `./image.jpg`
- Ensure images are in `public/` folder
- Check file name matches exactly (case-sensitive)

## 📝 Code Style

### JavaScript/JSX

- Use functional components
- Use hooks (useState, useEffect, etc.)
- Keep components small and focused
- Add comments for complex logic

### CSS/Tailwind

- Use Tailwind utility classes
- Group related classes
- Use responsive modifiers (sm:, md:, lg:)
- Extract repeated patterns into components

### File Naming

- Components: PascalCase (e.g., `MyComponent.jsx`)
- Utilities: camelCase (e.g., `useMyHook.js`)
- Data files: camelCase (e.g., `content.js`)

## 🚀 Performance Tips

### Optimizing Images

```bash
# Use modern formats (WebP)
# Compress images before adding
# Use appropriate dimensions
# Add loading="lazy" for images below fold
```

### Code Splitting

Already configured! Framer Motion and React are split into separate chunks.

### Lighthouse Scores

Aim for:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ Getting Help

If you encounter issues:

1. Check the console for errors
2. Review this guide
3. Check component documentation
4. Search existing issues
5. Create a detailed issue report

## 📄 License

Feel free to use this portfolio as a template for your own portfolio. Customize it to match your personal brand!

---

Happy coding! 🎉

