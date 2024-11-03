import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';



function MainNavMenu() {

  return (
    <Flex gap={'13px'} fontWeight={'600'} >
      <Link href={'/inicio'}>Inicio</Link>
      <Link href={'/tienda'}>Tienda</Link>
      <Link href={'/categorias'}>Categorias</Link>
      <Link href={'/Servicios'}>Servicios</Link>
    </Flex>
  );
}

export { MainNavMenu };