


import { Button, ButtonGroup, Grid, GridItem, Heading, HStack, Image, Link, Skeleton, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';


function ProductDetailSkeleton() {

  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={'31px'}>
      <GridItem>
        <Skeleton minW={'100%'} minH={{ base: '343px', md: '653px' }}>
          <Image src={""} alt="placeholderimage" w={'100%'} />
        </Skeleton>
      </GridItem>
      <GridItem>
        <Stack spacing={2}>
          <Skeleton>
            <Heading>Lorem, ipsum dolor.</Heading>
          </Skeleton>
          <Skeleton>
            <Text fontWeight={'light'}>SKU:</Text>
          </Skeleton>
          <Skeleton>
            <Heading size={'lg'} color={'#2e2e2ecc'}>
              <Text as='span'>S/. 123</Text>
            </Heading>
          </Skeleton>
          <Skeleton >
            <Text>Vendido por <Link href="/" textDecor={'underline'}>Ferreteria Andina</Link></Text>
            <Text mt={'31px'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere fugiat, obcaecati dolorum doloribus maxime itaque natus qui, ipsa quibusdam deserunt, voluptates eaque eum incidunt non vitae est expedita debitis.</Text>
          </Skeleton>
          <Skeleton>
            <HStack>
              <Tag mt='31px' w={'fit-content'} colorScheme="green" borderRadius={'unset'}>
                Disponible en stock
              </Tag>
              <Tag mt='31px' w={'fit-content'} colorScheme="purple" borderRadius={'unset'}>
                En descuento
              </Tag>
            </HStack>
          </Skeleton>
          <Skeleton>
            <ButtonGroup mt={'31px'}>
              <Button variant={'outline'} borderColor={'black'} _hover={{ bgColor: '#5F56F8', color: 'white', borderColor: 'transparent' }}>
                Comprar ahora
              </Button>
              <Button bgColor={'black'} color={'white'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </Skeleton>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export { ProductDetailSkeleton };