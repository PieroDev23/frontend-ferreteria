import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';



function ElectricityIcon({ width = '32px', height = '32px', ...rest }: BoxProps) {

  return (
    <Box width={width} height={height} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
      </svg>
    </Box>
  );
}

export { ElectricityIcon };