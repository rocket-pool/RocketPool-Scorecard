import TableRow from './TableComponents'
import type { Row } from '../../types/TableRowTypes'
import jsonData from '../../../assets/tableInfo.json'


const exampleRows: Row[] = jsonData as Row[];

export default function Scorecard() {
  return (
    <section className="p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        {
          exampleRows.map((row, i) => (
            <TableRow key={i} isEven={i % 2 == 0} data={row}/>
          ))
        }
      </div>
    </section>
  )
}