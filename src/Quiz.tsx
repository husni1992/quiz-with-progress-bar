import React, { useState } from "react";
import { questions } from "./data/questions";
import Question from "./Question";
import { AnswerType } from "./types";

const Quiz: React.FC = () => {
  // Initialize answers with an empty array or empty string for each question based on answerType
  const initialAnswers = questions.reduce((acc, question) => {
    acc[question.id] = question.answerType === "multiple" ? [] : "";
    return acc;
  }, {} as AnswerType);

  const [answers, setAnswers] = useState<AnswerType>(initialAnswers);
  const [progress, setProgress] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);

  const handleAnswerChange = (questionId: string | number, answer: string | string[]) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers, [questionId]: answer };

      // Update progress by checking how many questions have been answered
      const answeredQuestions = Object.values(updatedAnswers).filter((a) => (Array.isArray(a) ? a.length > 0 : a !== "")).length;
      const totalQuestions = questions.length;
      const newProgress = (answeredQuestions / totalQuestions) * 100;
      setProgress(newProgress);

      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    // Here you might want to validate the answers or do something with them
    console.log("Answers:", answers);
    setShowSummary(true); // Show the summary popup
  };

  function selectElementContents(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  const handleCopyToClipboard = () => {
    const summaryElement = document.getElementById("summary-content") as HTMLPreElement;

    if (summaryElement) {
      selectElementContents(summaryElement);
    }

    const answerString = JSON.stringify(answers, null, 2);
    navigator.clipboard.writeText(answerString).then(
      () => {
        setCopiedToClipboard(true);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const closeModal = () => {
    setShowSummary(false);
    setCopiedToClipboard(false);
  };

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: progress === 100 ? "#4caf50" : "#9b9695" }}></div>
      </div>
      <div style={{ paddingTop: "25px" }}>
        {" "}
        {/* Add padding to avoid overlapping with the progress bar */}
        {questions.map((question, index) => (
          <Question key={question.id} number={index + 1} data={question} selectedAnswers={answers[question.id]} onChange={handleAnswerChange} />
        ))}
        <button onClick={handleSubmit}>Submit Answers</button>
      </div>
      {showSummary && (
        <div className="modal">
          <div className="modal-content">
            <h2>Quiz Summary</h2>
            <pre id="summary-content">{JSON.stringify(answers, null, 2)}</pre>
            <button onClick={handleCopyToClipboard}>{copiedToClipboard ? "Copied" : "Copy to Clipboard"}</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
