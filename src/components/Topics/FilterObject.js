import React, { useState } from 'react';

const FilterObject = () => {
  const [unFilteredArray, setUnFilteredArray] = useState([
    { name:  'John', title: 'Junior Developer', age: 20 },
    { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
    { name: 'Lisa', title: 'Senior Developer' },
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [userInput, setUserInput] = useState('');

  const filter = (input) => {
    const filtered = unFilteredArray.filter(o => {
      if (o[input]) {
        return true;
      }

      return false
    })

    setFilteredArray(filtered);
  }

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">Original: {JSON.stringify(unFilteredArray, null, 10)}</span>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
      <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray, null, 10)}</span>
    </div>
  )
}

export default FilterObject;