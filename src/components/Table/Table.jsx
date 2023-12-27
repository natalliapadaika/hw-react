import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import tableData1 from "../../tableData1.json";
import "./table.css";

// export const Table =() => {

//     const [tableData, setTableData] = useState(tableData1);

//     const columns = [
//         { label: "Full Name", key: "full_name"},
//         { label: "Gender", key: "gender"},
//         { label: "Age", key: "age"},
//         { label: "Email", key: "email"},
//     ]

//     const handleSortData1 = () => {
//         setTableData(prevState => prevState.sort((a, b) => a.name < b.name? -1 : 1))
//     }
//     const handleSortData2 = () => {
//         setTableData(prevState => prevState.sort((a, b) => a.name.localeCompare(b.className)))
//     }

// const handleSortData = () => {
//     setTableData(prevState => prevState.sort((a, b) => a.age-b.age))
// }
// // const handleSortData4 = () => {
// //     setTableData(prevState => prevState.sort((a, b) => a.age.toString(),localeCompare(b.age.toString(), 'en', { numeric: true })))
// // }

//     return (
//         <table className="table">
//           <TableHead columns = {columns}/>
//           <TableBody columns = {columns} tableData={tableData}/>
//         </table>
//     )
// }



export const Table = () => {
  const [tableData, setTableData] = useState(tableData1);

  const columns = [
  { label: "Full Name", key: "full_name" },
  { label: "Gender", key: "gender" },
  { label: "Age", key: "age" },
  { label: "Email", key: "email" },
];

  const handleSortData1 = (e) => {console.log('yyy');
    setTableData((prevState) => prevState.sort((a, b) => (a < b ? -1 : 1)));
  };

  const handleSortData2 = () => {
    setTableData((prevState) =>
      prevState.sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const handleSortData = () => {
    setTableData((prevState) => prevState.sort((a, b) => a.age - b.age));
  };
  const handleSortData4 = () => {
    setTableData((prevState) =>
      prevState.sort((a, b) =>
        a.age
          .toString()
          .localeCompare(b.age.toString(), "en", { numeric: true })
      )
    );
  };

  return (
    <table className="table">
      {/* <TableHead col={columns} onClick={handleSortData} /> */}
      
  <thead>
    <tr>
      <TableHead key = {columns[0].key} label ={columns[0].label} onClick={handleSortData1}/>
      <TableHead key = {columns[1].key} label ={columns[1].label}/>
      <TableHead key = {columns[2].key} label ={columns[2].label} onClick={handleSortData}/>
      <TableHead key = {columns[3].key} label ={columns[3].label}/>
      </tr>
</thead>
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
