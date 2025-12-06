import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Loader from '../../Components/Loader';
import axios from 'axios';

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);        
  const [displayProducts, setDisplayProducts] = useState([]); 
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://assignmenttenserver-pi.vercel.app/products");
        setAllProducts(data);
        setDisplayProducts(data); 
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const handleApplyFilters = () => {
    let filtered = [...allProducts]; 

    if (category && category !== "") {
      filtered = filtered.filter(product => product.category === category);
    }

    if (sort === "price_asc") {
      filtered.sort((a, b) => a.pricePerKg - b.pricePerKg); 
    } else if (sort === "price_desc") {
      filtered.sort((a, b) => b.pricePerKg - a.pricePerKg); 
    }

    setDisplayProducts(filtered);
  };


  return (
    <div className="min-h-screen bg-base-100">
      <main className="care py-7 md:py-15 flex flex-col w-[92%] mx-auto ">
        <h2 className=" text-2xl md:text-3xl font-bold text-center pb-5">
          Our All Products
        </h2>

        <div className="flex flex-wrap  justify-center mb-12 rounded-2xl  w-fit mx-auto">
      
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-fit max-w-xs join-item"
          >
            <option value="">All Categories</option>
            <option value="Proteins">Protein</option>
            <option value="Vegetables">Vegetable</option>
            <option value="Healthy Fats">Healthy Fat</option>
          </select>


          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-fit max-w-xs join-item"
          >
            <option value="">Price</option>
            <option value="price_asc"> Low to High</option>
            <option value="price_desc">High to Low</option>
          </select>

          <button
            onClick={handleApplyFilters}
            className="btn px-2 join-item"
          >
            Apply Filters
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-32">
            <Loader />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No products found matching your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
            {displayProducts.map((product) => (
              <ProductCard key={product._id} singlecard={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllProducts;