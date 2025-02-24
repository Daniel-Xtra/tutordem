"use client";

import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContext = {
  membership_type: string | null;
  isAuthenticated: boolean;
  loginHandler: (payload: {
    isAuthenticated: boolean;
    membership_type: string;
  }) => Promise<void>;
  logoutHandler: () => void;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [membership_type, setMembership_type] = useState("parent");

  const router = useRouter();

  const loginHandler = async (payload: {
    isAuthenticated: boolean;
    membership_type: string;
  }) => {
    setIsAuthenticated(payload.isAuthenticated);
    setMembership_type(payload.membership_type);
    router.push("/dashboard/overview");
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setMembership_type("");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        membership_type,
        isAuthenticated,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside of a AuthProvider");
  }
  return context;
}
