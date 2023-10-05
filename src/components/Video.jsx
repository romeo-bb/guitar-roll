/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Video = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1260 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1260, min: 740 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomButtonGroup = ({ next, previous }) => (
    <div className='custom-button-group'>
      <button className='custom-button prev' onClick={previous}>
        back
      </button>
      <button
        className='custom-button next'
        onClick={next}
        style={{ background: "white", color: "black" }}>
        Next
      </button>
    </div>
  );

  const CardsData = [
    {
      title: "Blues Pentatonic Roadmap Guitar Solo",
      duration: "01:46",
      src: "https://www.youtube.com/embed/wn2C2OCB5a8?si=tLIK3wVM-BuihdVa",
    },
    {
      title: "TOP 5 LICKS Cinco De Mayo GUITARMALADE",
      duration: "02:06",
      src: "https://www.youtube.com/embed/2Ef6kFyv5uc?si=HxRrjufn4kvrZn-x",
    },
    {
      title: "Harmonic Major Download FREE",
      duration: "00:58",
      src: "https://www.youtube.com/embed/A7WLzT6LeVs?si=b_xOyqpCiuoqSHrT",
    },
    {
      title: "Blues Double Stops to Country 6th Licks",
      duration: "05:53",
      src: "https://www.youtube.com/embed/DWVD16uD3HI?si=XnyZOIGXZ7hRJlfp",
    },
    {
      title: "Blues Pentatonic CHEAT CODE",
      duration: "01:13",
      src: "https://www.youtube.com/embed/jAncxCYnV1s?si=nI6tPBMbsFX-qT5K",
    },
    {
      title: "Play Scales LIKE A BOSS - Guitarmalade",
      duration: "08:44",
      src: "https://www.youtube.com/embed/eQ-LVpvP_fc?si=X52S5YkqJ-rZ42Rd",
    },
  ];

  return (
    <div className='mt-32 lg:px-32 md:px-5 sm:px-0  mb-10'>
      <h1 className='text-center mb-10'>Featured Videos</h1>
      <div className='w-[full]'>
        <Carousel
          responsive={responsive}
          customButtonGroup={<CustomButtonGroup />}
          className='sm:ps-1 flex justify-between'>
          {CardsData.map((video, index) => (
            <div key={index} className='card w-full h-[340px] bg-[#f5f5f5]'>
              <iframe
                className='w-full h-[55%] aspect-video hover:aspect-square bg-cover bg-center'
                src={video.src}
                title='YouTube video player'></iframe>
              <p className='ml-5 mt-5 px-4 py-1.5 bg-white text-base font-semibold leading-6 tracking-wide max-w-[100px] text-center rounded-full shadow-2xl'>
                {video.duration}
              </p>
              <p className='ml-5 mt-3 font-semibold'>{video.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='mt-7 flex justify-center'>
        <button
          type='button'
          className='bg-primary text-black px-6 py-3 rounded hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:bg-black hover:text-white w-max-min h-[50px] border-black'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Video;