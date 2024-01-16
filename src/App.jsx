import { useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { ThemeContext } from "./context/ThemeContext";
import { AboutDogs } from "./components/AboutDogs";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Descr } from "./components/Descr";
import Data from "./Data.json";

function App() {
  const [theme, setTheme] = useState("light");
  const [descr, setDescr] = useState(Data);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, descr, setDescr }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home title="Страница про Собак" />} />
            <Route path="breeds" element={<AboutDogs />} />

            <Route path="descr" element={<Descr />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
