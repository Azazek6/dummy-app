import { toast } from "sonner";
import { create } from "zustand";
import { IOrderStore } from "@/types/order.type";
import productService from "@/services/product.service";
import { useProductStore } from "./product.store";

const initialState = { orders: [] };

export const useOrderStore = create<IOrderStore>((set) => ({
  ...initialState,
  addOrder: async (order) => {
    try {
      const { data } = await productService.createOrderRequst(order);
      toast.success(data.message);
      useProductStore.getState().setCart();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
  getOrder: async () => {
    try {
      const { data } = await productService.ordersRequest();
      set({ orders: data });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
}));
