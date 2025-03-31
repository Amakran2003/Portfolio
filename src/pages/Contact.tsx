import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const { language } = useLanguageStore();
  const t = translations[language].contact;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins text-4xl font-bold mb-8 text-center">{t.title}</h1>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;