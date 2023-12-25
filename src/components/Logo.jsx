import React from "react";

const Logo = () => {
  return (
    <video
      width={"100px"}
      style={{ borderRadius: "50%", padding: 10 }}
      muted
      loop
      controls={false}
      autoPlay
      src="https://cdn.dribbble.com/userupload/3271265/file/original-7456a2b72296602769d1283748a0b523.m4v"
    />
  );
};

export default Logo;
