"use client";

import { MainGrid } from '@app/components/common/Grid';
import { useSingleProduct } from '@app/hooks/useSingleProduct';
import { Box, Heading } from '@chakra-ui/react';



function RelatedProducts() {
  const { isLoading, relatedProducts } = useSingleProduct();
  return (
    <Box mt={'62px'}>
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
        products={relatedProducts} />
    </Box>
  );
}

export { RelatedProducts };
