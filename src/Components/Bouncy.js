import React from "react";

const Bouncy = () => {

  return (
    <>
      <div className="container">
        <h1 className="center">Bouncy</h1>
        <p> Click to place a block</p>
        <p>Collect coins to get more blocks </p>
        <p>High score: <span id="highScore">0</span></p>
        <div id="gameDiv"></div>
        <iframe src="https://qooqu.github.io/bouncy/" width="500" height="600"></iframe>
      </div>
    </>
  );
};

export default Bouncy;
