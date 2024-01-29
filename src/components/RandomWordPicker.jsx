// src/components/RandomWordPicker.jsx
import { createSignal } from 'solid-js';

const RandomWordPicker = () => {
  // Define the list of words.
  const words = [
    "Love", "Impression", "Leadership", // ... more words
  ];

  // Use createSignal for reactivity. The initial value is an empty string.
  const [randomWord, setRandomWord] = createSignal("");

  // Function to pick a random word.
  const pickRandomWord = () => {
    // Select a random word from the array.
    const word = words[Math.floor(Math.random() * words.length)];
    
    // Update the randomWord signal with the selected word.
    setRandomWord(word);
  };

  // Return JSX for the component.
  return (
    <div>
      <button onClick={pickRandomWord}>Pick a Random Word</button>
      <p>{randomWord()}</p> {/* Display the selected word */}
    </div>
  );
};

export default RandomWordPicker;
