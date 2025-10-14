import { toast } from "sonner";
import { create } from "zustand";
import userService from "../services/user.service";
import { IUserStore } from "@/types/user.type";

const initialState = { profile: null };

export const useUserStore = create<IUserStore>((set) => ({
  ...initialState,
  getProfile: async () => {
    try {
      const { data } = await userService.profileRequest();
      set({ profile: data });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
}));
