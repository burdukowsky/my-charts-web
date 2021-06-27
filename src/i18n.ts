import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { localStorageService } from './app/services/LocalStorageService';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: localStorageService.getLang(),
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
