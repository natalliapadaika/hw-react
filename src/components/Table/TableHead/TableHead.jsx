
// export const TableHead = ({col, onClick}) => {
// return (
//     <thead>
//     <tr>
//   {col.map(({label, key}) => <th key ={key}> <button type="button" onClick={onClick}> {label}</button> </th>)}
//     </tr>

//     </thead>
// )

// }

export const TableHead = ({label, keys, onClick}) => {
  return (
    <th key = {keys}><button type="button" onClick={onClick}>{label}</button></th>
  )
  
}