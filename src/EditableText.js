import React, { useState } from "react";
import "./EditableText.css";

const EditableText = ({ text, position }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialMouseX(e.clientX);
    setInitialMouseY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - initialMouseX;
      const deltaY = e.clientY - initialMouseY;

      const newPosX = position.x + deltaX;
      const newPosY = position.y + deltaY;

      position.x = newPosX;
      position.y = newPosY;

      setInitialMouseX(e.clientX);
      setInitialMouseY(e.clientY);
    }
  };

  const handleTextChange = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <div
      className="editable-text-container"
      style={{
        top: position.y,
        left: position.x,
        width: width,
        height: height,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <textarea
        className="editable-text-textarea"
        value={displayText}
        onChange={handleTextChange}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default EditableText;
