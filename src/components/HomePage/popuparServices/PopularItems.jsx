'use client'
import useAxiosPublic from "@/hooks/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import PopularCart from "./PopularCart";


const PopularItems = () => {
     const [services, setServices] = useState([])
     const axiosPublic = useAxiosPublic();

     useEffect(() => {
             try{
                axiosPublic.get('/services')
                .then(res => {
                   setServices(res.data.services)
                   console.log(res.data.services)
               })
             }catch(error){
                console.log(error)
             }

     },[])
      // const servicess =services?.services;
      console.log(services)
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {
                services.map(service => <PopularCart
                key={service._id}
                service={service}
                ></PopularCart>)
              }
              comeing soon
        </div>
    );
};

export default PopularItems;