import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
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
      <h1>Пользователь:</h1>

      <h2>Имя: {info.name}</h2>
      <h3>Ник: {info.username}</h3>
      <p>Тел: {info.phone}</p>

      <Link to="/users">Users</Link>
    </>
  );
};
