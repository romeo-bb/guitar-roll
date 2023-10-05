import React from "react";
import logoprice from "../assets/logoprice.svg";
import pho1 from "../assets/pho1.png"
import pho2 from "../assets/pho2.jpeg"
import pho3 from "../assets/pho3.jpeg"
import pho4 from "../assets/pho4.jpeg"
import pho5 from "../assets/pho5.jpeg"
import pho6 from "../assets/pho6.jpeg"
import pho7 from "../assets/pho7.jpeg"

const Merch = () => {
  const CardsData = [
    {
      title: "NEW Guitarmalade Logo T-Shirt",
      price: "$25.50",
      src: pho1 ,
    },
    {
      title: "Guitarmalade Sauce logo (no guitar) T-Shirt",
      price: "$25.50",
      src: pho2,
    },
    {
      title: "GUITARMALADE T-Shirt",
      price: "$20.28",
      src: pho3,
    },
    {
      title: "Guitarmalade Hoodie",
      price: "$37.11",
      src: pho4,
    },
    {
      title: "Meme Lord T-Shirt",
      price: "$26.16",
      src: pho5,
    },
    {
      title: "Got Sauce? T Shirt",
      price: "$18.02",
      src: pho6,
    },
    {
      title: "Guitarmalade Sticker",
      price: "$5.00",
      src: pho7,
    },
  ];
  return (
    <div className='bg-[#f2f2f2] h-auto w-full flex flex-col items-center pt-32 pb-32'>
      <div className='px-5 w-full flex flex-col max-w-[1400px]'>
        <h1 className='mt-4 md:mt-0 lg:text-5xl sm:text-3xl font-semibold leading-6 text-center'>
          Explore Merch by
          <br />
          Guitarmalade
        </h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 grid-rows-auto'>
          {CardsData.map((card, index) => (
            <div key={index} className='card w-full h-[480px] bg-white rounded-lg'>
              <img
                className='w-full h-[70%] bg-cover bg-center rounded-t-lg'
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

export default Merch;