import Image from "next/image";
import React from "react";
import image from "../../../../public/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-sky-300 to-cyan-50 p-4 md:p-12 rounded-md">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
        Experience Luxury at Our Salon
        </h3>
        <p className="text-sm md:text-base text-gray-500">
          Pamper yourself with the finest salon services. From hair styling to
          skincare, our expert team is here to provide you with a rejuvenating
          experience. Book your appointment today and let us help you look and
          feel your best!
        </p>
        <button className="py-2 px-6 bg-gray-800 text-[#fff] rounded-md mt-6 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all">Get Started</button>
      </div>

      {/* Image Section */}
      <figure className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Image
          className="w-[80%] md:w-[70%] bg-[#ffffff] rounded-bl-full rounded-tr-full "
          src={image}
          width={500}
          height={500}
          alt="stylist picture"
        />
      </figure>
    </div>
  );
};

export default Banner;
