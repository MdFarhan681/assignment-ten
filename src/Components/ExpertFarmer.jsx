import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ExpertFarmer = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 py-4">
          Meet Our Expert Farmers
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
          }}
          breakpoints={{
            640: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          className="pb-20"
        >

          {/* ALL CARDS NOW HAVE EXACT SAME DIMENSIONS */}
          <SwiperSlide>
            <div className="card w-full max-w-[300px] mx-auto h-[340px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/zHPWthbZ/farmer1.jpg"
                  alt="Farmer Abdul Rahman"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left flex-1">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">Abdul Rahman</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">Organic Vegetable Specialist</p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed text-justify">
                    Expert in growing pesticide-free leafy greens and winter vegetables using sustainable farming methods.
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

          <SwiperSlide>
            <div className="card w-full max-w-[300px] mx-auto h-[340px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/7NL23Qjm/farmer2.jpg"
                  alt="Gias Uddin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left flex-1">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">Gias Uddin</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">Fruit Cultivation Expert</p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Specializes in mango, banana, and seasonal fruits with modern irrigation and natural growth techniques.
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

          <SwiperSlide>
            <div className="card w-full max-w-[300px] mx-auto h-[340px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/qM8B0QHY/farmer3.jpg"
                  alt="Riaz Ahmed"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left flex-1">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">Riaz Ahmed</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">Soil & Crop Management Expert</p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Helps farmers improve soil health, crop rotation, and chemical-free farming for higher yields.
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

          <SwiperSlide>
            <div className="card w-full max-w-[300px] mx-auto h-[340px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co/wh6HwL67/farmer4.jpg"
                  alt="Nazrul Islam"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left flex-1">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">Nazrul Islam</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">Seed & Harvesting Specialist</p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Expert in high-quality seed selection, germination, and sustainable harvesting techniques.
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

        {/* Perfectly centered pagination dots */}
        <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
      </div>
    </section>
  );
};

export default ExpertFarmer;