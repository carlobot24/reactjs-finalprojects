import React, { useState } from 'react';

const Sum = () => {
  const [userInput, setUserInput] = useState([]);
  const [sum, setSum] = useState();

  const getSum =(input) => {
    const sum = input
      .split(',')
      .map(n => parseInt(n))
      .reduce((acc, n) => {
        acc += n;
        return acc;
      }, 0);

    setSum(sum);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => getSum(userInput)}>
        Add
      </button>
      <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
  );
}

export default Sum;