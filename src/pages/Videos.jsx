import React from "react";

const Videos = () => {
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
    <div className='bg-[#f2f2f2] h-auto w-full flex flex-col items-center pt-32 pb-32'>
      <div className='px-5 w-full flex flex-col max-w-[1400px]'>
        <h1 className='mt-4 md:mt-0 lg:text-5xl sm:text-3xl font-semibold leading-6 text-center'>
          Watch Videos by
          <br/>
          Guitarmalade
        </h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 grid-rows-auto'>
          {CardsData.map((video, index) => (
            <div key={index} className='card w-full h-[340px] bg-zinc-200'>
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
        </div>
        <div className='mt-20 flex justify-center'>
        <button
          type='button'
          className='bg-primary text-black px-8 py-3 rounded hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:bg-black hover:text-white w-max-min h-[50px] border-black transition duration-500'>
          Subscribe
        </button>
      </div>
      </div>
    </div>
  );

}

export default Videos;