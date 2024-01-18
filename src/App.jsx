import "./App.css";
import Home from "./components/Home";
import { UsersPage } from "./components/UsersPage";
import { AddUsers } from "./components/AddUsers";
import { DelUser } from "./components/DelUsers";

function App() {
  return (
    <>
      <Home title={"CASH"} />
      <UsersPage title={"USERS"} />
      <AddUsers />
      <DelUser />
    </>
  );
}

export default App;
