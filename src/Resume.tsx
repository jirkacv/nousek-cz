import { cs as csResume, en as enResume } from './resumes.ts'
import * as ResumeType from './resume-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from 'react-i18next';

function networkIcon(networkName: string | undefined) {
    switch (networkName?.toLowerCase()) {
        case 'linkedin':
            return faLinkedin
        case 'github':
            return faGithub
        default:
            return undefined
    }
}

function jobDate(months: string[], dateStr: string) {
    const date = new Date(dateStr);
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

interface LinkProps {
    url: string;
    title: string;
    icon: IconProp | undefined
}

function Link({url, title, icon}: LinkProps) {
    return (
        <div>
            <a href={url} rel="noopener noreferrer" className="text-yinmn_blue dark:text-orange_web font-medium hover:underline">
                {icon && <FontAwesomeIcon icon={icon}/>}
                {title}
            </a>
        </div>
    )
}

function Links({basics}: { basics: ResumeType.Basics }) {
    const { t } = useTranslation();
    return (
        <section className="flex-grow">
            <h2 className="section-header">{t('sections.links')}</h2>
            {basics.email !== '' &&
                <Link key="email" url={`mailto:${basics.email}`} title={basics.email} icon={faEnvelope}/>
            }
            {basics.url !== '' &&
                <Link key="url" url={basics.url} title={basics.url} icon={faLink}/>
            }

            {basics.profiles && basics.profiles.map(profile => {
                const icon = networkIcon(profile.network);
                return (
                    <Link key={profile.network} url={profile.url} title={profile.username} icon={icon}/>
                )
            })}
        </section>
    )
}

function Languages({ languages }: { languages: ResumeType.Language[] | undefined }) {
    const { t } = useTranslation();
    if (languages && languages.length > 0) {
        return (
            <section className="flex-grow">
                <h2 className="print:my-1 section-header">{t('sections.languages')}</h2>
                {languages.map(lang => {
                    return (
                        <div key={lang.language}>
                            <span>{lang.language}</span>
                            {lang.fluency !== '' && <span className="ml-2 text-yinmn_blue dark:text-timberwolf-400">{lang.fluency}</span>}
                        </div>
                    )
                })}
            </section>
        )
    }
    return null;
}

interface BasicsProps {
    basics: ResumeType.Basics | undefined
    languages: ResumeType.Language[] | undefined
}

function Basics({basics, languages}: BasicsProps) {
    if (basics) {
        return (
            <section className="print:gap-2 section flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-grow">
                    <h1 className="print:my-1 text-4xl my-2 font-semibold">{basics.name}</h1>
                    {basics.label !== '' && (
                        <div className="text-yinmn_blue dark:text-timberwolf-400">{basics.label}</div>
                    )}
                    {basics.location && (basics.location.city !== '') && (
                        <div className="text-yinmn_blue dark:text-timberwolf-400">
                            <FontAwesomeIcon icon={faMap}/>
                            <span>{basics.location.city}</span>
                        </div>
                    )}
                </div>
                <Links basics={basics}/>
                <Languages languages={languages}/>
            </section>
        )
    }
    return null
}

function SkillTag ( { skill } : { skill : string } ) {
    return (
        <span
            className="font-mono text-sm font-thin flex-auto px-2 grow-0 leading-8 whitespace-nowrap border-x-2 rounded-xl border-yinmn_blue dark:border-x-orange_web">
            {skill}
        </span>
    )
}

function JobSkills({skills}: { skills: ResumeType.Skill[] }) {
    return (
        <section className="basis-1/4 content-center">
            <div className="flex flex-row gap-2 items-center justify-center flex-wrap basis-auto shrink grow">
                {skills.map((skill) => {
                    return <SkillTag key={skill.name} skill={skill.name} />
                })}
            </div>
        </section>
    )
}

function Job({work}: { work: ResumeType.Work }) {
    const { t } = useTranslation();
    const months = t('months').split(';');
    const endDate = work.endDate ? jobDate(months, work.endDate) : t('present');

    const workName =
        work.url
            ? <a href={work.url} rel="noopener noreferrer"
                 className="text-yinmn_blue dark:text-orange_web font-medium hover:underline">{work.name}</a>
            : <span>work.name</span>

    return (
        <div className="print:break-inside-avoid-page print:pb-6 flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between pb-8 border-l pl-4 border-yinmn_blue dark:border-timberwolf-400">
            <div className="flex-grow basis-3/4">
                <span className="print:top-5 relative -ml-5 top-7 border-4 border-yinmn_blue dark:border-timberwolf-400 w-1 h-1 rounded-full block"></span>
                <div className="print:mt-0 my-2 flex flex-col lg:flex-row justify-start lg:gap-4">
                    <h3 className="text-xl font-semibold">{workName}</h3>
                    <span className="text-sm font-normal my-auto text-yinmn_blue dark:text-timberwolf-400">
                        {`${jobDate(months, work.startDate)} - ${endDate}`}
                    </span>
                </div>
                <div className="text-lg font-semibold">{work.position}</div>
                {work.summary !== '' && (
                    <div>{work.summary}</div>
                )}
                {work.highlights && work.highlights.length > 0 && (
                    <ul className="list-[square]">
                        {work.highlights.map((highlight, i) =>
                            <li key={i} className="ml-6">{highlight}</li>
                        )}
                    </ul>
                )}
            </div>
            {work.skills && work.skills.length > 0 && (
                <JobSkills skills={work.skills}/>
            )}
        </div>
    )
}

function Jobs({work}: { work: ResumeType.Work[] | undefined }) {
    const { t } = useTranslation();
    if (work && work.length > 0) {
        return (
            <section className="section">
                <h2 className="section-header">{t('sections.jobs')}</h2>
                {work.map(job => {
                    return <Job key={`${job.name}_${job.startDate}`} work={job}/>
                })}
            </section>
        )
    }
    return null;
}

function Skill({skill}: { skill: ResumeType.Skill }) {
    return (
        <div className="print:break-inside-avoid-page">
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            {skill.level !== '' &&
                <div className="mb-4 text-sm text-yinmn_blue dark:text-timberwolf-400">{skill.level}</div>}
            {skill.keywords && skill.keywords.length > 0 && (
                <div className="flex flex-row gap-2 items-center justify-center flex-wrap basis-auto shrink grow">
                    {skill.keywords.map((keyword) => {
                        return <SkillTag key={keyword} skill={keyword} />
                    }) }
                </div>
            )}
        </div>
    )
}
function Skills({skills}: { skills: ResumeType.Skill[] | undefined }) {
    const { t } = useTranslation();
    if (skills && skills.length > 0) {
        return (
            <section className="print:break-inside-avoid-page section">
                <h2 className="section-header">{t('sections.skills')}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => {
                        return <Skill key={skill.name} skill={skill} />
                    })}
                </div>
            </section>
        )
    }
    return null;
}

function Resume() {
    const { i18n } = useTranslation();
    const resume = i18n.language === 'cs' ? csResume : enResume
    return (
        <div className="print:py-0 flex flex-col gap-4 lg:gap-6 mb-auto p-4 lg:p-8 lg:pb-4 pt-0 lg:pt-0">
            <Basics basics={resume.basics} languages={resume.languages} />
            <Jobs work={resume.work} />
            <Skills skills={resume.skills} />
        </div>
    )
}

export default Resume
