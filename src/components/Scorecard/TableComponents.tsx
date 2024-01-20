.import { StatusType, Row } from '../../types/TableRowTypes';

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

// Component to handle the title row of the table (first row)
function TitleRow() {
    return (
        <div className="flex flex-row items-center justify-start border-2 p-2 border-accentGray">
            <div className="mr-4">Item 1</div>
            <div className="mr-4">Item 2</div>
            <Status text="GOOD" />
        </div>
    )
}


interface TableRowProps {
    // Used to determine if row is even or odd for styling
    isEven: boolean,
    data: Row,
}


export default function TableRow({ isEven, data }: TableRowProps) {
    const bgColorClass = isEven ? 'bg-black/07' : 'bg-slateGray';

    return (
        <div className={`flex flex-row items-center justify-start border-2 border-accentGray p-2 ${bgColorClass}`}>
            <div className="mr-4">Item 1</div>
            <div className="mr-4">Item 2</div>
            <Status text={data.assessment} />
        </div>
    );
}

