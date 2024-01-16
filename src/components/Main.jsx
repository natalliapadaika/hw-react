import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Main = ({ dogs }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme}`}>
      <h2>Breeds:</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};
