"use client";

import { CartIcon } from "@app/components/common";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, ButtonProps, Grid, GridItem, Heading, HStack, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";


const buttonProps: ButtonProps = {
  borderRadius: 'unset',
  width: '100%'
}

function ProductDetail() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={'31px'}>
      <GridItem>
        <Image src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/2427311_01/w=800,h=800,fit=pad" alt="placeholderimage" w={'100%'} />
      </GridItem>
      <GridItem>
        <Stack spacing={2}>
          <Heading>Title</Heading>
          <Text fontWeight={'light'}>SKU: 1231982773ALK</Text>
          <Heading size={'lg'} color={'#2e2e2ecc'}>
            <Text>S/. 499.00</Text>
          </Heading>
          <Text>Vendido por <Link href="/" textDecor={'underline'}>Ferreteria Andina</Link></Text>
          <Text mt={'31px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet rem reiciendis doloremque, nulla modi tempore neque maxime quisquam delectus labore obcaecati minus officia, esse voluptates. Architecto nihil delectus voluptas?</Text>
          <HStack>
            <Tag mt='31px' w={'fit-content'} colorScheme="green" borderRadius={'unset'}>
              Disponible en stock
            </Tag>
            <Tag mt='31px' w={'fit-content'} colorScheme="purple" borderRadius={'unset'}>
              En descuento
            </Tag>
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
    </Grid>

  );
}

export { ProductDetail };