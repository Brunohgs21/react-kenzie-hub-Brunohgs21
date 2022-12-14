import { createContext, useState, useEffect } from "react";
import { api } from "./../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("Token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function login(data) {
    try {
      const response = await api.post("sessions", data);

      const { token, user: userResponse } = response.data;

      setUser(userResponse);

      localStorage.setItem("Token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ login, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
