"use client";

import React from 'react';

const FundsSection = () => {
  return (
    <section className="funds py-12 text-white ">
      <div className="container mx-auto px-4">
        <div className="section-intro text-center mb-12 ">
          <h3 className="title  text-3xl font-bold opacity-0 visibility-hidden transform translate-y-2">
            Allcoinvest TRADERS
          </h3>
          <div className="section-intro__description opacity-0 visibility-hidden transform translate-y-2 mt-4">
            <p>
              The best cryptocurrency developers work in our company. They have a wealth of experience and understanding of the crypto market behind them. They brought Allcoinvest to the world level of development.
            </p>
          </div>
        </div>
        <div className="funds__slider swiper-container">
          <div className="swiper-wrapper flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="swiper-slide w-full md:w-1/3 opacity-0 visibility-hidden transform translate-y-8">
              <div className="funds-item p-4 border rounded-lg shadow-lg ">
                <div className="funds-item__icon mb-4">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/1.png" alt="Unique Trading Bot" className="w-full" />
                </div>
                <h4 className="funds-item__title text-xl font-bold mb-2">UNIQUE TRADING BOT</h4>
                <div className="funds-item__description">
                  <p>
                    Allcoinvest team of professionals has created a unique trading robot that makes profit at any stage of the market: rise or fall.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide w-full md:w-1/3 opacity-0 visibility-hidden transform translate-y-8">
              <div className="funds-item p-4 border rounded-lg shadow-lg">
                <div className="funds-item__icon mb-4">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/2.png" alt="Stable and Automated Investment" className="w-full" />
                </div>
                <h4 className="funds-item__title text-xl font-bold mb-2">STABLE AND AUTOMATED INVESTMENT</h4>
                <div className="funds-item__description">
                  <p>
                    The robot is not human-related. And that is why all investments are reliable and completely safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide w-full md:w-1/3 opacity-0 visibility-hidden transform translate-y-8">
              <div className="funds-item p-4 border rounded-lg shadow-lg">
                <div className="funds-item__icon mb-4">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/3.png" alt="The Experts Will Do Everything for You" className="w-full" />
                </div>
                <h4 className="funds-item__title text-xl font-bold mb-2">THE EXPERTS WILL DO EVERYTHING FOR YOU</h4>
                <div className="funds-item__description">
                  <p>
                    The highly professional Allcoinvest team controls all the processes of the trading robot around the clock. After investing, you will observe the growth of your capital in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="funds__bottom text-center mt-8">
          <a
            className="btn btn--line-primary text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-500"
            href="https://account.allcoinvest.com/register"
          >
            INVEST WITH US AND GET STABLE INCOME
          </a>
        </div>
      </div>
    </section>
  );
};

export default FundsSection;
