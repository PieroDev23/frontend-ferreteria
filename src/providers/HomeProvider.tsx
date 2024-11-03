"use client";

import { ClientProductsService } from "@app/services";
import { Product } from "@app/types";
import React, { PropsWithChildren } from "react";



type HomeCtxValue = {
  products: Product[];
  productsWithDiscount: Product[];
  isLoading: boolean;
}

export const HomeContext = React.createContext({} as HomeCtxValue);

export function HomeProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [productsWithDiscount, setProductsWithDiscount] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    ClientProductsService
      .getProducts()
      .then(res => {
        setProducts(res.slice(0, 15));
        setProductsWithDiscount(
          ClientProductsService
            .getProductsWithDiscount(res)
            .slice(0, 15)
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <HomeContext.Provider value={{ products, productsWithDiscount, isLoading }}>
      {children}
    </HomeContext.Provider>
  )
}