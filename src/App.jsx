// App.js

import React from 'react';
import useToggleItems from './useToggleItems'; // Importing the custom hook

const App = () => {
  const items = ["A", "B", "C"];
  const [currentItem, toggleItem] = useToggleItems(items, 1); // Initial position is 1 (which is "B")

  return (
    <div>
      <h1>Toggle Items Example</h1>
      <p>Current Item: {currentItem}</p>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
};

export default App;
