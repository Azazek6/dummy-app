import { toast } from "sonner";
import { create } from "zustand";
import { IProductStore } from "@/types/product.type";
import productService from "@/services/product.service";

const initialState = { products: [], cart: [] };

export const useProductStore = create<IProductStore>((set, get) => ({
  ...initialState,
  getProduct: async () => {
    try {
      const { data } = await productService.productRequest();
      set({ products: data.products });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
  addCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        toast.info("Cantidad actualizada en el carrito");
        return { cart: updatedCart };
      }

      toast.info("Producto agregado al carrito");
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },
  removeCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      toast.info("Producto eliminado del carrito");
      return { cart: updatedCart };
    });
  },
  updateQuantity: (productId: number, quantity: number) => {
    if (quantity <= 0) {
      get().removeCart(productId);
      return;
    }

    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return { cart: updatedCart };
    });
  },
  setCart: () => set({ cart: [] }),
}));
