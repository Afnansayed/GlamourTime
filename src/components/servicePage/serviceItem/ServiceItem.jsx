
'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const ServiceItem = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: services = [], refetch , isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/Services/api');
            return res.data;
        }
    })
    if(isLoading){
        return  Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="card card-side bg-base-100 shadow-xl h-[250px]">
                <figure className='w-1/2'>
                    <Skeleton height={250} width={250} />
                </figure>
                <div className="card-body w-1/2 bg-gradient-to-r from-sky-300 to-cyan-50">
                    <Skeleton width={150} height={20} />
                    <Skeleton width={100} height={20} />
                    <div className="card-actions justify-start">
                        <Skeleton width={120} height={40} />
                    </div>
                </div>
            </div>
        ))
    }


    const data = services?.services || [];
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                data.map((service ) =>  <div 
                className="card card-side bg-base-100 shadow-xl h-[250px]"
                key={service._id}
                service={service}
                >
                    <figure className='w-1/2'>
                        <Image src={service.image} width={500} height={500} alt="service picture" className='w-full h-full'/>
                    </figure>
                    <div className="card-body w-1/2 bg-gradient-to-r from-sky-300 to-cyan-50">
                      <h2 className="card-title text-gray-800">{service.name}</h2>
                      {/* <p className='text-gray-600'>{service.description}</p> */}
                      <p className='text-gray-600 font-semibold'>Price : {service.price} $</p> 
                      <div className="card-actions justify-start">
                        <Link href={`/${service._id}`} className="bg-gray-800 text-[#fff] rounded-lg px-6 py-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all">View Details</Link>
                      </div>
                    </div>
                  </div>)
               }
        </div>
    );
};

export default ServiceItem;