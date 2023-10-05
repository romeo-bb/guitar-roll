import React from "react";
import book from "../assets/book.png";
import book2 from "../assets/book2.jpeg";
import book3 from "../assets/book3.jpeg";
import book4 from "../assets/book4.jpeg";
import book5 from "../assets/book5.jpeg";
import logoprice from "../assets/logoprice.svg";


const Lessons = () => {
  const CardsData = [
    {
      title: "Guitarmalde Cookbook Vol. 1",
      price: "$34.95",
      src: book ,
    },
    {
      title: "CHARLIE - Major/Relative Minor Warmup",
      price: "$0.00",
      src: book2,
    },
    {
      title: "JUST DO THIS - Guitarmalade Warmup/Review",
      price: "$0.00",
      src: book3,
    },
    {
      title: "Modes MEGA Packet by GUITARMALADE",
      price: "$7.00",
      src: book4,
    },
    {
      title: "Blues Pentatonic Roadmap",
      price: "$49.99",
      src: book5,
    },
  ];
  return (
    <div className='bg-[#f2f2f2] h-auto w-full flex flex-col items-center pt-32 pb-32'>
      <div className='px-5 w-full flex flex-col max-w-[1400px]'>
        <h1 className='mt-4 md:mt-0 lg:text-5xl sm:text-3xl font-semibold leading-6 text-center'>
          Ultimate Lessons by
          <br />
          Guitarmalade
        </h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 grid-rows-auto'>
          {CardsData.map((card, index) => (
            <div key={index} className='card w-full h-[450px] bg-white rounded'>
              <img
                className='w-full h-[70%] bg-cover bg-center rounded'
                src={card.src}
                alt=""></img>
              <div className='ml-5 mt-5 px-4 py-1.5  font-semibold leading-6 tracking-wide max-w-[150px] text-center flex flex-row cursor-pointer text-xl text-red-600'>
                <img className="w-[24px] h-[24px] me-4" alt="" src={logoprice}/>
                {card.price}
              </div>
              <p className='ml-5 mt-3 font-semibold text-2xl'>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Lessons;