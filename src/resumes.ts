import csResume from "./assets/cs/resume.json"
import enResume from "./assets/en/resume.json"
import { Resume } from './resume-types'

function getResume (locale : string) : Resume {
    switch (locale) {
        case 'en': return enResume;
        case 'cs': return csResume;
        default: return enResume;
    }
}

export { getResume }
