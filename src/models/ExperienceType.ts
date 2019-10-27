import { Moment } from "moment";

type ExperienceType = {
    title: string,
    organisation: string,
    startDate: Moment,
    endDate: Moment | null,
    image?: string,
    description: React.ReactNode,
    skills: string[]
}

export default ExperienceType;