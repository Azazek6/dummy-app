import { ICart } from "@/types/product.type";

export const calculateItemTotal = (item: ICart) => {
  const discountedPrice = item.price * (1 - item.discountPercentage / 100);
  return discountedPrice * item.quantity;
};

export const getStatusText = (status: string) => {
  switch (status) {
    case "completado":
      return "Completado";
    case "En proceso":
      return "En Proceso";
    case "cancelado":
      return "Cancelado";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "completado":
      return "bg-green-50 text-[var(--color-success)] border-green-200";
    case "En proceso":
      return "bg-orange-50 text-[#eda654] border-orange-200";
    case "cancelado":
      return "bg-red-50 text-red-500 border-red-200";
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
