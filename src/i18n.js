import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json';
import br from './locales/br.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

Vue.use(VueI18n)

export const messages = {
  en,
  br,
  es,
  fr,
}

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
