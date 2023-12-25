import React, { useState } from "react";
import Home from "./Home";

const img2 =
  "https://cdn.dribbble.com/users/1436857/screenshots/5314221/media/0c75ad71a3a5e6cb1f6a2f825dde0ce1.jpg?resize=800x600&vertical=center";

const img1 =
  "https://cdn.dribbble.com/userupload/6367346/file/original-766499d3942abf32bd6dd0d70046d1f2.png?resize=1200x900";

const PopUp = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <>
      <div className="popup">
        <img
          onClick={handleState}
          src={!state ? `${img1}` : `${img2}`}
          alt="img"
        />
      </div>
      {state && <Home />}
    </>
  );
};

export default PopUp;
