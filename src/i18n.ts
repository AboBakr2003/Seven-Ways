import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enHome from './locales/en/home.json'
import arHome from './locales/ar/home.json'
import enAboutUs from './locales/en/about-us.json'
import arAboutUs from './locales/ar/about-us.json'
import enServicesAndProducts from './locales/en/services&products.json'
import arServicesAndProducts from './locales/ar/services&products.json'
import enNavbar from './locales/en/navbar.json'
import arNavbar from './locales/ar/navbar.json'
import enFooter from './locales/en/footer.json'
import arFooter from './locales/ar/footer.json'
import enOurAdvantages from './locales/en/our-advantages.json'
import arOurAdvantages from './locales/ar/our-advantages.json'
import enContactUs from './locales/en/contact-us.json'
import arContactUs from './locales/ar/contact-us.json'

const resources = {
  en: {
    'ourAdvantages': enOurAdvantages,
    'navbar': enNavbar,
    'home': enHome,
    'footer': enFooter,
    'services&products': enServicesAndProducts,
    'about-us': enAboutUs,
    'contact-us': enContactUs,
    },
  ar: {
    'ourAdvantages': arOurAdvantages,
    'navbar': arNavbar,
    'home': arHome,
    'footer': arFooter,
    'services&products': arServicesAndProducts,
    'about-us': arAboutUs,
    'contact-us': arContactUs,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['navbar', 'home', 'ourAdvantages', 'footer', 'services&products', 'about-us', 'contact-us'],
    defaultNS: 'home',    
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
