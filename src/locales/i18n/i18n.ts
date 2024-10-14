import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from '../languages';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
  .then(r => r);

export default i18n;
