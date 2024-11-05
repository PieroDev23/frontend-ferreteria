import { Button, Card, CardBody, CardFooter, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { CartIcon } from '../Icons';

function ProductCardPlaceholder() {
  return (
    <Card maxW='100%' position={'relative'}>
      <CardBody>
        <Skeleton
          borderRadius='lg'
          minH={'210px'}
        />
        <Stack mt='6' spacing='3'>
          <Skeleton>
            <Heading size='sm' noOfLines={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima repudiandae alias quidem impedit.</Heading>
          </Skeleton>
          <Skeleton>
            <Text noOfLines={2} fontSize={'13px'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, a! Est, id voluptate necessitatibus obcaecati officiis dignissimos.
            </Text>
          </Skeleton>
        </Stack>
      </CardBody>
      <CardFooter pt={0} flexDirection={'column'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'} >
          <Skeleton>
            <Text color={'black'} fontSize='13px' >
              Lorem, ipsum dolor.
            </Text>
          </Skeleton>
        </Flex>
        <Stack spacing={'16px'} mt={'31px'}>
          <Skeleton>
            <Button borderRadius={0} color={'white'} bgColor={'black'} fontSize={'13px'} height={'fit-content'} py={'8px'} leftIcon={<CartIcon />} _hover={{ bgColor: '#feeb34', color: 'black' }}>
              Agregar al carrito
            </Button>
          </Skeleton>
          <Skeleton maxH={'32px'}>
            <Button borderRadius={0}>
              Ver producto
            </Button>
          </Skeleton>
        </Stack>
      </CardFooter>
    </Card>
  );
}

export { ProductCardPlaceholder };
