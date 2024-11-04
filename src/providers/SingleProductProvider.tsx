"use client";

import { useStore } from "@app/hooks/useStore";
import { ClientProductsService } from "@app/services";
import { Product } from "@app/types";
import React from "react";


export type SingleProductContextValues = {
  product: Product | null;
}

export const SingleProductContext = React.createContext({} as SingleProductContextValues);
export function SingleProductProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = React.useState<Product | null>(null);

  const { productId } = useStore();

  React.useEffect(() => {
    if (productId) {
      ClientProductsService
        .getProductById(productId)
        .then(res => setProduct(res));
    }
  }, [productId]);

  return (
    <SingleProductContext.Provider value={{ product }}>
      {children}
    </SingleProductContext.Provider>
  )
}