import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import blackForestImg from "/images/BlackForest.jpg";
import blazerImg from "/images/BlackForest.jpg";
import caspianImg from "/images/BlackForest.jpg";
import camarilloWhiteHorseImg from "/images/BlackForest.jpg";
import gsap from "gsap";

const horses = [
  { id: 1, name: "Black-Forest", image: blackForestImg },
  { id: 2, name: "Blazer", image: blazerImg },
  { id: 3, name: "Caspian", image: caspianImg },
  { id: 4, name: "Camarillo White Horse", image: camarilloWhiteHorseImg },
];

const LandingPage = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      gsap.to(container.current, {
        scale: 1.2,
        duration: 1,
        delay: 2,
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 ">
      <div className="w-max">
        <h1 className="lg:text-4xl font-bold mb-8 md:text-3xl text-slate-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-l ">
          Welcome to the Horse Ride Booking System
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {horses.map((horse) => (
          <div
            key={horse.id}
            className="bg-gray-900 w-full h-96 rounded-lg shadow-lg text-center "
          >
            <img
              src={horse.image}
              alt={horse.name}
              className="w-full h-56 rounded-lg mb-6 object-cover object-top"
            />
            <h2 className="text-xl font-extrabold text-yellow-800 mb-10 hover:text-rose-900 ">
              {horse.name}
            </h2>

            <Link
              to="/booking"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">Book now</span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
