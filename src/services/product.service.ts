import { HOST_PRODUCT } from "@/config/constans";
import axios from "axios";

const productRequest = async () => {
  const { status, data } = await axios.get(`${HOST_PRODUCT}/products?limit=8`);
  return { status, data };
};

export default { productRequest };
