import React from 'react';
import Link from 'next/link';

const LowerNavbar = () => {
  return (
    <div className="navbar-container">
        <Link href="/">Home</Link>
        <Link href="/element/Mobiles_Tablets">Mobiles & Tablets</Link>
        <Link href="/element/Televisions">Televisions</Link>
        <Link href="/element/Headphones_Speakers">Headphones & Speakers</Link>
        <Link href="/element/Home_Appliances">Home Appliances</Link>
        <Link href="/element/Computers">Computers</Link>
        <Link href="/element/Cameras">Cameras</Link>
        <Link href="/element/Kitchen_Appliances">Kitchen Appliances</Link>
        <Link href="/element/PERSONAL_CARE">PERSONAL CARE</Link>
        <Link href="/element/Accessories">Accessories</Link>
    </div>
)
}

export default LowerNavbar