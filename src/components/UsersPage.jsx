import { useDispatch, useSelector } from "react-redux";
import { SET_USERS, ADD_USER, DEL_USER } from "../store/usersReducer";
import { useEffect } from "react";

export const UsersPage = ({ title }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  // console.log(users);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({
        type: SET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      <h1>{title}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
