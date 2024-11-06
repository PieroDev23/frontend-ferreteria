"use client";

import { ClientProductsService } from "@app/services";
import { Category, Product } from "@app/types";
import React, { PropsWithChildren } from "react";


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
}

export const StoreContext = React.createContext({} as StoreContextValue);

export function StoreProvider({ children }: PropsWithChildren) {

  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [productsWithDiscount, setProductsWithDiscount] = React.useState<Product[]>([]);
  const [productsCat, setProductsCat] = React.useState<Product[]>([]);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [productId, setProductId] = React.useState('');
  const [cart, setCart] = React.useState<Product[]>([]);
  const [cartQuantity, setCartQuantity] = React.useState(0);

  React.useEffect(() => {
    ClientProductsService.getProducts()
      .then(res => {
        setProducts(res);
        setProductsWithDiscount(ClientProductsService.getProductsWithDiscount(res));
        setIsLoading(false);
      }).catch(() => setIsLoading(false));

    ClientProductsService.getProductsCategories()
      .then(res => {
        setCategories(res);
      }).catch(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    const filterProductByCategory = () => products.filter(c => c.categoryId === category?.id);

    if (category) {
      const productsCategory = filterProductByCategory()
      setProductsCat(productsCategory);
    }

  }, [category, products]);

  React.useEffect(() => {
    if (cart.length >= 0) {
      setCartQuantity(cart.reduce((prev, current) => prev + current.quantity, 0))
    }
  }, [cart])

  const onSetCategory = (id: string) => {
    const category = categories.find(c => c.id === id);
    setCategory(category || null);
  }

  const onSetProductId = (id: string) => setProductId(id);

  const onAddToCart = (product: Product) => {
    const productRepeatedFinded = cart.find(p => p.id === product.id);

    if (productRepeatedFinded) {
      setCart(cart.map(p => p.id === productRepeatedFinded.id ? { ...p, quantity: p.quantity + product.quantity } : p));
      return;
    }

    setCart(prev => [...prev, product]);
  }

  const onDeleteCart = (product: Product) => {
    setCart(prev => prev.filter(p => p.id !== product.id));
  }

  return (
    <StoreContext.Provider value={{
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
      onDeleteCart
    }}>
      {children}
    </StoreContext.Provider>
  )
}