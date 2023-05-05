import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping,AiOutlineSearch} from 'react-icons/ai'
import { Cart} from './';
import { useStateContext} from '../context/StateContext';

const UpperNavbar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">PG Mastery Store</Link>
      </p>

      <span>
        <input placeholder='Search'/>
        <button className="cart-icon"><AiOutlineSearch/></button>
      </span>
      
      <button className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
)
}
export default UpperNavbar