import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const { state } = useAuth();
  const location = useLocation();
 
  return state.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export { RequiresAuth };
