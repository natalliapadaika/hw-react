import { useDispatch, useSelector } from "react-redux";
import { ADD_USER } from "../store/usersReducer";
import { useState } from "react";

export const AddUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);

  const lenght = users.lenght;
  const [count, setCount] = useState(11);

  const addId = () => {
    setCount((count) => count + 1);
  };

  const addUser = (name, email) => {
    addId();
    dispatch({
      type: ADD_USER,
      payload: {
        id: count,
        name: name,
        email: email,
      },
    });
  };

  return (
    <button onClick={() => addUser(prompt("name"), prompt("email"))}>
      Add Users
    </button>
  );
};
