export interface IProductStore {
  getProduct: () => Promise<void>;
  addCart: (p: IProduct) => void;
  removeCart: (id: number) => void;
  updateQuantity: (id: number, q: number) => void;
  setCart: () => void
  products: [] | Array<IProduct>;
  cart: [] | Array<ICart>;
}

export interface IProduct {
  id: number;
  discountPercentage: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
  sku: string
}

interface ICart extends IProduct {
  quantity: number;
  total?: number
}
