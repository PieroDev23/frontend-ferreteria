"use client";

import { MainGrid } from "@app/components/common/Grid";
import { useStore } from "@app/hooks/useStore";
import React from "react";



export function StoreProducts() {
  const { isLoading, products } = useStore();

  return (
    <MainGrid
      gridProps={{
        margin: 'auto',
        rowGap: 5,
        columnGap: 5,
        templateColumns: {
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }
      }}
      isLoading={isLoading}
      products={products} />
  )
}