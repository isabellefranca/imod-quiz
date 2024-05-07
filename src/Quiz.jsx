import { useState } from "react";
import './layouts/quiz.css';

export const Quiz = () => {
  const questions = [
    {
      questionText:
        "In which episode Imogen and Laudna shared their first kiss?",
      answers: [
        { answerText: "40", isCorrect: false },
        { answerText: "65", isCorrect: true },
        { answerText: "70", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many years did they know eachother before meeting the group?",
      answers: [
        { answerText: "3", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: true },
      ],
    },
    {
      questionText: "What was the motive of their big fight?",
      answers: [
        { answerText: "Laudna broke Imogens rock", isCorrect: true },
        {
          answerText: "Imogen was jealous because Laudna made a new friend",
          isCorrect: false,
        },
        {
          answerText: "Laudna gave Imogen a gift that she didnt like",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
      <div className="quiz-container">
        <div className="quiz-app">
          {showScore ? (
            <div className="score">
              <span>
                You got {score} questions right of {questions.length}!
              </span>
            </div>
          ) : (
            <div className="questions-section">
              <div className="question-count">
                <span className="question-title">
                  Pergunta {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="question-text">
                <span>{questions[currentQuestion].questionText}</span>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answers.map((answers, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButton(answers.isCorrect)}
                  >
                    {answers.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
  );
};
