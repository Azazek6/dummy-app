import { ICart } from "@/types/product.type";

export const calculateItemTotal = (item: ICart) => {
  const discountedPrice = item.price * (1 - item.discountPercentage / 100);
  return discountedPrice * item.quantity;
};
