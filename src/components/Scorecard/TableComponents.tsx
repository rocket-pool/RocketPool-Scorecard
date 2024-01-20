import { StatusType, Row } from '../../types/TableRowTypes';

function getStatusColor(status: StatusType): string {
    switch (status) {
        case 'GOOD':
            return 'bg-green-700';
        case 'OKAY':
            return 'bg-yellow-600';
        case 'NEEDS IMPROVEMENT':
            return 'bg-red-600';
        case 'COMMUNITY INPUT NEEDED':
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

interface TableRowProps {
    // Used to determine if row is even or odd for styling
    isEven: boolean,
    data: Row,
}


export default function TableRow({ isEven, data }: TableRowProps) {
    const bgColorClass = isEven ? 'bg-black/07' : 'bg-slateGray';

    return (
        <div className={`grid grid-cols-5 gap-2 items-center p-2 ${bgColorClass}`}>
            <div>{data.attribute}</div>
            <div>{data.category}</div>
            <div>{data.membersAtRisk}</div>
            <Status text={data.assessment} />
            <div>{data.comments}</div>
        </div>
    );
}

