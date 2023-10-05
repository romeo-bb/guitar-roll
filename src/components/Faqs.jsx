import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";
import bits from '../assets/bits.jpeg';

const Faqs = () => {
    const [list, setList] = useState([
        {
          question: "Why did you put marmalade on the guitar?",
          answer: "Yes.",
        },
        {
          question: "Is it true Chris was on the Alphabits cereal box?",
          answer:
            <img className="" src={bits} alt="" />,
        },
        {
          question: "Does Guitarmalade have the sauce?",
          answer: "Yes, Guitarmalade indeed has the sauce.",
        },
        {
          question: "Is it true that the guitar is the best instrument.",
          answer: "Yes, that is correct.",
        },
        {
          question: "If I buy a custom  course, will I get better?",
          answer: "Yes, If you have a custom course designed and you follow each example it is impossible to not improve!",
        },
      ]);
      return (
        <div className="h-auto flex justify-center items-center lg:mt-20 md:mt-10 sm:mt-10 relative py-5 px-5 md:px-10 flex-col">
          <h2 className="mt-20 mb-16 text-4xl">FAQs</h2>
            <div className="list mb-20 lg:w-[1000px] md:w-full mx-5 sm:w-full sm:mx-0">
              {list.map((item, key) => (
                <Accordion key={key} datas={item} />
              ))}
            </div>
          </div>
      );
};

export default Faqs;