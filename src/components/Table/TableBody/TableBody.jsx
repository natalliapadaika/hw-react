// import { useState } from "react"
export const TableBody = ({ data }) => {
  if (!data) {
    return (
      <tbody>
        <tr>
          <td>"нет данных!!!"</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((person) => (
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name || "нет данных"}</td>
          <td>{person.username || "нет данных"}</td>
          <td>{person.email || "нет данных"}</td>
          <td>
            {person.address.street || "нет данных"},{" "}
            {person.address.city || "нет данных"}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
