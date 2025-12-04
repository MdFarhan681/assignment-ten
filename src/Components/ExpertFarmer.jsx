import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ExpertFarmer = () => {
  return (
    <section className="w-full py-12 px-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Meet Our Expert Farmers
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-40"
        >
          {/* Farmer 1 */}
          <SwiperSlide>
            <div className="card  w-[300px] h-[360px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/zHPWthbZ/farmer1.jpg"
                  alt="Farmer Abdul Rahman"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Abdul Rahman
                  </h3>
                  <p className="text-green-600 text-sm font-medium mb-2">
                    Organic Vegetable Specialist
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Expert in growing pesticide-free leafy greens and winter
                    vegetables using sustainable farming methods.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-green-100 text-green-800 border-none rounded-full hover:bg-green-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Farmer 2 */}
          <SwiperSlide>
            <div className="card w-[300px] h-[360px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/7NL23Qjm/farmer2.jpg"
                  alt="Farmer Salma Akter"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                   Gias Uddin
                  </h3>
                  <p className="text-green-600 text-sm font-medium mb-2">
                    Fruit Cultivation Expert
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Specializes in mango, banana, and seasonal fruits with
                    modern irrigation and natural growth techniques.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-green-100 text-green-800 border-none rounded-full hover:bg-green-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Farmer 3 */}
          <SwiperSlide>
            <div className="card  w-[300px] h-[360px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="w-full h-45 bg-gray-50 rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.ibb.co/qM8B0QHY/farmer3.jpg"
                  alt="Farmer Riaz Ahmed"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Riaz Ahmed
                  </h3>
                  <p className="text-green-600 text-sm font-medium mb-2">
                    Soil & Crop Management Expert
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Helps farmers improve soil health, crop rotation, and
                    chemical-free farming for higher yields.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-green-100 text-green-800 border-none rounded-full hover:bg-green-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Farmer 4 */}
          <SwiperSlide>
            <div className="card w-[300px] h-[360px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/wh6HwL67/farmer4.jpg"
                  alt="Farmer Laila Begum"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                  Nazrul Islam
                  </h3>
                  <p className="text-green-600 text-sm font-medium mb-2">
                    Seed & Harvesting Specialist
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Expert in high-quality seed selection, germination, and
                    sustainable harvesting techniques.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-green-100 text-green-800 border-none rounded-full hover:bg-green-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default 
ExpertFarmer;