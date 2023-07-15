import './Box.css';


function Box({ width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="box" style={boxStyle}>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
