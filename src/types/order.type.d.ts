import { ICart, IProduct } from "./product.type";

export interface IOrderStore {
  addOrder: (o: IOrder) => Promise<void>;
  getOrder: () => Promise<void>;
  orders: [] | Array<IOrder>;
}

interface IOrder {
  order_id?: number;
  user?: { name: string };
  orders: Array<ICart>;
  total: number;
  status: string;
  createdAt: string
}
