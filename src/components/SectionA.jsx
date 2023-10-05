import React from "react";
import { FaShoppingBag, FaBook, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionA = () => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-32 text-center mb-10">
      <h1 className="font-bold text-5xl">Our Offerings</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {offeringsData.map((offering, index) => (
          <div
            key={index}
            className="bg-black text-white p-10 rounded-lg shadow-lg flex flex-col justify-center items-center h-[400px] max-w-[400px] min-w-[200px] mb-5 mx-5"
          >
            {offering.icon}
            <h2 className="text-2xl mt-4 font-bold">{offering.title}</h2>
            <p className="mt-2">{offering.description}</p>
            <Link to={offering.path}>
            <button
              type="button"
              className="mt-4 bg-white text-black px-6 py-3 border-2 rounded hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:bg-black hover:text-white "
            >
              Learn more
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for offerings
const offeringsData = [
  {
    icon: <FaShoppingBag className="icon" style={{ color: "white", fontSize: '52px' }}/>,
    title: "Shopping",
    description: "Browse our selection of musical instruments and accessories",
    path: "/merch",
  },
  {
    icon: <FaBook className="icon" style={{ color: "white", fontSize: '52px' }}/>,
    title: "Lessons",
    description: "Schedule a call or download a free lesson TODAY!",
    path: "/lessons"
  },
  {
    icon: <FaVideo className="icon" style={{ color: "white", fontSize: '52px'}}/>,
    title: "Video",
    description: "Guitar solo analysis, music theory, and ludicrous skits",
    path: "/video",
  }, 
];

export default SectionA;

