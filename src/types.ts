export interface Product {
  id: string;
  image: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  category: string;
  categoryId: string;
  inventoryId: string;
  discountId: string | null;
  quantity: number;
  stock: number;
  discount: number;
  totalPrice: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}