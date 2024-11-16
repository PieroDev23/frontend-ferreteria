import { CreateDirectionForm } from "@app/components/user/CreateDirectionForm";
import { SessionProvider } from "@app/providers/SessionProvider";
import { Box, Button, Card, CardBody, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, VStack } from "@chakra-ui/react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";


type Address = {
  id: string,
  country: string;
  city: string;
  userId: string;
  addressLine1: string;
  addressLine2?: string | undefined;
  postalCode?: string | undefined;
}

type Order = {
  id: string;
  status: string;
  total: string;
  productCount: number;
  createdAt: Date;
  user: string;
}


const parseSession = (cookie: string) => {
  const [, payload] = cookie.split(".");
  const base = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
  return base;
}


export default async function UserProfilePage() {
  const cookieValue = cookies().get("f_session")?.value;

  if (!cookieValue) {
    redirect("/cuenta");
  }

  const res = await fetch(`http://localhost:8080/api/v1/user-addresses/`, {
    headers: {
      "Cookie": `f_session=${cookies().get("f_session")!.value}`
    },
  });

  const res2 = await fetch("http://localhost:8080/api/v1/orders/user", {
    headers: {
      "Cookie": `f_session=${cookies().get("f_session")!.value}`
    },
  })


  const { addresses } = await res.json();
  const { orders } = await res2.json();

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


    <SessionProvider user={parseSession(cookieValue)}>
      <Box p={6} maxW="1200px" mx="auto" width="70%">
        <Heading as="h2" size="xl" mb={6} >
          Perfil de Usuario
        </Heading>

        <Tabs variant="enclosed" colorScheme="blue">
          <TabList>
            <Tab>Órdenes</Tab>
            <Tab>Direcciones</Tab>
          </TabList>

          <TabPanels>
            {/* Tab de Órdenes */}
            <TabPanel>
              <Heading size="md" mb={4}>Tus Órdenes</Heading>
              {orders && orders?.length === 0 ? (
                <Text>No tienes órdenes recientes.</Text>
              ) : (
                <VStack align="start" spacing={4}>
                  {orders?.map((order: Order, index: number) => (
                    <Card key={order.id} borderRadius="md" width="100%" position={'relative'}>
                      <CardBody>
                        <Text fontWeight="bold">Orden #{index + 1} <Tag colorScheme={getStatusColor(order.status)}>{order.status}</Tag></Text>
                        <Text>Id: <strong>{order.id}</strong></Text>
                        <Text>Total: S/. {order.total}</Text>
                        <Text>Fecha: {new Date(order.createdAt).toLocaleString()}</Text>
                        <Text>Cantidad de productos: {order.productCount}</Text>
                      </CardBody>
                      <Button position={'absolute'} bottom={3} right={3} as={Link} href={`/order/${order.id}`} bgColor={'black'} color={'white'} borderRadius={'unset'} _hover={{ bgColor: '#feeb34', color: 'black' }}>Ver detalle</Button>
                    </Card>
                  ))}
                </VStack>
              )}
            </TabPanel>

            {/* Tab de Direcciones */}
            <TabPanel>
              <Heading size="md" mb={4}>Tus Direcciones</Heading>
              {addresses && addresses.length === 0 ? (
                <Text>No tienes direcciones guardadas.</Text>
              ) : (
                <VStack align="start" spacing={4}>
                  {addresses?.map((address: Address) => (
                    <Card key={address.id} borderRadius="md" width="100%">
                      <CardBody>
                        <Text fontWeight="bold">Dirección:</Text>
                        <Text>{address.addressLine1}</Text>
                        {address.addressLine2 && <Text>{address.addressLine2}</Text>}
                        <Text>{address.city}, {address.country}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              )}

              <CreateDirectionForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* Formulario para agregar una nueva dirección */}
      </Box>
    </SessionProvider>
  );
}
