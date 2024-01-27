import TableRow from "./TableComponents";
import type { Row } from "../../types/TableRowTypes";

export default function Table({ rows }: { rows: Row[] }) {
  return (
    <table className="lg:w-full mb-20 lg:border lg:border-accentGray rounded-lg">
      <thead className="dark:bg-black/07 hidden md:table-header-group">
        <tr>
          <th className="px-6 py-5 text-left text-xs font-medium dark:text-white tracking-wider w-1/4">
            Scorecard Attribute
          </th>
          <th className="px-6 py-5 text-left text-xs font-medium dark:text-white tracking-wider w-1/6">
            Category
          </th>
          <th className="px-6 py-5 text-left text-xs font-medium dark:text-white tracking-wider whitespace-nowrap w-1/12">
            Community Members at Risk
          </th>
          <th className="px-6 py-5 text-left text-xs font-medium dark:text-white tracking-wider whitespace-nowrap w-1/8">
            Self-Assessment
          </th>
          <th className="px-6 py-5 text-left text-xs font-medium dark:text-white tracking-wider w-1/4">
            Comments
          </th>
          {/* Table header for feedback link */}
          <th className="w-1/12"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} isEven={(index + 1) % 2 === 0} data={row} />
        ))}
      </tbody>
    </table>
  )
}