import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { setUser } from "../actions/users/userActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";

export const UserPage = () => {
  const dispatch = useDispatch();
 
  const { id } = useParams();

  useEffect(() => {
    dispatch(setUser(id));
  }, []);

 const { loading, error, user } = useSelector((state) => state.user);
 


  if (error) {
    return (
      <div className="app">
        <h1>Ошибка запроса</h1>
      </div>
    );
  }

  if(loading) {
    return (
       <h1>Данные загружаются</h1>
    )

  };

if (!loading && user.address) {
  return (
    <>
    <div className="infoOfUser">
          <div className="user">
            <h1>Пользователь:</h1>

            <h2>Имя: {user.name}</h2>
            <h3>Ник: {user.username}</h3>
            <p>Тел: {user.phone}</p>
            <p>Адресс: {user.address.city}, {user.address.street}</p>     
            <div className="comment">
              <Comments />
            </div>
          </div>
        </div>   
        
         <Link to="/users">Users</Link>
        </>  )
      };

   
};