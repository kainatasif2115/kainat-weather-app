import { useTable } from 'react-table';
import React from 'react';

const Table=({rowData})=>{

  const columnData=React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Probability',
        accessor: 'probability',
      },
    ],
    []
  )
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = useTable({ columns:columnData, data: rowData });
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-500 text-white">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="p-2">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={`${rowIndex % 2 === 0 ? 'hover:bg-blue-300' : 'hover:bg-blue-200'} cursor-pointer`}
            >
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="p-2">{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;