import { Product } from '@app/types';
import { Flex, Grid, GridItem, GridProps, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { ProductCard } from '../ProductCard';
import { ProductCardPlaceholder } from '../ProductCardPlaceholder';



type MainGridProps = {
  products: Product[];
  isLoading: boolean;
  errorMessage?: string;
  gridProps: GridProps;
};

const PLACEHOLDER_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function MainGrid(props: MainGridProps) {
  return (
    <>
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
      {
        !props.isLoading && props.products.length === 0 && (
          <Flex margin={'auto'} minW={'600px'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} maxW={'50%'}>
            <Heading size={'md'} color={'#999898cc'} textAlign={'center'}>Lo sentimos</Heading>
            <Text>{props.errorMessage || "Hubo un error al cargar los productos"}</Text>
          </Flex>
        )
      }
    </>




  );
}

export { MainGrid };