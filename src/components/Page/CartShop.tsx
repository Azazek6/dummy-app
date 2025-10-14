import { FaBagShopping } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus } from "lucide-react";
import Button from "../custom-ui/button";
import { useProductStore } from "@/store/product.store";
import { calculateItemTotal } from "@/helpers/general";

interface Props {
  children: React.ReactNode;
}

const CartShop = ({ children }: Props) => {
  const { cart, updateQuantity, removeCart } = useProductStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-black">
          <SheetTitle className="flex items-center gap-4 text-lg">
            <FaBagShopping className="text-[#2664eb]" />
            Carrito de Compras
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="space-y-4">
          {cart.map((item) => {
            const discountedPrice =
              item.price * (1 - item.discountPercentage / 100);
            return (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-[var(--color-surface)] rounded-lg"
              >
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-light)] mb-2">
                    {item.brand}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--color-primary)]">
                        S/ {discountedPrice.toFixed(2)}
                      </span>
                      {item.discountPercentage > 0 && (
                        <span className="text-xs text-[var(--color-text-light)] line-through">
                          S/ {item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-[var(--color-border)]">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-[var(--color-surface)] transition-colors rounded-l-lg"
                      >
                        <Minus className="w-4 h-4 text-[var(--color-text-muted)]" />
                      </button>
                      <span className="text-sm font-semibold text-[var(--color-text)] min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-[var(--color-surface)] transition-colors rounded-r-lg"
                      >
                        <Plus className="w-4 h-4 text-[var(--color-text-muted)]" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeCart(item.id)}
                      className="text-xs text-red-500 hover:text-red-600 font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <div className="flex items-center justify-between text-sm">
            <p>Subtotal</p>
            <p className="font-semibold">S/ {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-lg font-bold">
            <p>Total</p>
            <p className="text-[#2664eb]">S/ {subtotal.toFixed(2)}</p>
          </div>
          <Button
            title="Solicitar Pedido"
            className="bg-[#2664eb] text-white text-sm tracking-wider font-bold mt-2"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartShop;
