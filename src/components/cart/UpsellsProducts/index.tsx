"use client";

import { MainGrid } from "@app/components/common/Grid";
import { useStore } from "@app/hooks/useStore";
import { Heading, Stack } from "@chakra-ui/react";





export function UpsellsProducts() {
  const { isLoading, products } = useStore();

  return (
    <Stack spacing={8}>
      <Heading textAlign={'center'}>Llévate esto también</Heading>
      <MainGrid
        gridProps={{
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
        products={products.slice(0, 5)} />
    </Stack>
  )
}