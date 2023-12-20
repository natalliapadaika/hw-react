import './table.css'
import { bestSellers } from './data'


export const Table = () => {

let tbody = bestSellers.map((item) => {
 return (
<tr key={item.id}>
         <td>{item.name}</td>
         <td>{item.descrShort}</td>
         <td>{item.descr}</td>
      </tr>
 )
});

return <table>
      <thead>
         <tr>
            <td>Название</td>
            <td>Описание</td>
            <td>Подробнее</td>
         </tr>
      </thead>
      <tbody>
        {tbody}
      </tbody>
   </table>;

}