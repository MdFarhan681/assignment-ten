import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Loader from '../../Components/Loader';
import axios from 'axios';

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);        // Raw data from server
  const [displayProducts, setDisplayProducts] = useState([]); // Filtered + sorted
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch ALL products once when page loads
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://assignmenttenserver-pi.vercel.app/products");
        setAllProducts(data);
        setDisplayProducts(data); // Show all initially
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  // Apply button handler
  const handleApplyFilters = () => {
    let filtered = [...allProducts]; // Start with full list

    // 1. Filter by category
    if (category && category !== "") {
      filtered = filtered.filter(product => product.category === category);
    }

    // 2. Sort by price
    if (sort === "price_asc") {
      filtered.sort((a, b) => a.pricePerKg - b.pricePerKg); // Low → High
    } else if (sort === "price_desc") {
      filtered.sort((a, b) => b.pricePerKg - a.pricePerKg); // High → Low
    }

    setDisplayProducts(filtered);
  };

  // Optional: Reset button
  const handleReset = () => {
    setCategory("");
    setSort("");
    setDisplayProducts(allProducts);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <main className="py-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary">
          Our All Products
        </h2>

        {/* FILTERS + APPLY BUTTON */}
        <div className="flex flex-wrap  justify-center mb-12 p-8  rounded-2xl  w-fit mx-auto">
          {/* Category Filter */}
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

          {/* Sort Filter */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-fit max-w-xs join-item"
          >
            <option value="">Price</option>
            <option value="price_asc"> Low to High</option>
            <option value="price_desc">High to Low</option>
          </select>

          {/* Apply Button */}
          <button
            onClick={handleApplyFilters}
            className="btn px-8 join-item"
          >
            Apply Filters
          </button>
        </div>

        {/* LOADING & PRODUCTS */}
        {loading ? (
          <div className="flex justify-center py-32">
            <Loader />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No products found matching your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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