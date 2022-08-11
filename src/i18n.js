import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import axios from "axios";
import { DOMAIN } from "./utils/constants";

const convertArrayToObject = (array, key) => {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item.value,
    };
  }, {});
};
const backendOptions = {
  loadPath: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}/api/language-text?option={{lng}}`,
  request: async (options, url, payload, callback) => {
    try {
      axios.get(url).then((result) => {
        const data = convertArrayToObject(result.data.data, "key");
        callback(null, {
          data: data,
          status: 200,
        });
      });
    } catch (e) {
      console.error(e);
      callback(null, {
        status: 500,
      });
    }
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    fallbackLng: "en",
    lng: "en",
    debug: false,
    load: "languageOnly",
    // ns: ["translations"],
    // defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
    backend: backendOptions,
  });

export default i18n;
