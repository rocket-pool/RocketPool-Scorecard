export type StatusType = 'GOOD' | 'OKAY' | 'NEEDS IMPROVEMENT' | 'COMMUNITY INPUT NEEDED';

export type Row = {
    attribute: string;
    category: string;
    membersAtRisk: string;
    assessment: StatusType;
    comments: string;
};