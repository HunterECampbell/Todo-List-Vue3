import { createI18n } from 'vue-i18n';

// i18n Locales
import en from '@/locales/en.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  messages: { en },
});

export default i18n;
