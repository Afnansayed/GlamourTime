import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCart = ({ service }) => {
  return (
    <Link href={`/${service._id}`} className="bg-base-100 w-36 lg:w-48 mx-auto p-2 shadow-2xl mb-2 text-sm hover:scale-110">
      <div>
        <Image
          src={service.image}
          width={500}
          height={500}
          alt="service picture"
        />
      </div>
      <div className="text-left">
        <h1 className="text-left">
          <span className="text-[15px] font-bold">Name: </span> {service.name}
        </h1>
        <h3>
          <span className="text-[15px] font-bold w-1/2">Price: </span> $
          {service?.price}
        </h3>
        <h3>
          <span className="text-[15px] font-bold w-1/2">Duration: </span>:{" "}
          {service?.duration}
        </h3>
      </div>
    </Link>
  );
};

export default PopularCart;
