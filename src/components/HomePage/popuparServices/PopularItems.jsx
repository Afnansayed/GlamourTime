'use client'
import useAxiosPublic from "@/hooks/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import PopularCart from "./PopularCart";


const PopularItems = () => {
     const [services, setServices] = useState([])
     const axiosPublic = useAxiosPublic();

     useEffect(() => {
             try{
                axiosPublic.get('/api?collection=services')
                .then(res => {
                   setServices(res.data)
               })
             }catch(error){
                console.log(error)
             }

     },[])
     console.log(services);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {
                services.map(service => <PopularCart
                key={service._id}
                service={service}
                ></PopularCart>)
              }
        </div>
    );
};

export default PopularItems;