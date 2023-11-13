import React, { useState } from "react";

const ColorPickers = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleChange = (event:any) => {
    setSelectedColor(event.target.value);
  };

  const colors = [
    "#ffffff",
    "#000000",
    "#ff0000",
    "#00ff00",
    "#0000ff",
  ];

  return (
    <div>
      <h1>Renk Paleti Seçici</h1>
      <select value={selectedColor} onChange={handleChange}>
        {colors.map((color) => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <div style={{ backgroundColor: selectedColor, width: 200, height: 200 }}>
        <p>Seçili Renk: {selectedColor}</p>
      </div>
    </div>
  );
};

export default ColorPickers;