import { Product } from '@app/types';
import { Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';




function ProductCard({ image, name, description, price, category, id }: Product) {
  return (
    <Card maxW='250px'>
      <CardBody>
        <Image
          src={image}
          alt={name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='sm' noOfLines={1}>{name}</Heading>
          <Text noOfLines={2} fontSize={'13px'}>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter pt={0} >
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
          <Text color={'black'} fontSize='13px' fontWeight={'bold'}>
            Precio S/. {price}
          </Text>
          <Link href={`/product/${category}/${id}`} style={{ backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '5px 15px', fontSize: '13px' }}>
            Ver más
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export { ProductCard };

