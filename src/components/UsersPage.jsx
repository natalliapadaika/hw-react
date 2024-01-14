import { GetInfo } from "../Api/GetInfo";

export const UsersPage = () => {
  return (
    <>
      <GetInfo url={"https://jsonplaceholder.typicode.com/users"} />
    </>
  );
};
