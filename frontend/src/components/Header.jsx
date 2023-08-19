import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> || </span>
      <Link to="/login">Login</Link>
    </div>
  );
}
