import React, { useContext, useEffect, useState } from "react";

import MyCard from "../../Components/MyCard";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loader from "../../Components/Loader";
import { Link, Navigate, NavLink } from "react-router";
import { motion } from "framer-motion";
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setproducts] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://assignmenttenserver-pi.vercel.app/myProduct?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setproducts(res.data.data);
        }
        setloading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loader></Loader>}

      <div>
        <main className="care py-15 flex flex-col w-fit mx-auto px-[7%] place-items-center ">
            
          <h2 className=" text-2xl md:text-3xl font-bold text-center pb-5 ">
            My Products
          </h2>

          <div  className={`w-full mycard px-0 gap-5 mx-auto place-items-center text-center 
    ${products.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
  `}>
            {products && products.length > 0 ? (



              products.map((singlecard) => (
                <MyCard key={singlecard._id} singlecard={singlecard}  />
              ))
            ) : (
                <div className="w-full ">
              <div className="card w-96 bg-base-100 card-sm shadow-sm  mx-auto ">
                <div className="card-body">
                  <h2 className="card-title text-center">
                    You don’t have any products yet. Add your first product now!
                  </h2>

                  <div className="justify-center card-actions mt-3">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
  <NavLink
    to="/addProducts"
    className="btn px-4 shadow-xl shadow-green py-3 font-semibold rounded-md text-black bg-green-500 hover:text-white hover:border-white transition-all duration-300"
  >
    Add product
  </NavLink>
</motion.div>
                  </div>
                </div>
              </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default MyProducts;
