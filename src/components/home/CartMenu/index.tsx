"use client";

import { CartIcon, PersonIcon } from '@app/components/common/Icons';
import { useStore } from '@app/hooks/useStore';
import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

function CartMenu() {
  const { cartQuantity } = useStore();
  return (
    <Flex gap={'13px'}>
      <Link as={NextLink} href={'/login'}>
        <PersonIcon />
      </Link>
      <Link as={NextLink} href={'/carrito'} position={'relative'}>
        <CartIcon />
        {
          cartQuantity > 0 && (
            <Box
              fontSize={'13px'}
              top={'-15px'}
              right={'-25px'}
              position={'absolute'}
              borderRadius={'100%'}
              w={'25px'}
              h={'25px'}
              bgColor={'red'}
              color={'white'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {cartQuantity}
            </Box>
          )
        }
      </Link>
    </Flex>
  );
}

export { CartMenu };