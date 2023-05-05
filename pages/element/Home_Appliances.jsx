import React from 'react'
import { Product} from '../../components';
import { client } from '../../lib/client';

const Home_Appliances = ({ products}) => {
  return (
    <div className="products-container">
      <h1>Comming Soon</h1>
    </div>
  )
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    return {
      props: { products}
    }
  }

export default Home_Appliances