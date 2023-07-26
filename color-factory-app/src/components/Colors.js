import React from "react";
import {Link} from "react-router-dom";

export const initialColors = [
  {
    color: "red",
    value: "red",
  },
  {
    color: "green",
    value: "green",
  },
  {
    color: "blue",
    value: "blue",
  },
];

const Colors = () => {

  return (
    <div>
      <h2>Welcome to the color factory!</h2>
      <Link exact to="/colors/new">
        Add a Color
      </Link>

      <h3>Please Select a Color</h3>
      <br />
    
      <ul>
      {initialColors.map(({color}) => (
        <li key={color}>
            <Link to={color}>{color}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Colors;
