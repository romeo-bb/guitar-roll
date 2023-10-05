import React from "react";
import myPhoto from '../assets/someone_in_guitar-transformed.jpeg'

const SectionB = () => {
    return (
        <div className="my-5 sm:my-10 md:my-20 mx-5 sm:mx-10 md:mx-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="mb-3 sm:mb-4 md:mb-5 text-2xl sm:text-3xl md:text-4xl font-bold">Chris’ Bio</h1>
                    <p className="text-base sm:text-lg md:text-xl">
                        Award-Winning Guitarist Christopher Schreiner (Berklee College of Music ’05) created Guitarmalade to engage students, helping them progress with fun, concise entertaining material. My own path to guitar proficiency was long and circuitous! But your own path does not have to be! We don’t know what we don’t know. There is almost certainly a more direct, enjoyable, fruitful path towards progress compared to whatever you are practicing on your own. Click the link and schedule a call.
                    </p>
                </div>
                <div className="lg:max-w-[600px] sm:max-w-[300px] md:max-w-[400px]">
                    <img src={myPhoto} alt="img" className="w-full h-auto" />
                </div>
            </div> 
        </div>       
    );
};

export default SectionB;