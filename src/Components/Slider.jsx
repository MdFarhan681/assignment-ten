import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from 'react-router';
const slides = [
  {
    id: 1,
    title: "Fresh Vegetables for a Healthy Life",
    desc: "Naturally grown, nutrient-rich vegetables straight from trusted organic farms.",
    img: "https://i.ibb.co/d4hrYWNF/food1.jpg",
  },
  {
    id: 2,
    title: "High-Quality Organic Protein Essentials",
    desc: "Wholesome protein sources to keep your body active, strong, and energized.",
    img: "https://i.ibb.co/PZk0Qqtt/food2.jpg",
  },
  {
    id: 3,
    title: "Premium Organic Fruits & Nut Collections",
    desc: "Handpicked fruits and nutrient-dense nuts for daily wellness.",
    img: "https://i.ibb.co/4c7nNvC/food3.jpg",
  },
];

const Slider = () => {
  return (
    <div className='w-full px-[0%]'> <div className="w-full max-w-full mx-auto rounded-2xl overflow-hidden shadow-xl ">
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center text-[#e5e5e5]
px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
                <NavLink
  to="/allProducts"
  className="btn  px-6 py-3 font-semibold rounded-md border-2 border-white text-white bg-transparent hover:bg-green-400 hover:text-white transition-all duration-300"
>
All Products
</NavLink>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
    </div>
  )
}

export default Slider
