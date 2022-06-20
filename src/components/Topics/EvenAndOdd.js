import React, { useState } from 'react';

const EvenAndOdd = () => {
  const [ evens, setEvens ] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState('');

  const solve = (input) => {
    const results = {
      evens: [],
      odds: [],
    }
    for (let val of input.split(',').map(v => parseInt(v))) {
      if (val % 2 === 0) {
        results.evens.push(val);
      } else {
        results.odds.push(val);
      }
    }

    setEvens(results.evens);
    setOdds(results.odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
      <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
    </div>
  )
}

export default EvenAndOdd;