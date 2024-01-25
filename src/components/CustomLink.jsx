import { Link } from "react-router-dom";

export const CustomLink = ({ id, props }) => {
  return (
 <>
      <Link to={`/users/${id}`}>{props}</Link>
 </>
  );
};