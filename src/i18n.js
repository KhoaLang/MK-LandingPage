import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import axios from "axios";
import _ from "lodash";

const convertArrayToObject = (array, key) => {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item.value,
    };
  }, {});
};
const backendOptions = {
  loadPath: "https://landing-page-vnplus.herokuapp.com/api/language-text",
  request: async (options, url, payload, callback) => {
    try {
      axios.get(url).then((result) => {
        const data = convertArrayToObject(result.data.data, "key");
        console.log(data);

        // console.log(result1);
        const obj = Object.assign({}, result.data.data);
        // console.log(obj);
        // console.log(JSON.parse(obj));
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
