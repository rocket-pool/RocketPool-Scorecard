import Table from './Table';
import jsonData from '../../../assets/tableInfo.json';
import type { Row, StatusType } from '../../types/TableRowTypes';

const rows: Row[] = jsonData as Row[];

// Mapping statuses to numerical values for sorting
const statusOrder: { [key in StatusType]: number } = {
  'GOOD': 1,
  'OKAY': 2,
  'NEEDS IMPROVEMENT': 3,
  'INPUT NEEDED': 4
};

// Sort the rows
rows.sort((a, b) => {
  return statusOrder[a.assessment] - statusOrder[b.assessment];
});

// Define the type for the grouped object
interface GroupedRows {
  [key: string]: Row[];
}

// Function to group rows by assessment
function groupByAssessment(rows: Row[]) {
  const grouped = rows.reduce<GroupedRows>((acc, row) => {
    acc[row.assessment] = acc[row.assessment] || [];
    acc[row.assessment].push(row);
    return acc;
  }, {});

  return grouped;
}

const groupedRows = groupByAssessment(rows);

export default function Scorecard() {

  function headerByAssessment(assessment: string) {
    switch (assessment) {
      case 'GOOD':
        return 'Where Rocket Pool is Succeeding';
      case 'OKAY':
        return 'Where Rocket Pool is Okay but Could Improve';
      case 'NEEDS IMPROVEMENT':
        return 'Where Rocket Pool Needs Improvement';
      case 'INPUT NEEDED':
        return 'Where Rocket Pool Needs Your Community Input';
      default:
        return '';
    }
  }

  return (
    <div>
      {Object.keys(groupedRows).map((assessment) => (
        <div key={assessment}>
          <h1 className="text-xl ml-4 md:ml-0 font-poppins my-3 tracking-tight sm:text-5xl xl:text-xl">{headerByAssessment(assessment)}</h1>
          <Table rows={groupedRows[assessment] as Row[]} />
        </div>
      ))}
    </div>
  );
};
