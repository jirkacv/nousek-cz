import { useTranslation } from 'react-i18next';
import { languageCodes } from './i18n';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface LanguageIconProps {
    language : string
}

function LanguageIcon (props: LanguageIconProps) {
    const { t, i18n } = useTranslation();
    const onClick = () => {
        void i18n.changeLanguage(props.language);
        window.history.pushState({}, '', `/${props.language}`)
    }

    return (
        <button className="h-4 w-4 mr-4" onClick={onClick}>
            <img src={`/${props.language}/flag_4x3.svg`} alt={t('language')} className="h-4 w-4" />
        </button>
    )
}

declare global {
    interface Window { setTheme: (theme: string) => void }
}

type Theme = 'dark' | 'light';

function ThemeSwitch() {
    const [ currentTheme, setCurrentTheme ] = useState<Theme>('light');
    const { t } = useTranslation();
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setCurrentTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setCurrentTheme(newTheme);
        window.setTheme(newTheme.toString());
    }

    const translationKey = currentTheme === 'dark' ? 'theme.toLight' : 'theme.toDark';
    return (
        <div onClick={toggleTheme} className="cursor-pointer text-oxford_blue dark:text-timberwolf-400">
            <FontAwesomeIcon
                className="ml-4"
                icon={currentTheme === 'dark' ? faSun : faMoon }
            />
            <span>{t(translationKey)}</span>
        </div>
    )
}

function Header() {
    return (
        <header className="print:hidden px-0 lg:px-8 h-12 flex flex-row justify-between items-center">
            <ThemeSwitch />
            <div>{ languageCodes.map((language) => <LanguageIcon key={language} language={language} />)}</div>
        </header>
    )
}

export default Header
