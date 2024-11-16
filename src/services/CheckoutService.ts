
export type Order = {
  userId: string | null,
  totalAmount: number;
  items: {
    productId: string;
    quantity: number;
    categoryId: string;
    price: number;
  }[];
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
}

export class CheckoutService {
  static async createOrder(payload: Order) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.log(error);
      return null
    }
  }
}