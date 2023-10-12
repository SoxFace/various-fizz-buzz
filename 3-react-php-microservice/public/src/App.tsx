import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface FizzBuzzData {
  input: number;
  output: string;
}

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [data, setData] = useState<FizzBuzzData[]>([]);

  const calculateFizzBuzz = () => {
    // validate values
    const startValue = parseInt(start);
    const endValue = parseInt(end);

    if (!isNaN(startValue) && !isNaN(endValue)) {
      if (startValue > endValue) {
        alert('Start value should be less than end value.');
      }
      // Fetch FizzBuzz data from api using params
      axios.get(`http://localhost:8000/?start=${startValue}&end=${endValue}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else  {
      alert('Please enter valid numbers for start and end.');
    }
  };

  return (
    <div className="App">
      <h1>FizzBuzz Data</h1>
      <div className="input">
        <div className="input-group">
          <div className="input-label">Start:</div>
          <input
            className="input-field"
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">End:</div>
          <input
            className="input-field"
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
          <button className="blue-button" onClick={calculateFizzBuzz}>Calculate</button>
        </div>
      </div>
      <div className="divider"></div> {/* Divider line here */}
      <div className='fizzbuzz-list'>
        <ol>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <li key={index}>{`${item.output || '-'}`}</li>
            ))
          ) : (
            <li>No data available</li>
          )}
        </ol>
      </div>
    </div>
  );
  
}

export default App;
