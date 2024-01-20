type StatusType = 'GOOD' | 'OKAY' | 'NEEDS IMPROVEMENT' | 'INPUT NEEDED';

function getStatusColor(status: StatusType): string {
    switch (status) {
        case 'GOOD':
            return 'bg-green-700';
        case 'OKAY':
            return 'bg-yellow-600';
        case 'NEEDS IMPROVEMENT':
            return 'bg-red-600';
        case 'INPUT NEEDED':
            return 'bg-orange-600';
        default:
            return '';
    }
}

interface StatusProps {
    text: StatusType;
}

function Status({ text }: StatusProps) {
    return (
        <div className={`rounded-full ${getStatusColor(text)}`}>
            <p className="text-white text-xs font-bold uppercase tracking-wide p-2">{text}</p>
        </div>
    );
}

function TitleRow() {

}


interface TableRowProps {
    attribute: string,
    category: string,
    membersAtRisk: string,
    assessment: StatusType,
    comments: string,
};

export default function TableRow() {
    return (
        <div>
            <Status text="INPUT NEEDED" />
        </div>
    )
}

