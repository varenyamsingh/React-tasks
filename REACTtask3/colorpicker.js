import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [showColors, setShowColors] = useState(false);

  const handleToggleColors = () => {
    setShowColors((prevState) => !prevState);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      <button className="color-picker-button" onClick={handleToggleColors}>
        Pick a color
      </button>
      {showColors && (
        <div className="color-picker-colors">
          {colors.map((color) => (
            <div
              key={color}
              className={`color-picker-color ${color === selectedColor && 'selected'}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}

      <div className="selected-color" style={{ backgroundColor: selectedColor }}>
        Selected Color: {selectedColor}
      </div>
    </div>
  );
};

export default ColorPicker;
