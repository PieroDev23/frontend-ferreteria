"use client";


import { useStore } from '@app/hooks/useStore';
import {
  Button,
  HStack,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useNumberInput
} from '@chakra-ui/react';



export function CartTable() {
  const { cart, onDeleteCart, onAddToCart } = useStore();

  const { getInputProps } =
    useNumberInput({
      step: 1,
      min: 1,
    });


  const input = getInputProps();

  return (
    <TableContainer w={'100%'} maxH={'700px'} overflowY={'auto'}>
      <Table variant="simple">
        {/* Encabezados de la tabla */}
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Nombre</Th>
            <Th>Cantidad</Th>
            <Th>Precio</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>

        <Tbody>
          {cart.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image src={item.image} alt={item.name} boxSize="60px" objectFit="cover" />
              </Td>
              <Td>{item.name}</Td>
              <Td>
                <HStack>
                  <Button onClick={() => {
                    onAddToCart({ ...item, quantity: 1 })
                  }}>+</Button>
                  <Input maxW={16} {...input} value={item.quantity} readOnly />
                  <Button onClick={() => {
                    if (item.quantity > 1) {
                      onAddToCart({ ...item, quantity: -1 })
                    }
                  }}>-</Button>
                </HStack>
              </Td>
              <Td>S/. {item.price.toFixed(2)}</Td>
              <Td>
                <Button onClick={() => onDeleteCart(item)} bg={'black'} borderRadius={'unset'} color={'white'} _hover={{ bg: 'black' }}>
                  Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

