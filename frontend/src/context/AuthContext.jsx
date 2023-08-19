import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  //   const storedAuthTokens = localStorage.getItem("authTokens");
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("authTokens") != null) {
      const token = JSON.parse(localStorage.getItem("authTokens"));
      return jwt_decode(token["access"]);
    } else return null;
  });

  const navigate = useNavigate();
  const apiURL = "http://127.0.0.1:8000/api/token/";

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.user.value,
          password: e.target.pass.value,
        }),
      });

      const data = await response.json();
      if (response.status == 401) {
        alert(data.detail);
      } else if (response.status == 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        console.log(user);
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
