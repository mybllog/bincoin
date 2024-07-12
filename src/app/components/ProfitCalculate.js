"use client"
import { useState } from 'react';

export default function ProfitCalculator() {
  const [selectedPlan, setSelectedPlan] = useState({ value: 2, percent: 1.8 });
  const [amount, setAmount] = useState(100);

  const handlePlanChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedPlan({
      value: selectedOption.value,
      percent: parseFloat(selectedOption.dataset.percent),
    });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const calculateIncome = (percent, amount) => {
    const daily = ((percent / 100) * amount).toFixed(2);
    const weekly = (daily * 7).toFixed(2);
    const monthly = (daily * 30).toFixed(2);
    return { daily, weekly, monthly };
  };

  const income = calculateIncome(selectedPlan.percent, amount);

  return (
    <div className="deposits__calculate p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="calculate-profit">
        <button className="btn btn--line-primary bg-blue-500 text-white py-2 px-4 rounded-md" onClick={() => document.getElementById('calculate-form').classList.toggle('hidden')}>
          <span>Calculate Profit</span>
        </button>
        <form id="calculate-form" className="calculate-profit__block hidden mt-4">
          <div className="calculate-profit__block-row grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="field">
              <label className="block mb-2">Tariff Plan</label>
              <div className="select-deposit relative">
                <select className="block w-full border border-gray-300 rounded-md p-2" name="tariff-plan" id="selectid" onChange={handlePlanChange}>
                  <option value="2" data-percent="1.8">Starting</option>
                  <option value="3" data-percent="2.5">Standard</option>
                  <option value="4" data-percent="3.3">Premium</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="block mb-2">Deposit Amount</label>
              <b id="error" className="text-red-500"></b>
              <div className="field-group flex items-center">
                <input className="field-gray field-counter w-full border border-gray-300 rounded-md p-2" type="number" name="amount" id="sum" value={amount} onChange={handleAmountChange} />
                <div className="field-group__currency ml-2">USD</div>
              </div>
            </div>
          </div>
          <ul className="calculate-stats mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-white p-4 rounded-md shadow-md">
              <p className="calculate-stats__value text-xl font-semibold" id="daily">{income.daily}<sub> USD </sub></p>
              <p className="calculate-stats__desc">Daily Income</p>
            </li>
            <li className="calculate-stats__separate-li md:hidden"></li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <p className="calculate-stats__value text-xl font-semibold" id="weekly">{income.weekly}<sub> USD </sub></p>
              <p className="calculate-stats__desc">Weekly Income</p>
            </li>
            <li className="calculate-stats__separate-li md:hidden"></li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <p className="calculate-stats__value text-xl font-semibold" id="monthly">{income.monthly}<sub> USD </sub></p>
              <p className="calculate-stats__desc">Monthly Income</p>
            </li>
          </ul>
          <a className="btn btn--primary bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block" href="https://account.allcoinvest.com/login">Deposit</a>
        </form>
      </div>
    </div>
  );
}
