import { CheckoutForm, PucharseReview } from "@app/components/checkout";
import { Box, Card, Flex, Heading } from "@chakra-ui/react";





export default function CheckoutPage() {
  return (
    <Box py={10}>
      <Card maxW={'1400px'} minW={'1400px'} mx={'auto'} p={8}>
        <Heading mb={21}>Checkout</Heading>
        <Flex gap={31}>
          <CheckoutForm w={'75%'} />
          <PucharseReview w={'25%'} />
        </Flex>
      </Card>
    </Box>
  );
};


