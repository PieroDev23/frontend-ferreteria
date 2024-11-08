import { PromotionalBanner, StoreAside, StoreProducts } from "@app/components/store";
import { Box, Flex } from "@chakra-ui/react";


export default function StorePage() {
  return (
    <Box my='32px' maxW={'1900px'} margin={'auto'}>
      <PromotionalBanner />
      <Flex margin={'auto'} gap={'31px'} my={'31px'}>
        <StoreAside />
        <StoreProducts />
      </Flex>
    </Box>
  )
}