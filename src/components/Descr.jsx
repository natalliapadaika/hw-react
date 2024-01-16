import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Descr = () => {
  const { descr } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${theme}`}>
        {descr.map((d) => (
          <div key={d.id}>
            <h3>{d.attributes.name}</h3>
            {d.attributes.description}
          </div>
        ))}
      </div>
    </>
  );
};
