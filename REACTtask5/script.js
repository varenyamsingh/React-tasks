import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const diffInMs = today.getTime() - birthDate.getTime();
    const days = diffInMs / (1000 * 60 * 60 * 24);
    setAge(Math.floor(days / 365));
  };

  const handleChange = (event) => {
    setBirthDate(new Date(event.target.value));
  };

  return (
    <div className="container">
      <h1 className="heading">Age Calculator</h1>

      <div className="input-group">
        <label className="input-label">Enter your birth date:</label>
        <input
          type="date"
          className="input-field"
          value={birthDate.toISOString().substring(0, 10)}
          onChange={handleChange}
        />
      </div>

      <button className="button" onClick={calculateAge}>Calculate Age</button>

      {age !== null && (
        <div className="result">
          Your age is: {age} years
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<AgeCalculator />, document.getElementById('root'));