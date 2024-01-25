import Image from 'next/image';
import InputIcon from '../../../public/input.svg';
import { StatusType, Row } from '../../types/TableRowTypes';
import Markdown from 'markdown-to-jsx';
import '../../../src/app/globals.css';

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
      <td className="px-6 py-4 whitespace-nowrap td-class order-1 td-status-class ">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide text-white ${getStatusColor(text)}`}>
          {text}
        </span>
        <a href="https://rocketpool.net/" target="_blank" rel="noreferrer" className="inline-flex ml-auto md:hidden">
          <Image
            alt="Forum Input Link"
            src={InputIcon}
            className="w-5 h-5"
          />
        </a>
      </td>
  );
}

interface TableRowProps {
    // Used to determine if row is even or odd for styling
    isEven: boolean,
    data: Row,
}


export default function TableRow({ isEven, data }: TableRowProps) {
    const bgColorClass = isEven ? 'bg-black/07 dark:bg-darkMode' : 'bg-white-100 md:bg-gray-300 dark:bg-slateGray';

    return (
        <tr className={`${bgColorClass} tr-class`}>
          <td className="td-class font-bold order-2 text-lg md:text-sm md:font-normal">{data.attribute}</td>
          <td className="td-class order-3 text-xs md:text-sm">{data.category}</td>
          <td className="td-class order-4 mb-3 text-md font-semibold md:font-normal md:text-sm md:mb-0 ">{data.membersAtRisk}</td>
          <Status text={data.assessment} />
          <td className="td-class order-6 text-md md:text-sm">
            <span className="markdown-links">
              <Markdown>{data.comments}</Markdown>
            </span>
          </td>
          <td className="hidden td-class order-5 md:table-cell">
            <a href="https://rocketpool.net/" target="_blank" rel="noreferrer">
              <Image
                alt="Forum Input Link"
                src={InputIcon}
                className="w-auto h-auto"
              />
            </a>
          </td>
        </tr>
    );
}

