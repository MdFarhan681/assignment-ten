import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router';
import ProductCard from '../../Components/ProductCard';
import Loader from '../../Components/Loader';

const AllProducts = () => {
   const rawdata = useLoaderData();
    const [loading, setloading] = useState(false);
      const navigate = useNavigate();
  return (
   <>
   {loading && <Loader></Loader>}

    <div>

       <main className="care py-15 flex flex-col w-fit mx-auto ">
        <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">Our All Products
        </h2>
      
      <div className="w-full mycard px-0 grid grid-cols-1 md:grid-cols-4 gap-5  mx-auto place-items-center">
        {
            
        rawdata.map((singlecard)=>(

      <ProductCard key={singlecard._id} singlecard={singlecard} loading={loading}
        setloading={setloading}></ProductCard>
        ))
        
        }

           
          
      </div>

     </main>

      
    </div>
   
   
   </>
  )
}

export default AllProducts
