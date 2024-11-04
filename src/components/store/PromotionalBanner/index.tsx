import { Box, Image } from '@chakra-ui/react';
import React from 'react';



function PromotionalBanner() {

  return (
    <Box mt={'31px'}>
      <Image
        src="https://images.falabella.com/v3/assets/blt6a82e9c0570891fd/blt88ec11ea40b00735/671f31efe695386f8ca65ee6/BANER-DKP-NAVIDAD-28OCT.jpg?auto=webp&quality=70&width=90p"
        alt="promo"
      />
    </Box>
  );
}

export { PromotionalBanner };