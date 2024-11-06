import { CartView, UpsellsProducts } from "@app/components/cart";
import { Box, Flex } from "@chakra-ui/react";


export default function CartPage() {

  return (
    <Box p={5} margin={'auto'} my={'31px'} maxW={'1400px'}>
      <Flex align={'center'} flexDirection={'column'} justify={'space-between'} gap={8} h={'100%'}> 
        <CartView />
        <UpsellsProducts />
      </Flex>
    </Box>
  )
}