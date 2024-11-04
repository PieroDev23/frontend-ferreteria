import { FeaturedProducts, ProductDetail } from "@app/components/single-product";
import { Box } from "@chakra-ui/react";





export default function SingleProductPage() {
  return (
    <Box bgColor={'white'} maxW={'1600px'} margin={'auto'} p={'31px'} my={'31px'}>
      <Box>
        <ProductDetail />
        <FeaturedProducts />
      </Box>
    </Box>
  )
}