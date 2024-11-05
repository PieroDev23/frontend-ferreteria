"use client";

import { MainGrid } from '@app/components/common/Grid';
import { useStore } from '@app/hooks/useStore';
import { Box, Heading } from '@chakra-ui/react';

function ProductsSection() {
  const { products, isLoading } = useStore();
  return (
    <Box mt={'31px'} py={'31px'} px={'31px'}>
      <Heading textAlign={'center'} mb={'13px'}>Nuestros productos mas recientes</Heading>
      <Box maxW={'1400px'} margin={'auto'}>
        <MainGrid
          gridProps={{
            margin: 'auto',
            mt: '31px',
            py: '15px',
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
          products={products.slice(0, 15)} />
      </Box>
    </Box >
  );
}

export { ProductsSection };

