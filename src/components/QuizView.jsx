import React from "react";

const QuizView = ({ questions, currentQuestion, handleAnswerClick }) => {
  return (
    <div>
      <div className="question">{questions[currentQuestion].question}</div>
      <div className="answers">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizView;
