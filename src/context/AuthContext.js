import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await SecureStore.getItemAsync("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const login = async (userData) => {
    setUser(userData);
    await SecureStore.setItemAsync("user", JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    await SecureStore.deleteItemAsync("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
