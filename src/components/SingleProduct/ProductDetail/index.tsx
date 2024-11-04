"use client";

import { CartIcon } from "@app/components/common";
import { useSingleProduct } from "@app/hooks/useSingleProduct";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, ButtonProps, Grid, GridItem, Heading, HStack, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";
import { ProductDetailSkeleton } from "../ProductDetailSkeleton";


const buttonProps: ButtonProps = {
  borderRadius: 'unset',
  width: '100%'
}

function ProductDetail() {
  const { product, isLoading } = useSingleProduct();

  if (!product || isLoading) {
    return <ProductDetailSkeleton />;
  }

  const hasDiscount = Boolean(product.discount);

  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={'31px'}>
      <GridItem>
        <Image src={product.image} alt="placeholderimage" w={'100%'} />
      </GridItem>
      <GridItem>
        <Stack spacing={2}>
          <Heading>{product.name}</Heading>
          <Text fontWeight={'light'}>SKU: {product?.sku}</Text>
          <Heading size={'lg'} color={'#2e2e2ecc'}>
            <Text as='span' textDecor={hasDiscount ? 'line-through' : 'none'}>S/. {product.price.toFixed(2)}</Text> {
              hasDiscount && <Text as='span'> - S/. {product.totalPrice.toFixed(2)}</Text>
            }
          </Heading>
          <Text>Vendido por <Link href="/" textDecor={'underline'}>Ferreteria Andina</Link></Text>
          <Text mt={'31px'}>{product.description}</Text>
          <HStack>
            {
              Boolean(product.quantity) && (
                <Tag mt='31px' w={'fit-content'} colorScheme="green" borderRadius={'unset'}>
                  Disponible en stock ({product.quantity})
                </Tag>
              )
            }
            {
              Boolean(product.discount) && (
                <Tag mt='31px' w={'fit-content'} colorScheme="purple" borderRadius={'unset'}>
                  En descuento ({product.discount}%)
                </Tag>
              )
            }
          </HStack>
          <ButtonGroup mt={'31px'}>
            <Button {...buttonProps} leftIcon={<ArrowForwardIcon />} variant={'outline'} borderColor={'black'} _hover={{ bgColor: '#5F56F8', color: 'white', borderColor: 'transparent' }}>
              Comprar ahora
            </Button>
            <Button {...buttonProps} leftIcon={<CartIcon />} bgColor={'black'} color={'white'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </Stack>
      </GridItem>
    </Grid >

  );
}

export { ProductDetail };
