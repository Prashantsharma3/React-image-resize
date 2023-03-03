import React from 'react';
import image from '../image.jpeg';
import '../styles/App.css';

const App = () => {
  const [height, setHeight] = React.useState(320);
  const [width, setWidth] = React.useState(320);

  return (
    <div id="main">
      <img id="resizable-img" src={image} height={height} width={width} />

      <label htmlFor="width-slider">Width:</label>
      <input id="width-slider" type="range" min="100" max="800" value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))} />

      <label htmlFor="height-slider">Height:</label>
      <input id="height-slider" type="range" min="100" max="800" value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))} />
    </div>
  );
};

export default App;

