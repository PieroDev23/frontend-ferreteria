import { Category, Product } from "@app/types";

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

  static async getProductsCategories(): Promise<Category[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);

    if (!response.ok) {
      return [];
    }

    const { categories } = await response.json();
    return categories;
  }

  static async getProductById(idProduct: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${idProduct}`);

    if (!response.ok) {
      return null;
    }

    const { product } = await response.json();
    return product;
  }

  static getProductsWithDiscount(products: Product[]) {
    return products.filter((product) => Boolean(product.discount));
  }
}