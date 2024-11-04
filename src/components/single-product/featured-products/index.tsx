import { MainGrid } from '@app/components/common/Grid';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

type FeaturedProductsProps = {
  someVar?: boolean;
  someFn?: (param: boolean) => void;
};

function FeaturedProducts(props: FeaturedProductsProps) {
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
        isLoading={true}
        products={[]} />
    </Box>
  );
}

export { FeaturedProducts };