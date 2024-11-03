import { FrontBanner, ServicesSection } from '@app/components/home';
import { ProductsSection } from '@app/components/home/Products';
import React from 'react';



export default function Home() {
  return (
    <React.Fragment>
      <FrontBanner />
      <ProductsSection />
      <ServicesSection />
    </React.Fragment>
  );
}
