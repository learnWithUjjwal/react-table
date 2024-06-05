import { useTable } from "react-table";
import styles from "./table.module.css";
const ReactBasicTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data });
  console.log(rows);
  return (
    <>
      <h1>React Basic Table</h1>
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column, i) => (
                    <th {...column.getHeaderProps()} key={i}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              console.log(row);
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr {...restRowProps} key={key}>
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...restCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((col) => (
                  <td {...col.getFooterProps}>{col.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default ReactBasicTable;
