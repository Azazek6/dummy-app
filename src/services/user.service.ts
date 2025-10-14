import { HOST } from "@/config/constans";
import axios from "axios";

const profileRequest = async () => {
  const { status, data } = await axios.get(`${HOST}/users/profile`);
  return { status, data };
};

export default { profileRequest };
