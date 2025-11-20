import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

/**
 * ContactForm Component
 * Contact form with client-side validation and state management
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation rules
  const validate = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 20) return 'Message must be at least 20 characters'
        return ''
      
      default:
        return ''
    }
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Validate on change if field was touched
    if (touched[name]) {
      const error = validate(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // Handle input blur
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validate(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field])
      if (error) newErrors[field] = error
    })

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true })
    setErrors(newErrors)

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return
    }

    // Simulate form submission
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Simulate success (in production, this would be an actual API call)
      // You can integrate with services like Formspree, EmailJS, or your own backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors.name && touched.name
                ? 'border-red-500 focus:ring-red-200'
                : 'border-surface-dark focus:ring-primary-200 focus:border-primary-500'
            }`}
            placeholder="Your name"
            aria-invalid={errors.name && touched.name ? 'true' : 'false'}
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
          />
          <AnimatePresence>
            {errors.name && touched.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <FaExclamationCircle size={14} />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors.email && touched.email
                ? 'border-red-500 focus:ring-red-200'
                : 'border-surface-dark focus:ring-primary-200 focus:border-primary-500'
            }`}
            placeholder="your.email@example.com"
            aria-invalid={errors.email && touched.email ? 'true' : 'false'}
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
          />
          <AnimatePresence>
            {errors.email && touched.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <FaExclamationCircle size={14} />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
              errors.message && touched.message
                ? 'border-red-500 focus:ring-red-200'
                : 'border-surface-dark focus:ring-primary-200 focus:border-primary-500'
            }`}
            placeholder="Your message (minimum 20 characters)..."
            aria-invalid={errors.message && touched.message ? 'true' : 'false'}
            aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
          />
          <div className="flex items-center justify-between mt-2">
            <AnimatePresence>
              {errors.message && touched.message && (
                <motion.p
                  id="message-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500 flex items-center gap-1"
                  role="alert"
                >
                  <FaExclamationCircle size={14} />
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
            <span className="text-xs text-text-light ml-auto">
              {formData.message.length} characters
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            isSubmitting
              ? 'bg-text-light cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane size={16} />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
            role="alert"
            aria-live="polite"
          >
            <FaCheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-green-800">Message sent successfully!</p>
              <p className="text-sm text-green-700 mt-1">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
            role="alert"
            aria-live="assertive"
          >
            <FaExclamationCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-red-800">Something went wrong</p>
              <p className="text-sm text-red-700 mt-1">
                Please try again later or reach out via email directly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactForm


