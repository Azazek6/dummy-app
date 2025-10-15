"use client";
import Description from "@/components/Page/Order/Description";
import ProductOrder from "@/components/Page/Order/ProductOrder";
import { useOrderStore } from "@/store/order.store";
import React, { useEffect } from "react";

const Order = () => {
  const { getOrder } = useOrderStore();

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <Description />
      <ProductOrder />
    </>
  );
};

export default Order;
