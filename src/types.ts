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
  discount: number;
  totalPrice: number;
}