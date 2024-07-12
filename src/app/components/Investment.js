"use client"
import React from 'react';

const Investment = () => {
  return (
    <section className="investment py-20 bg-gray-100 relative">
      <div className="container mx-auto">
        <div className="investment__row flex flex-wrap">
          <div className="investment__col w-full md:w-1/2">
            <div className="section-intro">
              <h3 className="title">REFERRAL PROGRAM</h3>
              <div className="section-intro__description">
                <p>Anyone can take part in the affiliate program. It allows you to receive generous rewards by inviting new members</p>
              </div>
            </div>
            <ul className="investment-stats mt-8">
              <li>
                <p className="title">4 LEVELS OF REFERRAL PROGRAM</p>
                <div className="section-intro__description">
                  <p>Get extra profit when people in your structure invite new investors to the company</p>
                </div>
              </li>
              <li>
                <p className="investment-stats__count text-4xl font-bold leading-tight">7<sup>%</sup> -  3<sup>%</sup><br />2<sup>%</sup> -  1<sup>%</sup></p>
              </li>
            </ul>
          </div>
          <div className="investment__col w-full md:w-1/2 flex justify-center items-center">
            <a className="notebook-video" href="#" data-fancybox="data-fancybox">
              <div className="notebook-video__content">
                <span className="notebook-video__title">VIDEO PRESENTATION</span>
                <span className="notebook-video__icon">
                  <svg className="w-12 h-12 fill-current text-blue-500">
                    <use href="https://allcoinvest.com/temp/custom/assets/icons/sprite.svg#icon-play"></use>
                  </svg>
                </span>
              </div>
              <img src="https://allcoinvest.com/temp/custom/assets/images/investment/notebook.png" alt="" className="ml-4" />
            </a>
          </div>
        </div>
        <div className="investment__slider swiper-container swiper-no-swiping js-swiper-advantages swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode mt-8">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <svg className="w-12 h-12 fill-current text-blue-500">
                    <use href="https://allcoinvest.com/temp/custom/assets/icons/sprite.svg#icon-002-24-hours"></use>
                  </svg>
                </div>
                <div className="advantages-item__description text-center">
                  <p>ROBOT TRADING WITHOUT WEEKENDS AND HOLIDAYS</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <svg className="w-12 h-12 fill-current text-blue-500">
                    <use href="https://allcoinvest.com/temp/custom/assets/icons/sprite.svg#icon-003-transfer"></use>
                  </svg>
                </div>
                <div className="advantages-item__description text-center">
                  <p>WITHDRAWAL 24/7</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <svg className="w-12 h-12 fill-current text-blue-500">
                    <use href="https://allcoinvest.com/temp/custom/assets/icons/sprite.svg#icon-001-wallet"></use>
                  </svg>
                </div>
                <div className="advantages-item__description text-center">
                  <p>BIG NUMBER OF PAYMENT SYSTEMS</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <svg className="w-12 h-12 fill-current text-blue-500">
                    <use href="https://allcoinvest.com/temp/custom/assets/icons/sprite.svg#icon-004-user"></use>
                  </svg>
                </div>
                <div className="advantages-item__description text-center">
                  <p>100% ANONYMOUS AND TRANSPARENCY OF THE WORK OF THE ROBOT</p>
                </div>
              </div>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
};

export default Investment;
