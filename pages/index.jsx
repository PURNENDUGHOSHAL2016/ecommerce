import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <Carousel>
      <Carousel.Item>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      </Carousel.Item>
      <Carousel.Item>
        <HeroBanner heroBanner={bannerData.length && bannerData[1]}  />
      </Carousel.Item>
    </Carousel>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>products There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;