import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 PG Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillFacebook></AiFillFacebook>
        <AiFillInstagram></AiFillInstagram>
        <AiOutlineTwitter></AiOutlineTwitter>
      </p>
    </div>
  )
}

export default Footer