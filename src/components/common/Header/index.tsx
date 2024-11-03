import { CartMenu, Logo, MainNavMenu, SearchProduct } from '@app/components/home';
import { Flex } from '@chakra-ui/react';



function MainHeader() {
  return (
    <Flex as='header' bgColor={'#feeb34'} minH='70px' alignItems={'center'} justifyContent={'space-between'} px='31px'>
      <Logo />
      <Flex gap={'31px'} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
        <SearchProduct />
        <MainNavMenu />
        <CartMenu />
      </Flex>
    </Flex>
  );
}

export { MainHeader };

