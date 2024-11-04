'use client';

import { MainGrid } from "@app/components/common/Grid";
import { useStore } from "@app/hooks/useStore";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export function ProductsByCategory() {
  const { productsCat, isLoading } = useStore();


  const hasProducts = productsCat.length > 0;

  return (
    <React.Fragment>
      {
        hasProducts && (
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
            products={productsCat} />
        )
      }
      {
        !hasProducts && (
          <Flex margin={'auto'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} maxW={'50%'} gap={'31px'}>
            <Heading textAlign={'center'}>No hemos podido encontrar productos, en esta categoria puedes seguir explorando</Heading>
            <Button as={Link} href={'/tienda'} rightIcon={<ArrowForwardIcon />} bgColor={'black'} color={'white'} borderRadius={'unset'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
              Seguir explorando en la tienda
            </Button>
          </Flex>
        )
      }
    </React.Fragment>
  )
}