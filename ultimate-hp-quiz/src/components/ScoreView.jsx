import React from "react";

const ScoreView = ({ score, handleResetClick }) => {
  return (
    <div>
      <div className="score">Your score: {score}/10</div>
      <button onClick={handleResetClick}>Reset Quiz</button>
    </div>
  );
};

export default ScoreView;
