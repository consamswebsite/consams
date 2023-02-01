import React from "react";
import { withRouter } from "react-router-dom";

const TopPhoto = withRouter(function () {
  return (
    <div
      style={{
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("assets/images/background-300px.png")`,
        opacity: 0.8,
        zIndex: -1,
      }}
    />
  );
});

export default TopPhoto;
