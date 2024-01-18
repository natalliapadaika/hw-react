import { useDispatch, useSelector } from "react-redux";
import { DEL_USER } from "../store/usersReducer";

export const DelUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);

  const delUser = (id) => {
    dispatch({
      type: DEL_USER,
      payload: id,
    });
  };
  return (
    <button onClick={() => delUser(Number(prompt("id")))}>
      Del Users (id){" "}
    </button>
  );
};
