import React from 'react'
import { Product} from '../../components';
import { client } from '../../lib/client';
const Televisions = ({ products}) => {
  return (
    <div className="products-container">
      <Product product={products.length && products[1]}/>
      <Product product={products.length && products[2]}/>
      <Product product={products.length && products[5]}/>
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

export default Televisions