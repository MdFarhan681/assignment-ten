import React from 'react'
import Slider from '../../Components/Slider'
import ProductCard from '../../Components/ProductCard';
import { useLoaderData } from 'react-router';
import ExpertFarmer from '../../Components/ExpertFarmer';
import TradingProducts from '../../Components/TradingProducts';

const Home = () => {
     const trading = useLoaderData();
     

  return (
    <div className="py-10 px-[7%]">
     <Slider></Slider>

      <main className="care py-15 flex flex-col ">
        <div className="latest">
            <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">Our Latest Products
        </h2>

         <div className="w-fit mycard px-0 grid grid-cols-1 md:grid-cols-3 gap-5  mx-auto place-items-center">
        {
            
        trading.map((singlecard)=>(

      <ProductCard key={singlecard._id} singlecard={singlecard}></ProductCard>
        ))
        
        }
       
      </div>
        </div>



<h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5 mt-15">Our Popular Products
        </h2>
       <div className="expert">
        <TradingProducts trading={trading}></TradingProducts>
      </div>



       <div className="expert">
        <ExpertFarmer></ExpertFarmer>
      </div>

  


      </main>
      
    </div>
  )
}

export default Home
