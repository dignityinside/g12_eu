import { createI18n } from 'vue-i18n';
import ru from '@i18n/messages/ru';
import de from '@i18n/messages/de';
import en from '@i18n/messages/en';
import ua from '@i18n/messages/ua';

export const language = {
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'de',
  messages: {
    ru,
    de,
    en,
    ua,
  },
};

const i18n = createI18n(language);

export default {
  install: (app) => {
    app.use(i18n);
  },
};
