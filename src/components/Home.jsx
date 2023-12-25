import React, { useState } from "react";
import { ReactMic } from "react-mic";
import "./Home.css";
import Logo from "./Logo";

function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState("");

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedData) => {
    console.log("Recording data is captured:", recordedData);
  };

  const onStop = (recordedBlob) => {
    console.log("Recording stopped. Blob:", recordedBlob);
    setAudioData(recordedBlob.blobURL);
  };

  return (
    <div>
      <Logo />
      <div className="home">
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#845EC2"
        />
        <div>
          <button
            className="home_btn"
            onClick={startRecording}
            disabled={isRecording}
          >
            Start Recording
          </button>
          <button
            className="home_btn col"
            onClick={stopRecording}
            disabled={!isRecording}
          >
            Stop Recording
          </button>
        </div>
        {audioData && (
          <div>
            <h3 className="home_h1">Recorded Audio</h3>
            <audio controls>
              <source src={audioData} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
