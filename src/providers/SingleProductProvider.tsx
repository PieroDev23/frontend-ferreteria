"use client";

import { useStore } from "@app/hooks/useStore";
import { ClientProductsService } from "@app/services";
import { Product } from "@app/types";
import React from "react";


export type SingleProductContextValues = {
  product: Product | null;
  relatedProducts: Product[];
  isLoading: boolean;
}

export const SingleProductContext = React.createContext({} as SingleProductContextValues);
export function SingleProductProvider({ children, productId }: { children: React.ReactNode, productId: string }) {

  const [product, setProduct] = React.useState<Product | null>(null);
  const [relatedProducts, setRelatedProducs] = React.useState<Product[]>([]);
  const { products } = useStore();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (productId) {
      setIsLoading(true)
      ClientProductsService
        .getProductById(productId)
        .then(res => {
          setProduct(res)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
        .finally(() => setIsLoading(false))
    }
  }, [productId]);

  React.useEffect(() => {
    if (product) {
      setRelatedProducs(products.filter((p => p.categoryId === product.categoryId)).filter(p => p.id !== product.id))
    }
  }, [product, products]);

  return (
    <SingleProductContext.Provider value={{ product, isLoading, relatedProducts }}>
      {children}
    </SingleProductContext.Provider>
  )
}