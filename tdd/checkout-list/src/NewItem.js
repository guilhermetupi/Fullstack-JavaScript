import React, { useState } from 'react';

const NewItem = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChamge = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    onSend({ text: inputText, isChecked: false });
    setInputText('');
  };

  return (
    <div>
      <input
        type='text'
        data-testid='itemText'
        value={inputText}
        onChange={handleTextChamge}
      />
      <button data-testid='sendBtn' onClick={handleSend}>
        Add
      </button>
    </div>
  );
};

export default NewItem;
