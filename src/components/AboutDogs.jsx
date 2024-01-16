import axios from "axios";
import { useState, useEffect } from "react";
import { Main } from "./Main";

export const AboutDogs = () => {
  const [info, setInfo] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("https://dogapi.dog/api/v2/breeds");
      return setInfo(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Main dogs={info} />
    </>
  );
};
