import React, { useState } from "react";
import Draggable from "react-draggable";
import "./EditableText.css";

const EditableText = ({ text, position }) => {
  const [displayText, setDisplayText] = useState(text);

  const handleTextChange = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <Draggable>
      <div
        className="editable-text-container"
        style={{ top: position.y, left: position.x, background: "transparent" }}
      >
        <textarea
          className="editable-text-textarea"
          value={displayText}
          onChange={handleTextChange}
          placeholder={""}
        />
      </div>
    </Draggable>
  );
};

export default EditableText;
