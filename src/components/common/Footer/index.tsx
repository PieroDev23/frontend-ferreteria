import { MainNavMenu } from '@app/components/home';
import { Box, Stack, Text } from '@chakra-ui/react';

function MainFooter() {

  return (
    <Box bg="black" color="white" py={6}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Ferreteria Andina. Todos los derechos reservados.</Text>
        <MainNavMenu />
      </Stack>
    </Box>
  );
}

export { MainFooter };

