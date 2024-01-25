import { useDispatch } from "react-redux";
import { DELETE_USERS } from "../reducers/usersReduser";
import { CustomLink } from "./CustomLink";

export const Person = ({ person, index }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch({ type: DELETE_USERS, payload: id });
  };

  return (
    <tr key={person.id}>
      <td>{index + 1}</td>

      <td>
        <CustomLink id={person.id} key={person.id} props={person.name} />
      </td>
      <td>{person.username}</td>
      <td>{person.email}</td>
      <td>{person.address.city}</td>
      <td>
        <button onClick={() => handleDeleteUser(person.id)}>X</button>
      </td>
    </tr>
  );
};
