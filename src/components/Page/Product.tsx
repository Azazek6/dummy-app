import React from "react";
import ProductCard from "../card/ProductCard";
import { useProductStore } from "@/store/product.store";

const Product = () => {
  const { products } = useProductStore();

  return (
    <section id="products" className="grid grid-cols-1 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
};

export default Product;
