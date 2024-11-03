import { Box, BoxProps } from '@chakra-ui/react';


function SearchIcon({ width = '16px', height = '16px', ...rest }: BoxProps) {

  return (
    <Box width={width} height={height} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </Box>
  );
}

export { SearchIcon };