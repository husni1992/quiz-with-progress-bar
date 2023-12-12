import React from "react";
import { QuestionType } from "./types";

interface QuestionProps {
  number: number;
  data: QuestionType;
  onChange: (id: string | number, answer: string | string[]) => void;
  selectedAnswers: string | string[];
}

const Question: React.FC<QuestionProps> = ({ number, data, onChange, selectedAnswers }) => {
  const handleChange = (answer: string) => {
    if (data.answerType === "multiple") {
      let newAnswers = Array.isArray(selectedAnswers) ? [...selectedAnswers] : [];
      if (newAnswers.includes(answer)) {
        newAnswers = newAnswers.filter((a) => a !== answer); // Uncheck
      } else {
        newAnswers.push(answer); // Check
      }
      onChange(data.id, newAnswers);
    } else {
      onChange(data.id, answer);
    }
  };

  return (
    <div className="question">
      <h3>
        {number}: {data.question}
      </h3>

      {data.codeSnippet && <pre id="code-snippet">{data.codeSnippet}</pre>}

      {data.options.map((option, index) => (
        <label key={index} className="option-label">
          {data.answerType === "multiple" ? (
            <input
              type="checkbox"
              name={`question-${data.id}`}
              className="option-input"
              value={option}
              checked={Array.isArray(selectedAnswers) && selectedAnswers.includes(option)}
              onChange={() => handleChange(option)}
            />
          ) : (
            <input type="radio" name={`question-${data.id}`} className="option-input" value={option} checked={selectedAnswers === option} onChange={() => handleChange(option)} />
          )}
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
