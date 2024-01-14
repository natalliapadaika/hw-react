import { Link } from "react-router-dom";

export const CustomLink = ({ id, props }) => {
  return (
    <div>
      <Link to={`/users/${id}`}>{props}</Link>
    </div>
  );
};
