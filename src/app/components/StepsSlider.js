"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const StepsSlider = () => {
  return (
    <section className="steps bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="section-intro mb-8">
          <h3 className="title text-3xl font-bold">3 STEPS TO START</h3>
        </div>
        <div className="steps__slider swiper-container swiper-no-swiping js-swiper-steps">
          <div className="steps__hearts mb-6 flex">
            <img
              src="https://allcoinvest.com/temp/custom/assets/images/steps/1.png"
              alt="Step 1"
              className="opacity-100 visible"
            />
            <img
              src="https://allcoinvest.com/temp/custom/assets/images/steps/2.png"
              alt="Step 2"
              className="opacity-100 visible"
            />
          </div>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            freeMode={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="steps-item">
                <p className="steps-item__count">#1</p>
                <h4 className="steps-item__title">REGISTRATION</h4>
                <div className="steps-item__description">
                  <p>
                    Click the Register button. Fill in your details to create a FREE Allcoinvest account in seconds
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="steps-item">
                <p className="steps-item__count">#2</p>
                <h4 className="steps-item__title">CHOOSE INVESTMENT PLAN</h4>
                <div className="steps-item__description">
                  <p>
                    We offer a variety of investment plans to suit your financial goals. After reading, make a deposit
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="steps-item">
                <p className="steps-item__count">#3</p>
                <h4 className="steps-item__title">START EARNING</h4>
                <div className="steps-item__description">
                  <p>
                    After making a deposit, watch your capital grow by accumulating daily profit in real time
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
};

export default StepsSlider;
