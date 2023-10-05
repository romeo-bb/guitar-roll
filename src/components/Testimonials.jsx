import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/guitar-1.jpeg";
import pic2 from "../assets/guitar-2.jpeg";
import pic3 from "../assets/guitar-3.jpeg";
import pic4 from "../assets/guitar-4.jpeg";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        
      ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='lg:h-[100vh] md:h-auto sm:h-auto lg:mt-40 md:mt-10 sm:mt-5 lg:px-32 md:px-7 md:mb-20 sm:mb-20 relative sx:mb-14'>
      <h1 className='text-center mb-20'>Testimonials</h1>
      <div className="">
      <Slider {...settings} className="">
        <div className='px-10 outline-none'>
          <img src={pic1} alt='' />
        </div>
        <div className='px-10 outline-none'>
          <img src={pic2} alt='' />
        </div>
        <div className="px-10 outline-none">
          <img src={pic3} alt='' />
        </div>
        <div className="px-10 outline-none">
          <img src={pic4} alt='' />
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default Testimonials;