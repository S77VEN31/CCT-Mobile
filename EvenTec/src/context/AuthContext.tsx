// React
import { createContext, useContext, useEffect, useState } from "react";
// Api Call
import axios from "axios";
// Secure Store
import * as SecureStore from "expo-secure-store";
// Routes
import { authRoutes } from "../api/routes/routes";
// Modal Context
import { useModal } from "./ModalContext";
interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null; data: any };
  onRegister: (
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => Promise<boolean>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const { handleModal } = useModal();
  const { loginRoute, logoutRoute, registerRoute } = authRoutes;
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    data: any;
  }>({
    token: null,
    authenticated: null,
    data: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      const data = await SecureStore.getItemAsync("user");
      console.log("token is:", token);
      console.log("data is:", data);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
          data: data ? JSON.parse(data) : null,
        });
      }
    };
    loadToken();
  }, []);

  const onRegister = async (
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => {
    try {
      const result = await axios.post(registerRoute, {
        email,
        password,
        userName,
        isOrganization,
      });
      return true;
    } catch (error: any) {
      handleModal(
        { ...error.response.data, code: error.response.status },
        "fade"
      );
      return false;
    }
  };

  const onLogin = async (email: string, password: string) => {
    try {
      const result = await axios.post(loginRoute, {
        email,
        password,
      });
      const cookie = result.headers["set-cookie"]?.[0] ?? "";
      const token = cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="))
        ?.split("=")[1];
      setAuthState({
        token: token || null,
        authenticated: true,
        data: result.data,
      });
      await SecureStore.setItemAsync("token", token || "");
      await SecureStore.setItemAsync("user", JSON.stringify(result.data));
      return result;
    } catch (error: any) {
      handleModal(
        { ...error.response.data, code: error.response.status },
        "fade"
      );
    }
  };

  const onLogout = async () => {
    await axios.post(logoutRoute, {});
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
      data: null,
    });
  };

  const value = {
    onRegister,
    onLogin,
    onLogout,
    authState,
  };

  return (
    <AuthContext.Provider value={value as AuthProps}>
      {children}
    </AuthContext.Provider>
  );
};
