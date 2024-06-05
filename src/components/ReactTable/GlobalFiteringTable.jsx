import { useGlobalFilter, useTable } from "react-table";
import styles from "./table.module.css";
import SearchBar from "./SearchBar";
const ReactGlobalFilteringTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    // footerGroups,
  } = useTable({ columns, data }, useGlobalFilter);
  const { globalFilter } = state;
  console.log(rows);
  return (
    <div className={styles.container}>
      <h1>React Global Filterings Table</h1>
      <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restHeaderProps } = column.getHeaderProps();
                    return (
                      <th {...restHeaderProps} key={key}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
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
          {/* <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((col) => (
                  <td {...col.getFooterProps}>{col.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};
export default ReactGlobalFilteringTable;
