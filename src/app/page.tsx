"use client";
import Product from "@/components/Page/Product";
import Welcome from "@/components/Page/Welcome";
import { useProductStore } from "@/store/product.store";
import { useUserStore } from "@/store/user.store";
import React, { useEffect } from "react";

const Home = () => {
  const { getProfile } = useUserStore();
  const { getProduct } = useProductStore();

  useEffect(() => {
    getProfile();
    getProduct();
  }, []);
  return (
    <>
      <Welcome />
      <Product />
    </>
  );
};

export default Home;
