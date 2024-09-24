import Image from 'next/image';
import React from 'react';
import img1 from '../../../../public/interior-1.png';
import img2 from '../../../../public/interior-4.jpeg';
const Chair = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse my-12  bg-gradient-to-r from-sky-300 to-cyan-50 p-6 rounded-lg">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Comportable Chair
          </h3>
          <p className="text-gray-600 mt-6">
          At the heart of your salon experience is the comfort of our premium chairs. Designed with both style and support in mind, our chairs provide the perfect balance of luxury and relaxation. Whether you are sitting for a quick trim or an extended pampering session, our ergonomically designed chairs ensure you remain comfortable throughout your service. Upholstered with high-quality materials and featuring adjustable settings, every detail is crafted to offer a soothing and personalized experience.
          </p>
        </div>
        <div className="relative flex justify-end p-6">
          <Image
            src={img1}
            className="w-[80%] md:w-[70%] h-3/4 rounded-md"
            alt="interior"
            width={500}
            height={500}
          />
          <Image
            src={img2}
            className="w-1/2 h-1/2 absolute top-40 md:top-40 left-0 rounded-md"
            alt="interior"
            width={500}
            height={500}
          />
        </div>
      </div>
    );
};

export default Chair;