import { CartIcon, PersonIcon } from '@app/components/common/Icons';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function CartMenu() {

  return (
    <Flex gap={'13px'}>
      <Link href={'login'}>
        <PersonIcon />
      </Link>
      <Link href={'carrito'}>
        <CartIcon />
      </Link>
    </Flex>
  );
}

export { CartMenu };