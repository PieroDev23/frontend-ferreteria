
import { SearchIcon } from '@app/components/common/Icons';
import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import React from 'react';

const inputProps: InputProps = {
  border: 'unset',
  bgColor: 'white',
  width: '350px',
  borderRadius: 'unset',
  _placeholder: {
    color: 'black',
  },
  _hover: {
    borderColor: 'unset'
  },
  placeholder: 'Buscar producto...',
}

function SearchProduct() {
  return (
    <InputGroup display={{ base: 'none', lg: 'flex' }}>
      <Input {...inputProps} />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}

export { SearchProduct };