import { CustomLink } from "./CustomLink";

export const UsersList = ({ users }) => {
  return (
    <div>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user) => (
          <CustomLink
            id={user.id}
            key={user.id}
            props={
              <li>
                {user.name} ({user.email})
              </li>
            }
          />
        ))}
      </ul>
    </div>
  );
};
