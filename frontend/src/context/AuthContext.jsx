import { createContext, useContext, useEffect, useState } from "react";
import { verifyToken } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (!storedToken || !storedUser) {
        setLoading(false);
        return;
      }

      try {
        const response = await verifyToken();

        setToken(storedToken);
        setUser(response.user);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData, jwt) => {
    localStorage.setItem("token", jwt);

    localStorage.setItem("user", JSON.stringify(userData));

    setToken(jwt);

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
