import React, { useState } from "react";
import Speech from "speak-tts";

const TexttoSpeak = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const convertToSpeech = () => {
    const speech = new Speech();
    speech
      .init()
      .then((data) => {
        speech.speak({
          text,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={convertToSpeech}>Convert to Speech</button>
    </div>
  );
};

export default TexttoSpeak;
