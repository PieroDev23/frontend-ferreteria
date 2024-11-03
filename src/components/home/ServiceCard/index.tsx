import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';


export type ServiceCardProps = {
  name: string;
  description: string;
  availability: string;
  icon: React.ReactNode
}


function ServiceCard({ name, description, availability, icon }: ServiceCardProps) {
  return (
    <Card maxW={'400px'}>
      <CardBody>
        <Stack spacing={5} alignItems={'center'}>
          {icon}
          <Heading textAlign={'center'} fontSize={'21px'}>{name}</Heading>
          <Text textAlign={'center'} fontSize={'16px'}>{description}</Text>
          <Text textAlign={'center'} fontWeight={'bold'} textTransform={'uppercase'}>{availability}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export { ServiceCard };
