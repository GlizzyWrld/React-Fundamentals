import { initialColors } from "./Colors";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewColorForm = () => {
  const [color, setColor] = useState("");
  const [value, setValue] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && value) {
      initialColors.unshift({color, value});

      // Redirect to the colors index page
      navigate("/colors");
    }
  };

  return (
    <div>
      <h2>Welcome to the color factory!</h2>
      <Link to="/colors">Back to Colors</Link>

      <h3>Add a New Color</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter color name"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
