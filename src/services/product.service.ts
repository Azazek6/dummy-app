import { HOST, HOST_PRODUCT } from "@/config/constans";
import { IOrder } from "@/types/order.type";
import axios from "axios";

const productRequest = async () => {
  const { status, data } = await axios.get(`${HOST_PRODUCT}/products?limit=8`);
  return { status, data };
};

const createOrderRequst = async (order: IOrder) => {
  const { status, data } = await axios.post(`${HOST}/orders/generate`, order);
  return { status, data };
};

const ordersRequest = async () => {
  const { status, data } = await axios.get(`${HOST}/orders`);
  return { status, data };
};

export default { productRequest, createOrderRequst, ordersRequest };
