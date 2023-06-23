import React from 'react'
import Hero from './hero/Hero';
import { Card } from './hero/Card';
import Product from './product/Product';
import { Banner } from './banner/Banner';
import { TopProduct } from './topproduct/TopProduct';
import { Testimonial } from './testimonial/Testimonial';

const Home = () => {
  return (
    <>
    <Hero/>
    <Card/>
    <Product/>
    <Banner/>
    <TopProduct/>
    <Testimonial/>
    </>
  )
};

export default Home