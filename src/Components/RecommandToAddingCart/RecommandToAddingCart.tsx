// React
import React from "react";
// React
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { recommandToAddToCart } from "../../Data/recommandToAddToCart";
import RecomendedCard from "../RecomendedCard/RecomendedCard";
import AboutSection from "../../Utils/AboutSection/AboutSection";
// Swiper

type RecomendedToAddingCartProps = {
  addToCartHandler: Function;
};

const RecommandToAddingCart: React.FunctionComponent<
  RecomendedToAddingCartProps
> = ({ addToCartHandler }) => {
  return (
    <div>
      <AboutSection about="پیشنهاد برای افزودن به سبد خرید" />
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="flex flex-row mt-5"
        direction="horizontal"
      >
        {recommandToAddToCart.map((item) => (
          <SwiperSlide key={item.id}>
            <RecomendedCard data={item} addToCartHandler={addToCartHandler} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommandToAddingCart;
