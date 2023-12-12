import { QuestionType } from "../types";

const typeAnnotationQuestions: QuestionType[] = [
  {
    id: "3cd1458e-372b-45b3-846b-16c2aeb1c3a5",
    question: "Which type annotation is incorrect for the function parameter in TypeScript?",
    options: ["function greet(name: string) { /* ... */ }", "function greet(name) { /* ... */ }", "function greet(name: any) { /* ... */ }", "function greet(name: 'Alice' | 'Bob') { /* ... */ }"],
    answerType: "multiple",
  },
  {
    id: "18d958a7-eccd-4b63-8458-94becc07610b",
    question: "Given the following code, what is the type of 'pet'?",
    options: ["smallPet", "unknown", "any", "The type cannot be determined from the information provided."],
    answerType: "multiple",
    codeSnippet: "let pet = getSmallPet();",
  },
  {
    id: "62e6f798-d458-4aec-a1dd-a1d93a2f1837",
    question: "Type annotations in TypeScript are optional because TypeScript has type inference.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  {
    id: "62aff746-b279-4e35-a803-211037340791",
    question: "Which TypeScript snippet correctly adds type annotations to the variable 'amount' and function 'calculateTotal'?",
    options: [
      "var amount; function calculateTotal(price, tax) { /* ... */ }",
      "var amount: number; function calculateTotal(price: number, tax: number): number { /* ... */ }",
      "var amount = 0; function calculateTotal(price: number, tax: number) { /* ... */ }",
      "let amount: any; function calculateTotal(price: any, tax: any): any { /* ... */ }",
    ],
    answerType: "multiple",
  },
];

const interfaceQuestions: QuestionType[] = [
  {
    id: "beb1bce2-94ee-41a8-a9e2-9d8d60e0c0ca",
    question: "What is an Interface in TypeScript?",
    options: [
      "A TypeScript feature for jQuery interface animations",
      "A way to define contracts within your code as well as contracts with code outside of your project",
      "A method of connecting to databases",
      "A tool for debugging TypeScript code",
    ],
    answerType: "multiple",
  },
  {
    id: "7b39d287-e216-4c6f-9531-94741d8dcf23",
    question: "Which statement is true about extending interfaces in TypeScript?",
    options: [
      "TypeScript interfaces can extend multiple interfaces",
      "An interface can only extend one other interface",
      "Interfaces cannot extend classes in TypeScript",
      "Extending an interface is forbidden in TypeScript",
    ],
    answerType: "multiple",
  },
  {
    id: "23940dd4-586f-4d41-a210-f985db54a9ea",
    question: "How do you correctly assign an interface to a class in TypeScript?",
    options: [
      "class Car implements VehicleInterface { /* ... */ }",
      "class Car extends VehicleInterface { /* ... */ }",
      "class Car uses VehicleInterface { /* ... */ }",
      "class Car has VehicleInterface { /* ... */ }",
    ],
    answerType: "multiple",
  },
  {
    id: "a0d250b2-f368-4327-9d4c-600e65540e35",
    question: "Which is a correct way to define a readonly property in an interface?",
    options: ["interface Person { readonly name: string; }", "interface Person { name: readonly string; }", "interface Person { const name: string; }", "interface Person { name: string readonly; }"],
    answerType: "multiple",
  },
];

export const questions: QuestionType[] = [
  ...typeAnnotationQuestions,
  ...interfaceQuestions,
  // Type Annotations
  {
    id: 1,
    question: "In TypeScript, type annotations are optional for variables when their types can be inferred.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Interfaces
  {
    id: 2,
    question: "Which of the following is a valid TypeScript interface?",
    options: [
      "interface Person { firstName: string; lastName: string; }",
      "class Person { firstName: string; lastName: string; }",
      "type Person = { firstName: string; lastName: string; }",
      "model Person { firstName: string; lastName: string; }",
    ],
    answerType: "multiple",
  },
  // Classes
  {
    id: 3,
    question: "Classes in TypeScript can implement interfaces.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Enums
  {
    id: 4,
    question: "What does an Enum represent in TypeScript?",
    options: ["A set of named constants", "A collection of related values", "An array of tuples", "A type of function"],
    answerType: "multiple",
  },
  // Generics
  {
    id: 5,
    question: "Generics in TypeScript are used for:",
    options: ["Creating components with dynamically defined types", "Generating automatic tests", "Defining enum values", "Specifying the length of an array"],
    answerType: "multiple",
  },
  // Type Guards
  {
    id: 6,
    question: "A type guard is a TypeScript feature that ensures a variable is of a certain type.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Tuples
  {
    id: 7,
    question: "What are tuples used for in TypeScript?",
    options: [
      "Defining arrays with fixed types and a variable number of elements",
      "Defining arrays with a fixed number of elements of fixed types",
      "Specifying a function that can return multiple types",
      "Specifying multiple types for a variable",
    ],
    answerType: "multiple",
  },
  // Union Types
  {
    id: 8,
    question: "Union types allow a variable to be one of multiple types.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Intersection Types
  {
    id: 9,
    question: "Intersection types in TypeScript:",
    options: ["Combine multiple types into one", "Create a union of two types", "Define an intersection operator for math calculations", "Specify the common fields between two types"],
    answerType: "multiple",
  },
  // Literal Types
  {
    id: 10,
    question: "Literal types allow you to restrict a variable to a single value.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Nullable Types
  {
    id: 11,
    question: "Which TypeScript type is not considered nullable?",
    options: ["string", "number", "null", "undefined"],
    answerType: "multiple",
  },
  // Type Aliases
  {
    id: 12,
    question: "Type aliases in TypeScript can be used to give a type a new name.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Mapped Types
  {
    id: 13,
    question: "Mapped types in TypeScript:",
    options: ["Allow you to iterate over keys of another type", "Map over values of an array", "Define a type that can be converted to another type using a map function", "None of the above"],
    answerType: "multiple",
  },
  // Conditional Types
  {
    id: 14,
    question: "Conditional types select one of two possible types based on a condition applied to types.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Decorators
  {
    id: 15,
    question: "Which of the following is a correct statement about decorators in TypeScript?",
    options: [
      "Decorators are functions that can be used to modify classes or properties at design time.",
      "Decorators are used to add new syntax to TypeScript.",
      "Decorators are a type of function declaration.",
      "Decorators are a way to handle errors in TypeScript.",
    ],
    answerType: "multiple",
  },
  // Module Augmentation
  {
    id: 16,
    question: "Module Augmentation is a way to add additional members to an existing module.",
    options: ["True", "False"],
    answerType: "true-false",
  },
  // Namespaces
  {
    id: 17,
    question: "In TypeScript, namespaces are used to:",
    options: ["Automatically include modules from the internet", "Organize code into logical groups", "Create a new file scope for variables", "None of the above"],
    answerType: "multiple",
  },
  // Add any additional questions for features as needed.
];
