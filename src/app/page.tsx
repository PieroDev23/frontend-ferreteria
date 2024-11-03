import { FrontBanner, ProductsWithDiscountSection, ServicesSection } from '@app/components/home';
import { ProductsSection } from '@app/components/home/Products';
import { HomeProvider } from '@app/providers/HomeProvider';
import React from 'react';

export default function Home() {
  return (
    <HomeProvider>
      <FrontBanner />
      <ProductsSection />
      <ServicesSection />
      <ProductsWithDiscountSection />
    </HomeProvider>
  );
}
