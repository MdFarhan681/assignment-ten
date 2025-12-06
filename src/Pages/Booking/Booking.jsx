import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router";

import ProductCard from "../../Components/ProductCard";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [products, setproducts] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://assignmenttenserver-pi.vercel.app/myBooked?email=${user.email}`,
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

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <main className="care py-15 flex flex-col w-fit mx-auto">
        <h2 className=" text-2xl md:text-3xl font-bold text-center pb-5">
          My Booking Products
        </h2>

        <div className="w-full mycard px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5  mx-auto place-items-center ">
          {products && products.length > 0 ? (
            products.map((singlecard) => (
              <ProductCard
                key={singlecard._id}
                singlecard={singlecard}
              ></ProductCard>
            ))
          ) : (
            <div className="card col-span-full flex justify-center w-96 bg-base-100 card-sm shadow-sm ">
              <div className="card-body ">
                <h2 className="card-title justify-center">
                  You don’t have any booked product yet.
                </h2>

                <div className="justify-center card-actions mt-3">
                  <NavLink
                    to={"/allProducts"}
                    className="btn px-4 shadow-xl shadow-green py-3 font-semibold rounded-md text-black bg-green-500  hover:text-white hover:border-white transition-all duration-300"
                  >
                    All Products
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Booking;
