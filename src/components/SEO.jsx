import { useEffect } from 'react'

/**
 * SEO Component
 * Manages meta tags and page title dynamically
 */
const SEO = ({ title, description, image, url }) => {
  const defaultTitle = 'Dhruv - Full Stack Developer'
  const defaultDescription =
    'Dhruv - Full Stack Developer at Euphoric. Experienced in React, Spring Boot, PostgreSQL. Building scalable web applications.'
  const defaultImage = '/og-image.jpg'
  const defaultUrl = typeof window !== 'undefined' ? window.location.href : ''

  const seoTitle = title || defaultTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage
  const seoUrl = url || defaultUrl

  useEffect(() => {
    document.title = seoTitle

    // Update meta tags
    const metaTags = [
      { name: 'description', content: seoDescription },
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoImage },
      { property: 'og:url', content: seoUrl },
      { property: 'twitter:title', content: seoTitle },
      { property: 'twitter:description', content: seoDescription },
      { property: 'twitter:image', content: seoImage },
    ]

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let meta = document.querySelector(selector)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (name) meta.setAttribute('name', name)
        if (property) meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    })
  }, [seoTitle, seoDescription, seoImage, seoUrl])

  return null
}

export default SEO


