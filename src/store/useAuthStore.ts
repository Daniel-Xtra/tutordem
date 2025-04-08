import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  isAuthenticated: boolean;
  membershipType: string;
}

interface StoreState {
  user: User;
  loginHandler: (payload: User) => void;
  logoutHandler: () => void;
}

const useAuthStore = create<StoreState>()(
  persist<StoreState>(
    (set) => ({
      user: { isAuthenticated: false, membershipType: "" },

      loginHandler: (payload: User) => {
        set({ user: payload });
      },

      logoutHandler: () => {
        // set((state) => ({
        //   user: { ...state.user, isAuthenticated: false },
        // }));
        set({ user: { isAuthenticated: false, membershipType: "" } });
      },
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;
