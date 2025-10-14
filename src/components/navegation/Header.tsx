"use client";
import React from "react";
import Link from "next/link";
import { CarIcon as CartIcon } from "lucide-react";
import CartShop from "../Page/CartShop";
import { useProductStore } from "@/store/product.store";

const Header = () => {
  const { cart } = useProductStore();

  const totalCar = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#f0f0f0] flex items-center justify-between p-3 z-50 shadow-md">
      <Link href={"/"} className="font-bold text-xl md:text-2xl">
        <h1>DMShop</h1>
      </Link>
      <Link
        href={"/my-orders"}
        className="text-sm md:text-base font-semibold text-gray-700"
      >
        <h3>Mis compras</h3>
      </Link>
      <CartShop>
        <button className="relative p-2 hover:bg-[var(--color-surface)] rounded-lg transition-colors">
          <CartIcon className="w-5 md:w-8 h-5 md:h-7  text-[var(--color-text-muted)]" />
          {totalCar > 0 && (
            <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalCar}
            </span>
          )}
        </button>
      </CartShop>
    </div>
  );
};

export default Header;
