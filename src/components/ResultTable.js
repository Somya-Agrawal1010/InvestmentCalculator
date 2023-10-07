import React from 'react';
import './ResultTable.css';

const formatter = new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2
});

const ResultTable = (props) => {
  return (
    <>
    <div className='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Saving</th>
                <th>Interest</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead> 
        <tbody>
           {props.data.map((yearData) => (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.savingsEndofYear)}</th>
              <th>{formatter.format(yearData.yearlyInterest)}</th>
              <th>{formatter.format(yearData.savingsEndofYear - props.initialInvestment - yearData.yearlyContribution)}</th>
              <th>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</th>
            </tr>
           ))}
        </tbody>
    </div>
    </>
  );
}

export default ResultTable;


