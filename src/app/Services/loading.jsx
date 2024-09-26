// app/services/loading.jsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Optional for styling

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 6 }).map((_, idx) => (
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
      ))}
    </div>
  );
};

export default Loading;
