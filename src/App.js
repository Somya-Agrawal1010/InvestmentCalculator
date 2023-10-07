import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import UserInput from './components/UserInput';
import ResultTable from './components/ResultTable';

const App = () => {
  const [userInput, setUserInput] = useState({
    'current-saving': 1000,
    'yearly-contribution': 1200,
    'expected-return': 2,
    'duration': 10,
  });
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const calculatedYearlyData = [];

    if (userInput) {
      let currentSavings = userInput['current-saving'];
      const yearlyContribution = userInput['yearly-contribution'];
      const expectedReturn = userInput['expected-return'] / 100;
      const duration = userInput['duration'];

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        calculatedYearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndofYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    setYearlyData(calculatedYearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign:'center'}}>No investment is calculated</p>}
      {userInput && <ResultTable  data={yearlyData} initialInvestment={userInput['current-saving']} />}
    </div>
  );
};

export default App;



