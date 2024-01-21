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
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold upppercase tracking-wide text-white ${getStatusColor(text)}`}>
            {text}
          </span>
        </td>
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
        <tr className={`${bgColorClass}`}>
          <td className="px-6 py-4">{data.attribute}</td>
          <td className="px-6 py-4">{data.category}</td>
          <td className="px-6 py-4">{data.membersAtRisk}</td>
          <Status text={data.assessment} />
          <td className="px-6 py-4">{data.comments}</td>
        </tr>
    );
}

