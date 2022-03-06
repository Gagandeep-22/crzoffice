import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedIn, setLogin] = useState(null);
  return (
    <AuthContext.Provider value={{ loggedIn, setLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};