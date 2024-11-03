import { Product } from "@app/types";

export class ClientProductsService {

  static async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
      if (!response.ok) {
        return [];
      }
      const { products } = await response.json();
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static getProductsWithDiscount(products: Product[]) {
    return products.filter((product) => Boolean(product.discount));
  }
}