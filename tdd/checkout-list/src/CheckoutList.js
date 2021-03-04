import React from 'react';

const ItemList = ({ data, onCheck }) => {
  const handleCheck = (item) => {
    onCheck(item);
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.text}>
          {item.text}
          <label htmlFor='chckbox' data-testid='checkText'>
            {item.isChecked ? ' - DONE' : ''}
          </label>
          <input
            id='chckbox'
            type='checkbox'
            data-testid='checkBtn'
            onClick={() => handleCheck(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
