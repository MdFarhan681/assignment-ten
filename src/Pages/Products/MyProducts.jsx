import React, { useContext, useEffect, useState } from "react";

import MyCard from "../../Components/MyCard";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loader from "../../Components/Loader";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setproducts] = useState([]);

  const [loading, setloading] = useState(true);

 
  useEffect(() => {
    axios
      .get(`http://localhost:3000/myProduct?email=${user.email}`,{
        headers: {
            authorization:`Bearer ${user.accessToken}`
        }

      })
      .then((res) => {
      if(res.data.success){
        setproducts(res.data.data); 
      }
      setloading(false);
    })
     
  }, []);

  
  return (
    <>
      {loading && <Loader></Loader>}

      <div>
        <main className="care py-15 flex flex-col w-fit mx-auto ">
          <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">
            My Products
          </h2>

          <div className="w-full mycard px-0 grid grid-cols-1 md:grid-cols-4 gap-5  mx-auto place-items-center">
            {products?.map((singlecard) => (
              <MyCard
                key={singlecard._id}
                singlecard={singlecard}
                loading={loading}
                setloading={setloading}
              ></MyCard>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default MyProducts;
