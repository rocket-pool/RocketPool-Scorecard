import TableRow from "./TableComponents";
import type { Row } from "../../types/TableRowTypes";

export default function Table({ rows }: { rows: Row[] }) {
  return (
    <table className="w-full mb-20 border border-accentGray rounded-lg">
      <thead className="dark:bg-black/07 ">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-1/4">
            Scorecard Attribute
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-1/6">
            Category
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap w-1/6">
            Community Members at Risk
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-1/6">
            Self-Assessment
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-1/4">
            Comments
          </th>
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