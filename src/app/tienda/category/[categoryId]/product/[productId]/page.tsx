import { RelatedProducts, ProductDetail } from "@app/components/SingleProduct";
import { SingleProductProvider } from "@app/providers/SingleProductProvider";
import { Box } from "@chakra-ui/react";

export default function SingleProductPage({ params }: { params: { productId: string } }) {

  return (
    <SingleProductProvider productId={params.productId}>
      <Box bgColor={'white'} maxW={'1600px'} margin={'auto'} p={'31px'} my={'31px'}>
        <Box>
          <ProductDetail />
          <RelatedProducts />
        </Box>
      </Box>
    </SingleProductProvider>
  )
}