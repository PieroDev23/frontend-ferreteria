"use client";

import { ClientProductsService } from "@app/services";
import { Product } from "@app/types";
import React from "react";


export type SingleProductContextValues = {
  product: Product | null;
  isLoading: boolean;
}

export const SingleProductContext = React.createContext({} as SingleProductContextValues);
export function SingleProductProvider({ children, productId }: { children: React.ReactNode, productId: string }) {
  const [product, setProduct] = React.useState<Product | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (productId) {
      setIsLoading(true)
      ClientProductsService
        .getProductById(productId)
        .then(res => {
          console.log(res)
          setProduct(res)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
        .finally(() => setIsLoading(false))
    }
  }, [productId]);

  return (
    <SingleProductContext.Provider value={{ product, isLoading }}>
      {children}
    </SingleProductContext.Provider>
  )
}