import TableRow from './TableComponents'
import type { Row } from '../../types/TableRowTypes'
import jsonData from '../../../assets/tableInfo.json'


const exampleRows: Row[] = jsonData as Row[];

export default function ScoreCard() {
  return (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Scorecard Attribute
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Community Members at Risk
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Self-Assessment
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Comments
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white dark:bg-gray-900">
          <td className="px-6 py-4 whitespace-nowrap">Project A</td>
          <td className="px-6 py-4 whitespace-nowrap">Website redesign</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-01-20</td>
          <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Completed
            </span>
          </td>
        </tr>
        <tr className="bg-gray-50 dark:bg-gray-800">
          <td className="px-6 py-4 whitespace-nowrap">Project B</td>
          <td className="px-6 py-4 whitespace-nowrap">Logo creation</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-01-15</td>
          <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              In Progress
            </span>
          </td>
        </tr>
        <tr className="bg-white dark:bg-gray-900">
          <td className="px-6 py-4 whitespace-nowrap">Project C</td>
          <td className="px-6 py-4 whitespace-nowrap">Marketing campaign</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-01-10</td>
          <td className="px-6 py-4 whitespace-nowrap">Bob Johnson</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Delayed
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
