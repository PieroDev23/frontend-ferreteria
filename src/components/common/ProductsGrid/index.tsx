
import { MainGrid } from "@app/components/common/Grid";
import { Product } from "@app/types";
import { Box } from "@chakra-ui/react";


export function ProductsGrid({ products, isLoading }: { products: Product[], isLoading: boolean }) {
  return (
    <Box>
      <MainGrid
        gridProps={{
          margin: 'auto',
          rowGap: 5,
          columnGap: 5,
          templateColumns: {
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(5, 1fr)',
          }
        }}
        isLoading={isLoading}
        products={products} />
    </Box>
  )
}