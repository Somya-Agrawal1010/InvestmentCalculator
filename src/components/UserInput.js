import React, { useState } from 'react';
import './UserInput.css';

const initialvalue = {
  'current-saving': 1000,
  'yearly-contribution': 1200,
  'expected-return': 2,
  'duration': 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({...initialvalue});

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput({ ...initialvalue });
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [input]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler} className='form'>
      <div className='input-grp'>
        <p>
          <label htmlFor="current-saving" className="form-label">Current Saving($)</label>
          <input
            onChange={(event) => {
              changeHandler('current-saving', event.target.value);
            }}
            value={userInput['current-saving']}
            type="number"
            id="current-saving"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution" className="form-label">Yearly Saving($)</label>
          <input
            onChange={(event) => {
              changeHandler('yearly-contribution', event.target.value);
            }}
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className='input-grp'>
        <p>
          <label htmlFor="expected-return" className="form-label">Expected Interest(%,per year)</label>
          <input
            onChange={(event) => {
              changeHandler('expected-return', event.target.value);
            }}
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration" className="form-label">Investment Duration(years)</label>
          <input
            onChange={(event) => {
              changeHandler('duration', event.target.value);
            }}
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <div className='actions'>
        <button onClick={resetHandler} type="reset" className='button'>Reset</button>
        <button type='submit' className='button'>Calculate</button>
      </div>
    </form>
  );
};

export default UserInput;


