import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

function FrontBanner() {
  return (
    <Box
      position="relative"
      minH="600px"
      bgImage="url('https://lirp-cdn.multiscreensite.com/d09f5f55/dms3rep/multi/opt/2415064-fondo2323_Mesa_de_trabajo_1_copia_2-16790-1920w.jpg')" // Asegúrate de que la ruta sea correcta
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bgColor="black" position="absolute" width={'100%'} height={'100%'} opacity={'.45'}></Box>
      <Flex position="relative" zIndex={1} justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={'31px'}>
        <Box>
          <Heading textAlign={'center'} mb={'13px'} color={'white'}>Ferretería para el <Text as='span' color={'black'}>hogar</Text> y para  <Text as='span' color={'black'}>empresas constructoras</Text></Heading>
          <Text color={'white'} textAlign={'center'} margin={0} fontWeight={'300'} fontSize={'20px'}>Bienvenido a nuestra tienda virtual de ferreteria, para el hogar y empresas dedicadas a la construcción</Text>
        </Box>
        <Flex gap={'13px'}>
          <Button as={Link} href="/tienda" bgColor={'black'} color={'white'} borderRadius={'unset'} textTransform={'uppercase'} _hover={{ bgColor: '#feeb34', color: 'black' }}>Ver Tienda</Button>
          <Button as={Link} href="/servicios" textTransform={'uppercase'} bgColor={'white'} borderRadius={'unset'}>Ver Servicios</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export { FrontBanner };
