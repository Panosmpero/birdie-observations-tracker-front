import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <div className="loading"></div>
        <div className="loading-text">
          Loading<span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
