"use client";

import { MainGrid } from '@app/components/common/Grid';
import { useStore } from '@app/hooks/useStore';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';



function ProductsWithDiscountSection() {

  const { productsWithDiscount, isLoading } = useStore();

  return (
    <Box my={'31px'} py={'31px'} px={'31px'}>
      <Heading textAlign={'center'} mb={'13px'}>Productos con descuentos</Heading>
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
          products={productsWithDiscount.slice(0, 15)} />
      </Box>
      <Flex justifyContent={'center'} mt={'31px'}>
        <Button borderRadius={'unset'} rightIcon={<ArrowForwardIcon />} bgColor={'#feeb34'}>
          Explora nuestra tienda
        </Button>
      </Flex>
    </Box >
  );
}

export { ProductsWithDiscountSection };

