// import { GetPosts } from "../../Api/GetPosts";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableHead } from "../Table/TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { OnLoadingUserData } from "../LoadingPersons";

export const Table = () => {
  // const DataLoading =  OnLoadingUserData(TableBody);

  const [info, setInfo] = useState();
  // console.log(info)

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return setInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, [setInfo]);

  return (
    <table>
      <TableHead />
      <TableBody data={info} />
    </table>
  );
};
