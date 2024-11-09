"use client";

import { ClientProductsService } from "@app/services";
import { Category, Product } from "@app/types";
import React, { PropsWithChildren, useEffect } from "react";

export type StoreContextValue = {
  isLoading: boolean;
  categories: Category[];
  category: Category | null;
  products: Product[];
  productsWithDiscount: Product[];
  productsCat: Product[];
  cart: Product[];
  cartQuantity: number;
  productId: string;
  onSetCategory: (id: string) => void;
  onSetProductId: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onDeleteCart: (product: Product) => void;
};

export const StoreContext = React.createContext({} as StoreContextValue);

export function StoreProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [productsWithDiscount, setProductsWithDiscount] = React.useState<Product[]>([]);
  const [productsCat, setProductsCat] = React.useState<Product[]>([]);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [productId, setProductId] = React.useState("");

  // Inicializar el carrito con los datos de localStorage o un array vacío si no hay datos
  const [cart, setCart] = React.useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cart");
      return cartData ? JSON.parse(cartData) : [];
    }
    return [];
  });

  const [cartQuantity, setCartQuantity] = React.useState(0);

  // Guardar los datos del carrito en localStorage cuando cambie
  useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    ClientProductsService.getProducts()
      .then((res) => {
        setProducts(res);
        setProductsWithDiscount(ClientProductsService.getProductsWithDiscount(res));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));

    ClientProductsService.getProductsCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const filterProductByCategory = () => products.filter((c) => c.categoryId === category?.id);

    if (category) {
      const productsCategory = filterProductByCategory();
      setProductsCat(productsCategory);
    }
  }, [category, products]);

  useEffect(() => {
    setCartQuantity(cart.reduce((prev, current) => prev + current.quantity, 0));
    setCartQuantity(cart.reduce((prev, current) => prev + current.quantity, 0));
  }, [cart]);

  const onSetCategory = (id: string) => {
    const category = categories.find((c) => c.id === id);
    setCategory(category || null);
  };

  const onSetProductId = (id: string) => setProductId(id);

  const onAddToCart = (product: Product) => {
    const productRepeatedFinded = cart.find((p) => p.id === product.id);

    if (productRepeatedFinded) {
      setCart(
        cart.map((p) =>
          p.id === productRepeatedFinded.id ? { ...p, quantity: p.quantity + product.quantity } : p
        )
      );
      return;
    }

    setCart((prev) => [...prev, product]);
  };

  const onDeleteCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <StoreContext.Provider
      value={{
        productsWithDiscount,
        cartQuantity,
        isLoading,
        categories,
        products,
        category,
        productsCat,
        productId,
        cart,
        onSetCategory,
        onSetProductId,
        onAddToCart,
        onDeleteCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

