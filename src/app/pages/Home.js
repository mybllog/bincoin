'use client';

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import robot from '../assets/robot.png';
import Carousel from '../components/Carousel';
import TradingViewWidget from '../components/TradingViewWidget';
import FundsSection from '../components/FundsSection';
import ForexWidget from '../components/ForexWidget';
import ProfitCalculator from '../components/ProfitCalculate';
import StepsSlider from '../components/StepsSlider';
import Investment from '../components/Investment';
import PaymentsAndFooterWrapper from '../components/PaymentAndFooterWrapper';
import { Button } from '@mui/material';

const Page = () => {
  return (
    <div className="w-full">
      <Nav />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <Image
            role="presentation"
            alt='presentation'
            src={robot}
            height={100}
            style={{ opacity: 1, visibility: "inherit", transform: "translate(0px, 0px)" }}
            className="bg-cover w-96"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-bold text-4xl md:text-7xl">SAFE INVESTMENT WITH US</h1>
            <p className="text-white font-bold text-2xl md:text-4xl my-5">GET LIFETIME INCOME ON INVESTMENT</p>
            <Button className="bg-green-300 w-48 md:w-60 h-10 text-lg md:text-xl font-bold text-black">LOGIN/REGISTER</Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white my-10">
              <div>
                <p>Professional Crypto Industry Development Team</p>
              </div>
              <div>
                <p>Unique robot for trading</p>
              </div>
              <div>
                <p>Manage operations without user intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center items-center m-10 md:m-40">
        <div className="border border-green-400 w-10 h-2 bg-green-400"></div>
        <p className="text-white text-xl font-bold">INVESTMENT PROPOSALS</p>
        <p className="text-white text-lg">Allcoinvest employees ensure that every investor in our company can earn money</p>
      </div>
      <div className="px-2 py-3" style={{ backgroundColor: '#18272a' }}>
        <div className="flex flex-col md:flex-row">
          <div className="hover:bg-green hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
          <div className="hover:bg-green hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
          <div className="hover:bg-green hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="border w-full md:w-60 py-3 rounded-xl m-6 shadow-xl" style={{ backgroundColor: '#264C54' }}>
              <h1 className="text-white text-center">GENERAL COMMISSIONS</h1>
              <p className="text-white text-center px-4">These commissions are charged by Allcoinvest for the platform to work. They are not related to the profit received by our investors</p>
            </div>
            <ProfitCalculator />
          </div>
          <div>
            <div className="flex flex-col md:flex-row text-white">
              <div className="border border-green-300 w-full md:w-6"></div>
              <div className="p-4">
                <p>COMPANY COMMISSION</p>
                <p>0.5% from the received profit by the robot. This commission shows the earnings of the entire Allcoinvest structure, namely, each employee.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row text-white">
              <div className="border border-green-300 w-full md:w-6"></div>
              <div className="p-4">
                <p>COMPANY COMMISSION</p>
                <p>0.5% from the received profit by the robot. This commission shows the earnings of the entire Allcoinvest structure, namely, each employee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TradingViewWidget
        src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212m%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22plotLineColorGrowing%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22scaleFontColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22symbolActiveColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22OANDA%3ASPX500USD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22OANDA%3ANAS100USD%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU30%22%2C%22d%22%3A%22DAX%2030%22%7D%2C%7B%22s%22%3A%22OANDA%3AUK100GBP%22%2C%22d%22%3A%22FTSE%20100%22%7D%5D%7D%2C%7B%22title%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1%21%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3ANQ1%21%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FTSE%3AUKX%22%2C%22d%22%3A%22FTSE%20100%22%7D%2C%7B%22s%22%3A%22INDEX%3AINX%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%20Jones%20Industrial%20Average%22%7D%5D%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22locale%22%3A%22en%22%7D"
        height={500}
      />
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold my-4">Forex Cross Rates</h1>
        <ForexWidget />
      </div>
      <div className="flex flex-col justify-center text-center text-white space-y-3 m-10 md:m-40">
        <div className="border-green-400 w-10 h-2 bg-green-400 mx-auto"></div>
        <h1 className="font-bold text-xl">FastTrack Invest</h1>
        <p>The best cryptocurrency developers works in our company. <br />They have a wealth of experience and understanding of the crypto market behind them.<br /> They brought Allcoinvest to the world level of development</p>
      </div>
      <FundsSection />
      <StepsSlider />
      <Investment />
      <PaymentsAndFooterWrapper />
      <Footer />
      <Carousel />
    </div>
  );
};

export default Page;
