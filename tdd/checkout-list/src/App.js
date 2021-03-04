import React, { useState } from 'react';
import NewItem from './NewItem';
import ItemList from './CheckoutList';

const App = () => {
  const [items, setItems] = useState([]);
  const handleSend = (newItem) => {
    setItems([newItem, ...items]);
  };

  const handleCheck = (item) => {
    let arr = [...items];
    let idx = arr.indexOf(item);
    let _item = { ...arr[idx] };

    _item.isChecked = !_item.isChecked;
    arr[idx] = _item;
    setItems([...arr]);
  };

  return (
    <div>
      <NewItem onSend={handleSend} />
      <ItemList data={items} onCheck={handleCheck} />
    </div>
  );
};

export default App;
