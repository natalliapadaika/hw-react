import { Link} from "react-router-dom";

export const NotFound = () =>{
    return <div>
        Данная страница не найдена....
        <Link to='/'>Home</Link>
    </div>
}