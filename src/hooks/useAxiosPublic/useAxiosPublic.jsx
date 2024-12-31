import axios from 'axios';

 const axiosPublic = axios.create({
    baseURL: 'https://glamour-time.vercel.app'
 })

const useAxiosPublic = () => {
    return  axiosPublic;
};

export default useAxiosPublic;