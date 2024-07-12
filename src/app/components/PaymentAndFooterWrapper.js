"use client"
import React from 'react';

export default function PaymentsAndFooterWrapper() {
  return (
    <div className="payments-and-footer-wrapper__inner pt-20 md:pt-60 lg:pt-170 relative text-white">
      <section className="payments mb-5">
        <div className="container">
          <div className="payments__row flex flex-wrap">
            <div className="payments__col w-full md:w-1/2">
              <img
                src="https://allcoinvest.com/temp/custom/assets/images/payments/payment.png"
                alt="Payment Systems"
                className="opacity-100 visible transform-none"
              />
            </div>
            <div className="payments__col w-full md:w-1/2">
              <div className="payments__content">
                <div className="section-intro">
                  <h3 className="title opacity-100 visible transform-none">PAYMENT SYSTEMS</h3>
                  <div className="section-intro__description opacity-100 visible transform-none">
                    <p>Allcoinvest supports a big number of payment systems</p>
                  </div>
                </div>
                <div className="typography opacity-100 visible transform-none text-white">
                  <p>Our company does not charge commissions for opening a deposit, as well as withdrawing funds from the platform</p>
                </div>
                <div className="payments__buttons opacity-100 visible transform-none">
                  <a href="https://account.allcoinvest.com/register" className="btn btn--line-primary"><span>INVEST</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
