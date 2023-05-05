import React from 'react'
import { Product} from '../../components';
import { client } from '../../lib/client';

const Mobiles_Tablets = ({ products}) => {     
  return (
    <div className="products-container">
      <Product product={products.length && products[0]}/>
      <Product product={products.length && products[12]}/>
      <Product product={products.length && products[3]}/>
      <Product product={products.length && products[4]}/>
      <Product product={products.length && products[6]}/>
      <Product product={products.length && products[7]}/>
      <Product product={products.length && products[8]}/>
      <Product product={products.length && products[9]}/>
      <Product product={products.length && products[10]}/>
      <Product product={products.length && products[11]}/>
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

export default Mobiles_Tablets