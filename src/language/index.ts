import i18n from 'i18next'
import enUsTrans from './modules/en'
import twCnTrans from './modules/tw'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enUsTrans
    },
    tw: {
      translation: twCnTrans
    }
  },
  // 選擇默認語言，選擇內容為上述配置中的 key，即 en/tw
  fallbackLng: 'tw',
  debug: false,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
})

export default i18n
