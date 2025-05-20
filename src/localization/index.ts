import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/english/common.json';
import de from './locales/german/common.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
