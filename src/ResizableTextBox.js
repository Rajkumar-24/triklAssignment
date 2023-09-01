// ResizableTextBox.js
import React, { useState } from "react";
import "./ResizableTextBox.css";

const ResizableTextBox = () => {
  const [boxWidth, setBoxWidth] = useState(200);
  const [boxHeight, setBoxHeight] = useState(100);
  const [boxX, setBoxX] = useState(50);
  const [boxY, setBoxY] = useState(50);

  const handleResize = (event, direction) => {
    const { clientX, clientY } = event;

    const newWidth = direction.includes("right")
      ? clientX - boxX
      : boxWidth + (boxX - clientX);

    const newHeight = direction.includes("bottom")
      ? clientY - boxY
      : boxHeight + (boxY - clientY);

    setBoxWidth(newWidth);
    setBoxHeight(newHeight);
  };

  return (
    <div
      className="resizable-box"
      style={{ width: boxWidth, height: boxHeight, top: boxY, left: boxX }}
    >
      <textarea
        className="editable-text-textarea"
        value={"Apple"}
        placeholder={"sfhfuj"}
      />
      <div
        className="resize-handle top-left"
        onMouseDown={(e) => handleResize(e, "top-left")}
      />
      <div
        className="resize-handle top-right"
        onMouseDown={(e) => handleResize(e, "top-right")}
      />
      <div
        className="resize-handle bottom-left"
        onMouseDown={(e) => handleResize(e, "bottom-left")}
      />
      <div
        className="resize-handle bottom-right"
        onMouseDown={(e) => handleResize(e, "bottom-right")}
      />
    </div>
  );
};

export default ResizableTextBox;
