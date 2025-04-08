import { create } from "zustand";

interface StoreState {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

const useSettingStore = create<StoreState>((set) => ({
  activeTab: "profile",
  setActiveTab: (activeTab: string) => set({ activeTab }),
}));

export default useSettingStore;
