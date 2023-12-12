export type AnswerValue = string | string[];

export interface AnswerType {
  [key: string | number]: AnswerValue;
}

export interface QuestionType {
  id: string | number; // TODO: remove number type
  question: string;
  options: string[];
  answerType: "multiple" | "text" | "true-false";
  codeSnippet?: string;
}
