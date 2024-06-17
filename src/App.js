import React, { useState } from "react";
import './App.css';
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "What is the name of Harry Potter's owl?",
      answers: [
        { text: "Errol" },
        { text: "Pigwidgeion" },
        { text: "Hedwig", isCorrect: true },
        { text: "Crookshanks" }],
    },
    {
      question: 'Who is the author of the book "Fantastic Beasts and Where to Find Them"?',
      answers: [
        { text: "Albus Dumbledore" },
        { text: "Newt Scamander" },
        { text: "Gilderoy Lockhart" },
        { text: "Bathilda Bagshot", isCorrect: true },
      ],
    },
    {
      question: "What is the spell used to disarm an opponent?",
      answers: [
        { text: "Expelliarmus", isCorrect: true },
        { text: "Stupefy" },
        { text: "Avada Kedavra" },
        { text: "Lumos" },
      ],
    },
    {
      question: "In which book does Harry first learn about the existence of Horcruxes?",
      answers: [
        { text: "The Philosopher's Stone" },
        { text: "The Half-Blood Prince", isCorrect: true },
        { text: "The Chamber of Secrets" },
        { text: "The Deathly Hallows" },
      ],
    },
    {
      question: "Who is the Half-Blood Prince?",
      answers: [
        { text: "Severus Snape", isCorrect: true },
        { text: "Harry Potter" },
        { text: "Draco Malfoy" },
        { text: "Tom Riddle" },
      ],
    },
    {
      question: "What is the name of Ron Weasley's pet rat?",
      answers: [
        { text: "Crookshanks" },
        { text: "Fang" },
        { text: "Scabbers", isCorrect: true },
        { text: "Trevor" }],
    },
    {
      question: "What position does Harry play on his Quidditch team?",
      answers: [
        { text: "Chaser" },
        { text: "Seeker", isCorrect: true },
        { text: "Beater" },
        { text: "Keeper" }],
    },
    {
      question: "What does the Marauder's Map show?",
      answers: [
        { text: "The layout of Hogwarts" },
        { text: "The location of the Philosopher's Stone" },
        { text: "Secret passages in Hogsmeade"},
        { text: "The movements of everyone within Hogwarts", isCorrect: true }],
    },
    {
      question: "Which of these is NOT a Deathly Hallow?",
      answers: [
        { text: "The Elder Wand" },
        { text: "The Resurrection Stone" },
        { text: "The Sorcerer's Stone", isCorrect: true },
        { text: "The Invisibility Cloak" }],
    },
    {
      question: "What creature is Aragog?",
      answers: [
        { text: "A giant spider", isCorrect: true },
        { text: "A basilisk" },
        { text: "A dragon" },
        { text: "A hippogriff" }],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };
  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
