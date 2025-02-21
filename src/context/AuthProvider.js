import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithGoogle, signOut } from "../api/googleAuth";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = await EncryptedStorage.getItem("authToken");
      if (token) {
        // Gọi API lấy thông tin người dùng từ token
        const response = await fetch(
          "https://wizlab.io.vn:12345/api/v1/auth/login/google/oauth",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
