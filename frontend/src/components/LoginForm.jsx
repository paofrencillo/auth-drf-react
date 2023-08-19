import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function LoginForm() {
  const { loginUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <form onSubmit={loginUser}>
          <input type="text" name="user" id="user" placeholder="Username" />
          <input type="password" name="pass" id="pass" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
