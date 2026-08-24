import { createI18n } from 'vue-i18n';
import ru from '@i18n/messages/ru';
import de from '@i18n/messages/de';
import en from '@i18n/messages/en';
import ua from '@i18n/messages/ua';
import be from '@i18n/messages/be';

const supportedLocales = ['de', 'en', 'ru', 'uk', 'be'];
const storedLocale = localStorage.getItem('locale');
const normalizedStoredLocale = storedLocale === 'ua' ? 'uk' : storedLocale;
const browserLocale = navigator.language?.split('-')[0];
const initialLocale = supportedLocales.includes(normalizedStoredLocale)
  ? normalizedStoredLocale
  : supportedLocales.includes(browserLocale)
    ? browserLocale
    : 'de';

if (storedLocale === 'ua') {
  localStorage.setItem('locale', 'uk');
}

export const language = {
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'de',
  messages: {
    ru,
    de,
    en,
    uk: ua,
    be,
  },
};

const i18n = createI18n(language);

export default {
  install: (app) => {
    app.use(i18n);
  },
};
