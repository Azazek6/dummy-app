import Image from "next/image";
import React from "react";
import Button from "../custom-ui/button";
import { IProduct } from "@/types/product.type";
import { useProductStore } from "@/store/product.store";

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const { addCart } = useProductStore();
  const finalPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="w-full relative border border-black rounded-[.6rem] flex flex-col gap-4 p-4">
      <div className="absolute">
        <span className="bg-[#fa7516] text-white font-bold px-4 py-1 rounded-[.4rem] tracking-wide">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>
      <Image
        width={1000}
        height={1000}
        priority
        src={product.thumbnail}
        alt="image"
      />
      <div className="flex flex-col text-sm font-semibold">
        <p className="text-xs uppercase">{product.brand}</p>
        <p>{product.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[#2664eb] text-lg font-semibold">
          S/ {finalPrice.toFixed(2)}
        </p>
        <p className="line-through text-sm pt-1">S/ {product.price}</p>
      </div>
      <Button
        handleClick={() => addCart(product)}
        title="Agregar al carrito"
        className="bg-[#2664eb] text-white font-semibold"
      />
    </div>
  );
};

export default ProductCard;
