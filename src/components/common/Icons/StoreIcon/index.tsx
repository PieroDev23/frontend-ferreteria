import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';



function StoreIcon({ width = "32px", height = "32px", ...rest }: BoxProps) {

  return (
    <Box width={width} height={height} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l18 0" />
        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
        <path d="M5 21l0 -10.15" />
        <path d="M19 21l0 -10.15" />
        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
      </svg>
    </Box>
  );
}

export { StoreIcon };