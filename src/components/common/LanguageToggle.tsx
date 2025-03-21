import { useLanguageStore } from '../../store/language';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="px-3 py-1 rounded-full bg-accent-light dark:bg-accent-dark text-white hover:opacity-90 transition-opacity"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}

export default LanguageToggle;