import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router';
import ProductCard from '../../Components/ProductCard';
import Loader from '../../Components/Loader';

const AllProducts = () => {
   const rawdata = useLoaderData();
const [category, setCategory] = useState("");
const [location, setLocation] = useState("");
const [sort, setSort] = useState("");

   const fetchProduct = async () => {
  const params = {};

  if (category) params.category = category;
  if (location) params.location = location;
  if (sort) params.sort = sort;

  const { data } = await axios.get("http://localhost:5000/vehicles", {
    params,
  });

  setVehicles(data);
};

    

  return (
   <>
  

    <div>

       <main className="care py-15 flex flex-col w-fit mx-auto ">
        <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">Our All Products
        </h2>

<div className="filter my-4 w-fit mx-auto shadow-lg flex  ">



  
<div className=""><select className="select  w-fit rounded " onChange={(e) => setSort(e.target.value)}>
<option value="">Price</option>
<option value="price_asc">Low to High</option>
<option value="price_desc">High to Low</option>
</select></div>

<div className="">
  <select className="select  w-fit join-item border rounded" defaultValue="All Category" onChange={(e) => setCategory(e.target.value)}>
    <option disabled={true}>Category</option>
<option value="">All Category</option>
<option value="SUV">Protein</option>
<option value="Sedan">Vegitable</option>
<option value="Sedan">Healthy Fat</option>
</select></div>

  <div className="rounded join-item w-fit ">
   <button onClick={fetchProduct} className="btn" >Apply</button>
  </div>


</div>
        




       
      
      <div className="w-full mycard px-0 grid grid-cols-1 md:grid-cols-4 gap-5  mx-auto place-items-center">
        {
            
        rawdata.map((singlecard)=>(

      <ProductCard key={singlecard._id} singlecard={singlecard} 
        ></ProductCard>
        ))

       
        
        }

           
          
      </div>

     </main>

      
    </div>
   
   
   </>
  )
}

export default AllProducts
