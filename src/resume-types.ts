type Profile = {
    network : string;
    username : string;
    url : string;
}

type Location = {
    city : string
}

type Basics = {
    name : string;
    label: string;
    image: string;
    email: string;
    url: string;
    phone: string;
    summary : string;
    profiles : Profile[] | undefined;
    location : Location | undefined;
}

type Skill = {
    name: string;
    level: string;
    keywords: string[];
}

type Work = {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    highlights: string[] | undefined,
    summary: string;
    url: string;
    skills: Skill[] | undefined;
}

type Resume = {
    basics : Basics | undefined;
    work : Work[] | undefined;
}


export type { Resume, Basics, Profile, Work, Skill }
