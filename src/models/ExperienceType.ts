import { Moment } from "moment";

type ExperienceType = {
    title: string,
    organisation: string,
    startDate: Moment,
    endDate: Moment | null,
    description: string,
    skills: string[]
}

export default ExperienceType;