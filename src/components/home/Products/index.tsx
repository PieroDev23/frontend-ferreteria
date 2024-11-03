"use client";


import { ProductCard } from '@app/components/common';
import { ClientProductsService } from '@app/services';
import { Product } from '@app/types';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';



function ProductsSection() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    ClientProductsService
      .getProducts()
      .then(res => {
        setProducts(res);
      });
  }, []);

  return (
    <Box mt={'31px'} py={'31px'}>
      <Heading textAlign={'center'} mb={'13px'}>Nuestros productos mas recientes</Heading>
      <Grid maxW={'1400px'} margin={'auto'} py={'15px'} templateColumns={'repeat(5, 1fr)'} rowGap={5}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>
    </Box >
  );
}

export { ProductsSection };

