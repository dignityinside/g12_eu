import de from './messages/de.js';
import en from './messages/en.js';
import ru from './messages/ru.js';
import uk from './messages/ua.js';
import be from './messages/be.js';

export const messages = { de, en, ru, uk, be };
export const locales = Object.keys(messages);
export const homePath = locale => `/${locale}/`;
export function translator(locale) {
  return key => {
    const resolve = data => key.split('.').reduce((value, part) => value?.[part], data);
    return resolve(messages[locale]) ?? resolve(de) ?? key;
  };
}
