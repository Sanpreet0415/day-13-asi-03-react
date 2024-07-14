import { useState } from 'react';

const useToggleItems = (initialValue, initialPosition = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);
  const [items, setItems] = useState(initialValue);

  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return [items[currentIndex], toggleState];
};

export default useToggleItems;
