"use client";

import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import { ServiceCard } from '../ServiceCard';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { HammerIcon, PaintIcon, ToolIcon, WoodIcon } from '@app/components/common';
import { ElectricityIcon } from '@app/components/common/Icons/ElectricityIcon';



function ServicesSection() {
  const services = [
    {
      name: "Carpintería",
      description: "Servicio profesional de carpintería para proyectos personalizados en madera.",
      availability: "Lunes a sábado, 8:00 am - 5:00 pm",
      icon: <WoodIcon />
    },
    {
      name: "Albañilería",
      description: "Trabajos de albañilería para construcción, remodelaciones y reparaciones.",
      availability: "Lunes a viernes, 7:00 am - 4:00 pm",
      icon: <HammerIcon />
    },
    {
      name: "Pintura",
      description: "Aplicación de pintura para interiores y exteriores, incluyendo preparación de superficies.",
      availability: "Todos los días, 9:00 am - 6:00 pm",
      icon: <PaintIcon />
    },
    {
      name: "Fontanería",
      description: "Servicios de fontanería, como instalación y reparación de tuberías y grifos.",
      availability: "Lunes a sábado, 8:00 am - 5:00 pm",
      icon: <ToolIcon />
    },
    {
      name: "Electricidad",
      description: "Instalaciones eléctricas y reparación de sistemas eléctricos en viviendas y oficinas.",
      availability: "Lunes a viernes, 8:00 am - 4:00 pm",
      icon: <ElectricityIcon />
    }
  ];

  return (
    <Box bgColor={'#feeb34'} py={'31px'}>
      <Box as='section' mt='31px' maxW={'1400px'} margin={'auto'}>
        <Heading textAlign='center' mb='31px'>Nuestros servicios</Heading>
        <Flex wrap="wrap" justifyContent="center" gap="31px" mt="31px">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </Flex>
        <Flex justifyContent={'center'} mt={'31px'}>
          <Button as={Link} href='/servicios' rightIcon={<ArrowForwardIcon />} borderRadius={'unset'} bgColor={'black'} color={'white'} _hover={{ bgColor: 'black', color: 'white', textDecor: 'none' }}>
            Explorar servicios
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export { ServicesSection };
