import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function HomePage() {
  const { user } = useContext(AuthContext);
  return <div>Welcome, {user.name}!</div>;
}
