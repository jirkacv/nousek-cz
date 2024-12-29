import { useTranslation } from 'react-i18next';
import { languageCodes } from './i18n';

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
        <button className="h-4 w-4 mt-4 mr-4" onClick={onClick}>
            <img src={`/${props.language}/flag_4x3.svg`} alt={t('language')} className="h-4 w-4" />
        </button>
    )
}

function Header() {
    return (
        <header className="px-0 md:px-8 h-8">
            <div className="flex flex-row justify-end">
                { languageCodes.map((language) => <LanguageIcon key={language} language={language} />)}
            </div>
        </header>
    )
}

export default Header
