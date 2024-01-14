import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { UsersPage } from "./components/UsersPage";
import { UserPage } from "./components/UserPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home title="its HOME PAGE" />} />
          <Route path="users" element={<UsersPage />} />

          <Route path="users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
