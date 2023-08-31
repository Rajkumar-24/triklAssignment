import React, { useEffect, useState } from "react";
import EditableText from "./EditableText";
import "./ImageComponent.css";

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textOverlays, setTextOverlays] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=jv0TyZDK6IiyOyzUjrOMpCpFHo_TTso_i0GytPwD8kM`
    );
    const data = await response.json();
    setImageUrl(data.urls.regular);
    setImageLoaded(true);
  };
  const addTextOverlay = () => {
    if (inputText.trim() !== "") {
      setTextOverlays((prevTextOverlays) => [
        ...prevTextOverlays,
        { text: inputText, position: { x: 0, y: 0 } },
      ]);
      setInputText("");
    }
  };
  return (
    <div className="image-container">
      {imageLoaded && (
        <>
          <img className="background-image" src={imageUrl} alt="Unsplash" />
          <div className="text-overlay-container">
            {textOverlays.map((overlay, index) => (
              <EditableText
                key={index}
                text={overlay.text}
                position={overlay.position}
              />
            ))}
          </div>
          <div className="input-container">
            <input
              className="text-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text"
            />
            <button className="add-text-button" onClick={addTextOverlay}>
              Add Text
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageComponent;
