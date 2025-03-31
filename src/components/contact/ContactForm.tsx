import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguageStore } from '../../store/language';
import { translations } from '../../translations';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ContactForm = () => {
  const { language } = useLanguageStore();
  const t = translations[language].contact;
  
  // Form state
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : t.nameRequired || 'Name is required',
      email: formData.email ? (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : t.emailInvalid || 'Invalid email address'
      ) : t.emailRequired || 'Email is required',
      message: formData.message ? '' : t.messageRequired || 'Message is required'
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mldjwvpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 bg-green-100 dark:bg-green-900/20 rounded-lg text-center"
        >
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 dark:text-green-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">{t.thankYou || 'Thank you!'}</h3>
          <p>{t.messageSent || 'Your message has been sent. I will get back to you soon!'}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            {t.sendAnother || 'Send another message'}
          </button>
        </motion.div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500 dark:border-red-400' : 'dark:bg-gray-800 dark:border-gray-700'
              }`}
              disabled={status === 'submitting'}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500 dark:border-red-400' : 'dark:bg-gray-800 dark:border-gray-700'
              }`}
              disabled={status === 'submitting'}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t.message}
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? 'border-red-500 dark:border-red-400' : 'dark:bg-gray-800 dark:border-gray-700'
              }`}
              disabled={status === 'submitting'}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.message}</p>
            )}
          </div>
          
          {status === 'error' && (
            <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2">
              <AlertTriangle size={18} />
              <span>{t.errorMessage || 'Something went wrong. Please try again later.'}</span>
            </div>
          )}
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg ${
              status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transition-opacity'
            }`}
          >
            {status === 'submitting' ? (t.sending || 'Sending...') : t.send}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
