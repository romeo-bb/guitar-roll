import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-[5px] border-t border-gray'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <p>© Copyright 2023 GUITARMALADE LLC.</p>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaInstagram className='icon' style={{ color: "black" }} />
            <FaFacebook className='icon' style={{ color: "black" }} />
            <FaYoutube className='icon' style={{ color: "black" }} />
            <FaTwitter className='icon' style={{ color: "black" }} />                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;