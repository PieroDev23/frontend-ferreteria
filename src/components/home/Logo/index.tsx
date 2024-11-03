import { Box } from '@chakra-ui/react';
import Image from 'next/image';


function Logo() {

  return (
    <Box>
      <Image width={90} height={0} src={'https://lirp.cdn-website.com/d09f5f55/dms3rep/multi/opt/2411002-Captura_de_Pantalla_2020-09-09_a_la%28s%29_15.50.23-16790-1920w.png'} alt='logo' />
    </Box>
  );
}

export { Logo };
