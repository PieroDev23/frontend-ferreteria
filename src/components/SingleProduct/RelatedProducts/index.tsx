"use client";

import { MainGrid } from '@app/components/common/Grid';
import { useStore } from '@app/hooks/useStore';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';



function RelatedProducts() {
  const { productsCat, isLoading, productId } = useStore();
  return (
    <Box mt={'31px'}>
      <Heading textAlign={'center'} mb={'31px'}>Productos recomendados</Heading>
      <MainGrid gridProps={{
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
        products={productsCat.filter(p => p.id !== productId)} />
    </Box>
  );
}

export { RelatedProducts };