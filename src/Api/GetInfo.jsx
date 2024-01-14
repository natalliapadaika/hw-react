import axios from "axios";
import { useState, useEffect } from "react";
import { UsersList } from "../components/UsersList";

export const GetInfo = ({ url }) => {
  const [info, setInfo] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(url);
      return setInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <UsersList users={info} />
    </>
  );
};
