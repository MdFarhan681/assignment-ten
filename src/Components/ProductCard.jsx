import React, { useState } from "react";
import ratings from "../../src/assets/ratings.png"
import { Link, NavLink, useNavigate } from "react-router";
import Loader from "./Loader";

const ProductCard = ({ singlecard,setloading  }) => {
  const { productName, coverImage, pricePerKg,_id,description,availability } = singlecard;

   

  return (

    <>
     
    <div>
      <div className="btn  w-75 h-95 p-3  card shadow-sm   ">
        
        <figure>
          <img className="rounded-sm w-full h-50 " src={coverImage} alt="apps" />
        </figure>


        <div className=" flex flex-col  w-full  text-start">
          <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2">
            {productName}
          </h2>
           <p className="text-gray-400 text-sm text-ellipsis overflow-hidden line-clamp-2">{description}</p>
          

          <div className=" flex  w-full justify-between ">
            <div className="left flex gap-1  items-center text-left">
              <p className="text-green-500">Price: <span className="text-xl">৳</span>{pricePerKg}</p>
             
            </div>
            
            <div className="left flex gap-1 items-center  ">
             
              <p className="text-green-600">{availability}</p>
            </div>

            
          </div>


           <div className="navbar-end w-full py-2">
    <NavLink onClick={() => handleNav(navigate, `/ProductDetails/${_id}`, setloading)} to={`/ProductDetails/${_id}`} className="btn bg-[#2bb958] rounded-sm w-full">View Details</NavLink>
  </div>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default ProductCard;
