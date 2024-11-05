"use client";

import { CartIcon } from "@app/components/common";
import { useSingleProduct } from "@app/hooks/useSingleProduct";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Badge, Button, ButtonProps, Flex, Grid, GridItem, Heading, HStack, Image, Link, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Tag, Text } from "@chakra-ui/react";
import { ProductDetailSkeleton } from "../ProductDetailSkeleton";
import React from "react";
import { useStore } from "@app/hooks/useStore";


const buttonProps: ButtonProps = {
  borderRadius: 'unset',
  width: '100%'
}

function ProductDetail() {
  const { product, isLoading } = useSingleProduct();
  const { onAddToCart } = useStore();
  const quantityRef = React.useRef<HTMLInputElement | null>(null);

  if (!product || isLoading) {
    return <ProductDetailSkeleton />;
  }

  const hasDiscount = Boolean(product.discount);

  const onAddProduct = () => {
    onAddToCart({ ...product, quantity: Number(quantityRef.current!.value) })
  }

  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={'31px'}>
      <GridItem>
        <Image src={product.image} alt="placeholderimage" w={'100%'} />
      </GridItem>
      <GridItem>
        <Stack>
          <Heading>{product.name}</Heading>
          <Text fontWeight={'light'}>SKU: {product.sku}</Text>
          <Stack spacing={5} mt={'13px'}>
            <Heading size={'lg'} color={'#2e2e2ecc'}>
              <Text as='span' textDecor={hasDiscount ? 'line-through' : 'none'}>S/. {product.price.toFixed(2)}</Text> {
                hasDiscount && <Text as='span'> - S/. {product.totalPrice.toFixed(2)} <Badge fontSize={'large'} bgColor={'#feeb34'}>{product.discount}% off</Badge></Text>
              }
            </Heading>
            <HStack flexWrap={{ base: 'wrap' }}>
              {
                Boolean(product.quantity) && (
                  <Tag w={'fit-content'} colorScheme="green" borderRadius={'unset'}>
                    Disponible en stock
                  </Tag>
                )
              }
              {
                Boolean(product.discount) && (
                  <Tag w={'fit-content'} colorScheme="purple" borderRadius={'unset'}>
                    En descuento
                  </Tag>
                )
              }

              <Tag w={'fit-content'} colorScheme="orange" borderRadius={'unset'}>
                {product.category}
              </Tag>
            </HStack>
            <Stack spacing={5} mt={'13px'}>
              <Text fontSize={'13px'}>Vendido por <Link href="/" textDecor={'underline'}>Ferreteria Andina</Link></Text>
              <Text><Text as='span' fontWeight={'bold'}>Descripción:</Text> <br /> {product.description}</Text>
              <Flex align={'center'} gap={3}>
                <Text fontWeight={'bold'}>Cantidad: </Text>
                <NumberInput size='md' maxW={24} defaultValue={1} min={1}>
                  <NumberInputField ref={quantityRef} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </Stack>
          </Stack>

          <Flex mt={'31px'} gap={5} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Button {...buttonProps} leftIcon={<ArrowForwardIcon />} variant={'outline'} borderColor={'black'} _hover={{ bgColor: '#5F56F8', color: 'white', borderColor: 'transparent' }}>
              Comprar ahora
            </Button>
            <Button
              {...buttonProps}
              onClick={onAddProduct}
              leftIcon={<CartIcon />}
              bgColor={'black'}
              color={'white'}
              _hover={{ bgColor: '#feeb34', color: 'black' }}>
              Agregar al carrito
            </Button>
          </Flex>
        </Stack>
      </GridItem>
    </Grid >

  );
}

export { ProductDetail };

