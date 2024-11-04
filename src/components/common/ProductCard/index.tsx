'use client';

import { Product } from '@app/types';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CartIcon } from '../Icons';
import { useStore } from '@app/hooks/useStore';




function ProductCard({ image, name, description, totalPrice, categoryId, id, price, discount }: Product) {
  const hasDiscount = Boolean(discount);
  const {} = useStore();
  return (
    <Card maxW='100%' position={'relative'}>
      {
        hasDiscount && (
          <Box bgColor={'#5F56F8'} color={'white'} position={'absolute'} width={'fit-content'} p={'5px'} fontWeight={'bold'} fontSize={'13px'}>
            {discount}% de descuento
          </Box>
        )
      }
      <CardBody>
        <Image
          src={image}
          alt={name}
          margin={'auto'}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='sm' noOfLines={1}>{name}</Heading>
          <Text noOfLines={1} fontSize={'13px'}>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter pt={0} flexDirection={'column'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'} >
          <Text color={'black'} fontSize='13px' >
            Precio: {" "}
            <Text as='span' textDecor={hasDiscount ? 'line-through' : ''}>S/. {Math.floor(price)}</Text>
            <Text as='span' fontWeight={!hasDiscount ? '' : 'bold'}>{hasDiscount && `- S/. ${Math.floor(totalPrice)}`}</Text>
          </Text>
        </Flex>
        <Stack spacing={'16px'} mt={'31px'}>
          <Button borderRadius={0} color={'white'} bgColor={'black'} fontSize={'13px'} height={'32px'} py={'8px'} rightIcon={<CartIcon />} _hover={{ bgColor: '#feeb34', color: 'black' }}>
            Agregar al carrito
          </Button>
          <Button borderRadius={0}
            variant={'outline'}
            as={Link}
            href={`tienda/category/${categoryId}/product/${id}`}
            fontSize={'13px'}
            height={'32px'}
            py={'8px'}
            rightIcon={<ArrowForwardIcon />}
            borderColor={'black'}>
            Ver producto
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}

export { ProductCard };

