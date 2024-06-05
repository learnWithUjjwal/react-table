import { useMemo } from "react";
import AppLoader from "../AppLoader/AppLoader";
import data from "./../DummyData/reactTableData.json";
// import ReactBasicTable from "./BasicTable";
// import ReactSortingTable from "./SortingTable";
import ReactGlobalFilteringTable from "./GlobalFiteringTable";
// import SearchBarByColumn from "./SearchBarByColumn";
// import FilteringByColumnTable from "./FilteringByColumnTable";
// import PaginationTable from "./PaginationTable";
// const columns = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//     Filter: SearchBarByColumn,
//     disableFilters: true,
//   },
//   {
//     Header: "FIrst Name",
//     Footer: "FIrst Name",
//     accessor: "first_name",
//     Filter: SearchBarByColumn,
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//     Filter: SearchBarByColumn,
//   },
//   {
//     Header: "Email",
//     Footer: "Email",
//     accessor: "email",
//     Filter: SearchBarByColumn,
//   },
//   {
//     Header: "Gender",
//     Footer: "Gender",
//     accessor: "gender",
//     Filter: SearchBarByColumn,
//   },
//   {
//     Header: "IP Address",
//     Footer: "IP Address",
//     accessor: "ip_address",
//     Filter: SearchBarByColumn,
//   },
// ];

const columns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "FIrst Name",
    Footer: "FIrst Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
  },
  {
    Header: "IP Address",
    Footer: "IP Address",
    accessor: "ip_address",
  },
];

// const groupedColumns = [
//   { Header: "Id", Footer: "Id", accessor: "id" },
//   {
//     Header: "Name",
//     Footer: "Name",
//     columns: [
//       { Header: "FIrst Name", Footer: "FIrst Name", accessor: "first_name" },
//       { Header: "Last Name", Footer: "Last Name", accessor: "last_name" },
//     ],
//   },
//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       { Header: "Email", Footer: "Email", accessor: "email" },
//       { Header: "Gender", Footer: "Gender", accessor: "gender" },
//       { Header: "IP Address", Footer: "IP Address", accessor: "ip_address" },
//     ],
//   },
// ];
const ReactTable = () => {
  const memoedColumns = useMemo(() => columns, []);
  const memoedRows = useMemo(() => data, []);
  // const memoedGroupedColumns = useMemo(() => groupedColumns, []);
  return (
    <AppLoader>
      {/* <ReactBasicTable columns={memoedColumns} data={memoedRows} /> */}
      {/* <ReactSortingTable columns={memoedColumns} data={memoedRows} /> */}
      <ReactGlobalFilteringTable columns={memoedColumns} data={memoedRows} />
      {/* <FilteringByColumnTable columns={memoedColumns} data={memoedRows} /> */}
      {/* <PaginationTable columns={memoedColumns} data={memoedRows} /> */}
    </AppLoader>
  );
};
export default ReactTable;
