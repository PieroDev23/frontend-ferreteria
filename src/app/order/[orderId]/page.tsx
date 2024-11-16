import { Product } from "@app/types";
import { Heading, Box, Text, SimpleGrid, Card, CardBody, VStack, Table, Thead, Tr, Th, Tbody, Td, Image, Tag, Link, Button, } from "@chakra-ui/react";

async function fetchOrderDetails(orderId: string) {
  const res = await fetch(`http://localhost:8080/api/v1/orders/${orderId}`, {
    cache: 'no-store', // Esto asegura que no se use caché
  });
  if (!res.ok) {
    throw new Error("Error al cargar los detalles de la orden");
  }
  const data = await res.json();
  return data.orderDetails;
}

export default async function OrderReviewPage({ params }: { params: { orderId: string } }) {
  const orderDetails = await fetchOrderDetails(params.orderId);

  const { orderId, status, totalAmount, createdAt, user, products, guest, address } = orderDetails;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PROCESANDO':
        return 'yellow';
      case 'COMPLETADO':
        return 'green';
      case 'ENTREGADO':
        return 'blue';
      case 'RECHAZADO':
        return 'red';
      case 'RECIBIDO':
        return 'gray';
      default:
        return 'gray';
    }
  };

  return (
    <Box p={6} maxW="1400px" mx="auto" width="70%">
      <Card p={6}>
        <Heading as="h1" size="md" textAlign="center" p={5}>
          Detalles de la Orden
        </Heading>

        <Text textAlign={"center"}>El estado de esta orden, va a cambiar ni bien el pago haya sido confirmado por la entidad bancaria</Text>
        <center>
          <Button mt={6} w={'fit-content'} as={Link} href={`/user`} bgColor={'black'} color={'white'} borderRadius={'unset'} _hover={{ bgColor: '#feeb34', color: 'black' }}>
            Regresar
          </Button>
        </center>
      </Card>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={5}>
        {/* Card para los detalles de la orden */}
        <Card borderRadius="md">
          <CardBody>
            <Heading size="md" mb={4}>Detalles de la Orden</Heading>
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">ID de la Orden:</Text>
              <Text>{orderId}</Text>

              <Text fontWeight="bold">Estado:</Text>
              <Tag colorScheme={getStatusColor(status)}>{status}</Tag>
              <Text fontWeight="bold">Fecha de Creación:</Text>
              <Text>{new Date(createdAt).toLocaleString()}</Text>

              <Text fontWeight="bold">Total:</Text>
              <Text>{`S/. ${totalAmount}`}</Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Card para los detalles del usuario */}
        <Card borderRadius="md">
          <CardBody>
            <Heading size="md" mb={4}>Detalles del Usuario</Heading>
            {
              user && (
                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold">Nombre:</Text>
                  <Text>{user?.firstName} {user?.lastName}</Text>

                  <Text fontWeight="bold">Correo:</Text>
                  <Text>{user?.email}</Text>


                  <Text fontWeight="bold">Dirección de envio:</Text>
                  <Text>{address.line1}</Text>
                </VStack>
              )


            }

            {
              guest && (
                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold">Nombre:</Text>
                  <Text>{guest?.firstName} {guest?.lastName}</Text>

                  <Text fontWeight="bold">Correo:</Text>
                  <Text>{guest?.email}</Text>

                  <Text fontWeight="bold">Dirección de envio:</Text>
                  <Text>{address.line1}</Text>
                </VStack>
              )
            }
          </CardBody>
        </Card>


      </SimpleGrid>

      <Card mt={5}>
        <CardBody>
          <Heading size="md" mb={4}>Productos de la Orden</Heading>
          <Table>
            <Thead>
              <Tr>
                <Th>Imagen</Th>
                <Th>Nombre</Th>
                <Th>Descripción</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Descuento</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product: Product) => (
                <Tr key={product.id}>
                  <Td>
                    <Image src={product.image} alt={product.name} boxSize="50px" objectFit="cover" />
                  </Td>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.quantity}</Td>
                  <Td>{`S/. ${product.price.toFixed(2)}`}</Td>
                  <Td>{`${product.discount}%`}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
}