
'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic/useAxiosPublic';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';




const ServiceItem = () => {
    // const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();
    
    const {data: services = [], refetch , isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/Services/api');
            return res.data;
        }
    })
    // if(isLoading){
    //     return <h1>Loading...</h1>
    // }

    console.log(services)
    return (
        <div>
             
        </div>
    );
};

export default ServiceItem;