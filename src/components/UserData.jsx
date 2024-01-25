import { useSelector } from "react-redux";
import { Person } from "./Person";

export const UserData = () => {
  const persons = useSelector((store) => store.users.users);

  if (!persons || persons.lenght === 0) return <p>Нет данных</p>;

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Nik</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((user, i) => (
            <Person person={user} key={user.id} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
