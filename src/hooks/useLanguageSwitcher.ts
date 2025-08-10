import { create } from 'zustand'
import i18n from '../i18n'

interface LanguageState {
  isEnglish: boolean
  toggleLanguage: () => void
  setLanguage: (lang: 'en' | 'ar') => void
}

const savedLang = localStorage.getItem('lang') as 'en' | 'ar' | null
const initialLang = savedLang || i18n.language || 'en'

export const useLanguageStore = create<LanguageState>((set, get) => ({
  isEnglish: initialLang === 'en',

  toggleLanguage: () => {
    const current = get().isEnglish
    const newLang = current ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
    set({ isEnglish: !current })
  },

  setLanguage: (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    set({ isEnglish: lang === 'en' })
  }
}))
