import * as i18n from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import I18NextHttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import {initReactI18next} from 'react-i18next';
import {
  SIMPLELOCALIZE_CDN_URL,
  SIMPLELOCALIZE_PROJECT_TOKEN,
  SIMPLELOCALIZE_ENVIRONMENT,
} from '@env';

import {findBestLanguageTag} from 'react-native-localize';

export type TranslationKeys = Record<string, () => string>;

const translationGetters: TranslationKeys = {
  en: () => require('./locales/en.json'),
  it: () => require('./locales/it.json'),
};

const FALLBACK_LANGUAGE_CODE = 'en';

const fallback = {languageTag: 'en'};

const loadPath = `${SIMPLELOCALIZE_CDN_URL}/${SIMPLELOCALIZE_PROJECT_TOKEN}/${SIMPLELOCALIZE_ENVIRONMENT}/{{lng}}`;

export const {languageTag} =
  findBestLanguageTag(Object.keys(translationGetters)) || fallback;

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    returnNull: false,
    compatibilityJSON: 'v3', // using v3 because Intl is not fully available in React Native
    lng: languageTag,
    fallbackLng: FALLBACK_LANGUAGE_CODE,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [
        I18NextHttpBackend,
        resourcesToBackend({
          [languageTag]: {
            translation: translationGetters[languageTag](),
          },
        }),
      ],
      backendOptions: [
        {
          loadPath,
        },
      ],
    },
  });

export default i18n;
