import { Product } from '@app/types';
import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import React from 'react';
import { ProductCard } from '../ProductCard';
import { ProductCardPlaceholder } from '../ProductCardPlaceholder';



type MainGridProps = {
  products: Product[];
  isLoading: boolean;
  gridProps: GridProps;
};

const PLACEHOLDER_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function MainGrid(props: MainGridProps) {
  return (
    <Grid {...props.gridProps}>
      {
        !props.isLoading && props.products.map(product => (
          <GridItem key={product.id}>
            <ProductCard {...product} />
          </GridItem>
        ))
      }
      {
        props.isLoading && PLACEHOLDER_ITEMS.map(placeholder => (
          <GridItem key={placeholder}>
            <ProductCardPlaceholder />
          </GridItem>
        ))
      }
    </Grid>
  );
}

export { MainGrid };