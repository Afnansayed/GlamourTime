import Image from "next/image";
import React from "react";
import img1 from "../../../../public/interior-2.jpg";
import img2 from "../../../../public/interior-3.jpg";
const Interior = () => {
  return (
    <div className="flex flex-col md:flex-row my-12  bg-gradient-to-r from-sky-300 to-cyan-50 p-12 rounded-lg">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Interior Design
        </h3>
        <p className="text-gray-600 mt-6">
        Step into our salon and experience a beautifully crafted interior designed for your comfort and relaxation. Our modern yet warm space combines elegant design elements with functional layouts to create an inviting atmosphere. From chic furnishings to soothing lighting, every detail is thoughtfully curated to enhance your salon experience. Whether you are here for a quick service or a full day of pampering, our serene and stylish environment ensures you feel relaxed and rejuvenated.
        </p>
      </div>
      <div className="relative flex justify-end p-8">
        <Image
          src={img1}
          className="w-[80%] md:w-[70%] rounded-md"
          alt="interior"
          width={500}
          height={500}
        />
        <Image
          src={img2}
          className="w-1/2 absolute top-24 md:top-40 left-0 rounded-md"
          alt="interior"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Interior;
