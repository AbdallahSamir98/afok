// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define fallback language and supported languages
const fallbackLng = ['ar'];
const availableLanguages = ['en', 'ar'];

i18n
  .use(Backend) // Use i18next-http-backend instead of i18next-xhr-backend
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallbackLng[0], // Use the first element of fallbackLng as the fallback language
    whitelist: availableLanguages, // Specify supported languages
    detection: {
      checkWhitelist: true, // Enable checking of the whitelist
      // Optional: Configure how the language is detected
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    debug: true, // Enable debug mode to see logs in the console
    backend: {
      // Configure path to load translation files
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    react: {
      useSuspense: false, // Set to false if you do not use Suspense
    },
  });

export default i18n;
