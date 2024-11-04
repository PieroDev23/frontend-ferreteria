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
  productId: string;
  onSetCategory: (id: string) => void;
  onSetProductId: (id: string) => void;
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

  React.useEffect(() => {
    ClientProductsService.getProducts()
      .then(res => {
        setProducts(res);
        setProductsWithDiscount(ClientProductsService.getProductsWithDiscount(res));
      });
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    ClientProductsService.getProductsCategories()
      .then(res => {
        setCategories(res);
        setIsLoading(false)
      }).catch(() => setIsLoading(false))
  }, []);

  React.useEffect(() => {
    if (category) {
      const productsCategory = products.filter(c => c.categoryId === category?.id);
      setProductsCat(productsCategory);
    }
  }, [category])

  const onSetCategory = (id: string) => {
    const category = categories.find(c => c.id === id);
    console.log({ category });
    setCategory(category || null);
  }

  const onSetProductId = (id: string) => setProductId(id);

  return (
    <StoreContext.Provider value={{ productsWithDiscount, isLoading, categories, products, category, productsCat, productId, onSetCategory, onSetProductId }}>
      {children}
    </StoreContext.Provider>
  )
}