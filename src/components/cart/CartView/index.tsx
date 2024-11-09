'use client';

import { useStore } from '@app/hooks/useStore';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { CartTable } from '../CartTable';

export function CartView() {
  const { cartQuantity, cart, isLoading } = useStore();

  const cartIsEmpty = cart.length === 0;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (isLoading) {
    return <Card bgColor={'white'} p={8} w={'100%'} minH={'500px'} display={'flex'} align={'center'} justify={'center'}>
      <Spinner />
    </Card>;
  }

  return (
    <Card bgColor={'white'} p={8} w={'100%'} minH={'500px'}>

      {
        !cartIsEmpty && (
          <React.Fragment>
            <Heading as="h2" size="lg" mb={5} >
              Mi Carrito
            </Heading>
            <Flex>
              <Box flexBasis={'70%'}>
                <CartTable />
              </Box>
              <Box flexBasis={'30%'}>
                <Stack spacing={2} h={'100%'}>
                  <Stack spacing={5}>
                    <Heading size={'md'}>Subtotal: S/. {subtotal.toFixed(2)}</Heading>
                    <Text>Cantidad de productos: {cartQuantity}</Text>
                    <Text>Descuento: SIN DESCUENTO</Text>
                    <Text>Total: S/. {subtotal.toFixed(2)}</Text>
                  </Stack>
                  <Flex flexDir={'column'} gap={5} mt={'31px'}>
                    <Button w={'100%'} as={Link} href={'/checkout'} borderRadius={'unset'} bgColor={'#feeb34'} color={'black'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
                      Continuar a pagar
                    </Button>
                    <Button w={'100%'} as={Link} href={'/tienda'} borderColor={'black'} variant={'outline'} borderRadius={'unset'} color={'black'} _hover={{ bgColor: 'black', color: 'white' }}>
                      Seguir comprando
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </Flex>
          </React.Fragment>
        )
      }
      {
        cartIsEmpty && (
          <Flex h={'100%'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={'31px'}>
            <Heading textAlign={'center'}>No tienes productos en tu carrito</Heading>
            <Text fontWeight={'thin'}>Actualmente no cuentas con productos en el carrito.</Text>
            <Button as={Link} href={'/tienda'} rightIcon={<ArrowForwardIcon />} bgColor={'black'} color={'white'} borderRadius={'unset'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
              Compra productos en nuestra tienda
            </Button>
          </Flex>
        )
      }
    </Card>
  );
};

