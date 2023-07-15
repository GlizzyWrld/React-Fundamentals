import './NewBoxForm.css';
import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newBox = {
      width: parseInt(width),
      height: parseInt(height),
      backgroundColor,
    };
    addBox(newBox);
    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(evt) => setWidth(evt.target.value)}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(evt) => setHeight(evt.target.value)}
        />
      </label>
      <br />
      <label>
        Background Color:
        <input
          type="text"
          value={backgroundColor}
          onChange={(evt) => setBackgroundColor(evt.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
