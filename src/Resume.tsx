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
            <a href={url} rel="noopener noreferrer" className="text-yinmn_blue dark:text-flame font-medium hover:underline">
                {icon && <FontAwesomeIcon icon={icon}/>}
                {title}
            </a>
        </div>
    )
}

function Links({basics}: { basics: ResumeType.Basics }) {
    const {t} = useTranslation();
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

function Basics({basics}: { basics: ResumeType.Basics | undefined }) {
    if (basics) {
        return (
            <section className="flex flex-col md:flex-row justify-between">
                <div className="flex-grow">
                    <h1 className="text-4xl my-2 font-semibold">{basics.name}</h1>
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
            </section>
        )
    }
    return null
}

function Skills({skills}: { skills: ResumeType.Skill[] }) {
    const { t } = useTranslation();
    return (
        <section className="basis-1/4">
            <h4 className="my-2 text-xl font-medium text-left md:invisible">{t('sections.skills')}</h4>
            <div className="flex flex-row gap-2 items-center justify-center flex-wrap basis-auto shrink grow">
                {skills.map((skill) => {
                    return (
                        <span key={skill.name}
                              className="flex-auto px-2 grow-0 leading-8 whitespace-nowrap rounded-xl bg-yinmn_blue text-platinum dark:bg-eerie_black dark:text-timberwolf-700">
                            {skill.name}
                        </span>
                    )
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
            ? <a href={work.url} rel="noopener noreferrer" className="text-yinmn_blue dark:text-flame font-medium hover:underline">{work.name}</a>
            : <span>work.name</span>

    return (
        <div className="flex flex-col md:flex-row md:gap-8 justify-between mb-8">
            <div className="flex-grow basis-3/4">
                <div className="my-2 flex flex-col md:flex-row justify-start md:gap-4">
                    <h3 className="text-xl font-semibold">{workName}</h3>
                    <span className="text-sm font-normal my-auto text-yinmn_blue dark:text-timberwolf-400">{`${jobDate(months, work.startDate)} - ${endDate}`}</span>
                </div>
                <div className="text-lg font-semibold">{work.position}</div>
                {work.summary !== '' && (
                    <div>{work.summary}</div>
                )}
                {work.highlights && work.highlights.length > 0 && (
                    <ul className="list-[square]">
                        {work.highlights.map((highlight, i) => (
                            <li key={i} className="ml-6">{highlight}</li>
                        ))}

                    </ul>
                )}
            </div>
            {work.skills && work.skills.length > 0 && (
                <Skills skills={work.skills}/>
            )}
</div>
    )
}

function Jobs({work}: { work: ResumeType.Work[] | undefined }) {
    const {t} = useTranslation();
    if (work && work.length > 0) {
        return (
            <section className="my-8">
                <h2 className="section-header">{t('sections.jobs')}</h2>
                {work.map(job => {
                    return (<Job key={`${job.name}_${job.startDate}`} work={job}/>)
                })}
            </section>
        )
    }
    return null;
}

function Resume() {
    const {i18n} = useTranslation();
    const resume = i18n.language === 'cs' ? csResume : enResume
    return (
        <div className="mb-auto p-8 py-4">
            <Basics basics={resume.basics}/>
            <Jobs work={resume.work}/>
        </div>
    )
}

export default Resume
