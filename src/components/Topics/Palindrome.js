import React, { useState } from 'react';

const Palindrome = () => {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('Enter a word to check');

  function checkPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord
      .split('')
      .reverse()
      .join('');
    setAnswer(normalizedWord === reversedWord);
  }
  return (
    <div className="puzzleBox palindromePB">
    <h4>Palindrome</h4>
    <input
      className="inputLine"
      onChange={e => setUserInput(e.target.value)}
    />
    <button
      className="confirmationButton"
      onClick={() => checkPalindrome(userInput)}
    >
      Check
    </button>
    <span className="resultsBox">{JSON.stringify(answer)}</span>
  </div>
);
}
export default Palindrome;