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
          <p>© Copyright 2023 ANDALOSY LLC.</p>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href="https://twitter.com/mandalosy"><FaInstagram className='icon' style={{ color: "black" }} /></a>
            <a href="https://twitter.com/mandalosy"><FaFacebook className='icon' style={{ color: "black" }} /></a>
            <a href="https://twitter.com/mandalosy"><FaYoutube className='icon' style={{ color: "black" }} /></a>
            <a href="https://twitter.com/mandalosy"><FaTwitter className='icon' style={{ color: "black" }} /></a>              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;