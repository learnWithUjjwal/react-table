import { useSortBy, useTable } from "react-table";
import styles from "./table.module.css";
const ReactSortingTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data }, useSortBy);

  return (
    <>
      <h1>React Sorting Table</h1>
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={i}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "⏬"
                            : "⏫"
                          : ""}
                      </span>
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
export default ReactSortingTable;
