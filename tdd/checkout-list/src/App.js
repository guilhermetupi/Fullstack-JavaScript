import React, { useState } from 'react';
import NewItem from './NewItem';
import ItemList from './CheckoutList';

const App = () => {
  const [items, setItems] = useState([]);
  const handleSend = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <div>
      <NewItem onSend={handleSend} />
      <ItemList data={items} />
    </div>
  );
};

export default App;
