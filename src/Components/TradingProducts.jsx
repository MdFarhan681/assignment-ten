import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

const TradingProducts = ({ trading }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 2 },
        500: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {trading.map((product) => (
        <SwiperSlide key={product._id}>
          <div className="w-full p-1">
            <div className="card shadow-sm p-2 rounded-md h-[200px] flex flex-col">

              {/* IMAGE */}
              <figure className="w-full h-fit overflow-hidden flex items-center justify-center">
                <img
                  className="w-full h-fit object-contain"
                  src={product.coverImage}
                  alt="apps"
                />
              </figure>

              {/* CONTENTS */}
              <div className="flex flex-col text-start mt-1">
                <h2 className="font-semibold text-xs leading-tight">
                  {product.productName}
                </h2>

                <p className="text-gray-400 text-[10px]">
                  {product.description?.slice(0, 22)}
                </p>

                <div className="flex justify-between text-[11px] mt-1">
                  <p className="text-green-500 font-medium">
                    ৳{product.pricePerKg}
                  </p>
                  <p className="text-green-600">{product.availability}</p>
                </div>

                <Link
                  to={`/productDetails/${product._id}`}
                  className="btn bg-[#2bb958] text-black btn-xs rounded-sm w-full mt-1"
                >
                  View
                </Link>
              </div>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TradingProducts;
