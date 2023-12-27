export const TableBody = ({ columns, tableData }) => {

   if (!tableData) {return (<div>"нет данных!!!"</div>)}

  return (
    <tbody> 
 
      {tableData.map((data) => (
        <tr key={data.id}>
      
          {columns.map(({ key }) => (
            <td key={key}>{data[key]?data[key]:'нет данных'}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
