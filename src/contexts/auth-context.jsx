import { createContext, useContext } from "react";
import { useReducer } from "react";
import { getLocalStorageData } from "../utils/getLocalStorageData";
import { authReducer } from "../utils/reducers/authReducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const { token, userData } = getLocalStorageData();

  let initialState = { isAuthenticated: false, userData: "", token: "" };

  if (token && userData) {
    initialState = { isAuthenticated: true, userData: userData, token: token };
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
