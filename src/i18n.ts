import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageCodes = ['en', 'cs'];

void i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0
        },
        supportedLngs: languageCodes,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    language: 'English',
                    months: 'january;february;march;april;may;june;july;august;september;october;november;december',
                    present: 'present',
                    sections : {
                        links : "Where to find me",
                        languages: "Languages",
                        jobs : "Working experience",
                        skills : "Skills"
                    }
                }
            },
            cs: {
                translation: {
                    language: 'Čeština',
                    months: 'leden;únor;březen;duben;květen;červen;červenec;srpen;září;říjen;listopad;prosinec',
                    present: 'současnost',
                    sections : {
                        links : "Kde mě najdete",
                        languages: "Jazyky",
                        jobs : "Pracovní zkušenosti",
                        skills : "Dovednosti"
                    }
                }
            }
        }
    });

export { languageCodes };
