import { QuestionType } from "../types";

const typeAnnotationQuestions: QuestionType[] = [
  {
    id: "0d580c51-0ea7-445c-8074-929d2662c8f8",
    question: "In TypeScript, which syntax correctly declares a variable with type annotation?",
    options: [
      "let age: number = 25;",
      "let age = number(25);",
      "let age = 25 as number;",
      "let number age = 25;",
    ],
    answerType: "multiple",
  },
  {
    id: "dfbb3658-2ec7-4394-ab81-a89b5e343b33",
    question: "What is the primary purpose of type annotations in TypeScript?",
    options: [
      "Improving runtime performance",
      "Providing compile-time type checking",
      "Automatically initializing variables",
      "Enhancing JavaScript syntax",
    ],
    answerType: "multiple",
  },
  {
    id: "7a437f8d-a3ed-4b8d-a1b3-b953134f2de5",
    question: "Which statement about type annotations in TypeScript is false?",
    options: [
      "They are required for all variable declarations",
      "They enable static type checking",
      "They are removed during the TypeScript compilation process",
      "They can define the type of variables, function parameters, and return types",
    ],
    answerType: "multiple",
  },
];

const interfaceQuestions: QuestionType[] = [
  {
    id: "71382e9f-2b5d-469b-8d75-7bddd5a06311",
    question: "Which definition accurately describes an interface in TypeScript?",
    options: [
      "A method to interact with databases",
      "A template for classes to implement specific properties and methods",
      "A built-in data type for managing arrays",
      "A tool for optimizing TypeScript code performance",
    ],
    answerType: "multiple",
  },
  {
    id: "6b887f4c-7f10-4b94-8558-73e386680d61",
    question: "Which of the following statements about TypeScript interfaces is true?",
    options: [
      "Interfaces can include both implementation and declaration of methods",
      "Interfaces in TypeScript can be instantiated like classes",
      "Interfaces are used to define the shape of an object",
      "Interfaces are converted into JavaScript objects after compilation",
    ],
    answerType: "multiple",
  },
  {
    id: "ee2ccfcf-a1b8-48e1-be55-c8bbd92e77db",
    question: "How are interfaces used in TypeScript?",
    options: [
      "To specify the data types of class properties",
      "As a blueprint to create new objects",
      "To provide a contract for classes and objects to follow",
      "For runtime type checking of objects",
    ],
    answerType: "multiple",
  },
];

const classesQuestions: QuestionType[] = [
  {
    id: "7e816a3a-ee18-4272-aa29-6426c1a6e479",
    question: "Which statement is true regarding classes in TypeScript?",
    options: [
      "TypeScript classes are purely conceptual and do not exist in the compiled JavaScript",
      "TypeScript classes can only inherit from one base class",
      "TypeScript classes do not support method overloading",
      "Private class members in TypeScript are also private in the compiled JavaScript",
    ],
    answerType: "multiple",
  },
  {
    id: "4d4570f0-fd56-4df9-81ad-1fb370eb8608",
    question: "In TypeScript, how do you correctly declare a class with a constructor?",
    options: [
      "class Person { constructor(name: string) { this.name = name; } }",
      "class Person { Person(name: string) { this.name = name; } }",
      "class Person { new(name: string) { this.name = name; } }",
      "class Person { Person { constructor(name: string) } }",
    ],
    answerType: "multiple",
  },
  {
    id: "7f96f3b2-c578-445c-abda-f4b12628a0a2",
    question: "What is the purpose of the 'extends' keyword in TypeScript classes?",
    options: [
      "To add new methods to an existing class",
      "To create a new instance of a class",
      "To inherit properties and methods from another class",
      "To declare that a class implements an interface",
    ],
    answerType: "multiple",
  },
];

const enumsQuestions: QuestionType[] = [
  {
    id: "e777f1b5-86cb-4d7e-b49f-53d0bd834c9c",
    question: "What is an Enum in TypeScript?",
    options: [
      "A special type that defines a group of constants",
      "A method for iterating over arrays",
      "A tool for error handling",
      "An interface for user-defined data types",
    ],
    answerType: "multiple",
  },
  {
    id: "bec604a9-e486-4d76-8264-f65000891dd0",
    question: "How does an Enum behave in the compiled JavaScript code?",
    options: [
      "It disappears and is not included in the JavaScript code",
      "It is converted into a series of nested objects",
      "It becomes a set of named constants with assigned values",
      "It transforms into a class with static properties",
    ],
    answerType: "multiple",
  },
  {
    id: "15ad97ec-3619-42a1-a7e9-1c56f52712a2",
    question: "In TypeScript, which is a valid way to declare an Enum?",
    options: [
      "enum Color { Red, Green, Blue }",
      "enum Color = { Red, Green, Blue }",
      "enum Color { Red = 1, Green, Blue }",
      "class Color { static Red; static Green; static Blue; }",
    ],
    answerType: "multiple",
  },
];

const genericsQuestions: QuestionType[] = [
  {
    id: "a56b4a76-54e2-46d4-af33-fc9f16e0db0e",
    question: "What are Generics used for in TypeScript?",
    options: [
      "To create components that can work with any data type",
      "To generate automatic documentation",
      "For optimizing runtime performance",
      "To define enum types",
    ],
    answerType: "multiple",
  },
  {
    id: "838e3c43-8fb5-4c06-bf24-8e25af8d6143",
    question: "How do you correctly define a generic function in TypeScript?",
    options: [
      "function identity<T>(arg: T): T { return arg; }",
      "function identity<T>(arg) { return arg; }",
      "function <T>identity(arg: T): T { return arg; }",
      "generic function identity<T>(arg: T): T { return arg; }",
    ],
    answerType: "multiple",
  },
  {
    id: "a912c1c4-8096-457d-b87f-2171b664886a",
    question: "Which statement is true about Generics in TypeScript?",
    options: [
      "Generics provide a way to make components less reusable",
      "Generics are only useful for working with arrays",
      "Generics allow you to create classes, functions, and interfaces that work with any type",
      "Generics increase the runtime overhead of code",
    ],
    answerType: "multiple",
  },
];

const typeGuardsQuestions: QuestionType[] = [
  {
    id: "dbb57894-25eb-46a6-b388-c2186b06c38c",
    question: "What is the purpose of Type Guards in TypeScript?",
    options: [
      "To ensure that variables are of a specific type at runtime",
      "To protect private class members",
      "To encrypt sensitive data types",
      "To guard against runtime exceptions",
    ],
    answerType: "multiple",
  },
  {
    id: "9153959c-3c81-4036-aa99-530764174ee8",
    question: "Which is an example of a Type Guard in TypeScript?",
    options: [
      "if (typeof variable === 'string') { /* ... */ }",
      "if (variable.instanceOf(String)) { /* ... */ }",
      "if (variable.stringCheck()) { /* ... */ }",
      "if (variable === 'string') { /* ... */ }",
    ],
    answerType: "multiple",
  },
  {
    id: "6d31e0ce-c6cc-4391-bb85-f2350d4cdfae",
    question: "Type Guards in TypeScript are used for:",
    options: [
      "Memory management",
      "Conditional rendering in UI frameworks",
      "Ensuring that a variable is of a certain type before performing an operation",
      "Handling HTTP requests",
    ],
    answerType: "multiple",
  },
];

const tuplesQuestions: QuestionType[] = [
  {
    id: "2fa1d048-353f-4f6a-acf4-b54340f6a532",
    question: "What is a Tuple in TypeScript?",
    options: [
      "A type of function",
      "An array with elements of different types",
      "A method for handling exceptions",
      "A feature for asynchronous programming",
    ],
    answerType: "multiple",
  },
  {
    id: "6ceaa4e5-b8c0-4b2b-aabc-a963c26e688d",
    question: "How do you correctly type a tuple in TypeScript?",
    options: [
      "let x: [string, number] = ['hello', 10];",
      "let x: array[string, number] = ['hello', 10];",
      "let x: tuple[string, number] = ['hello', 10];",
      "let x: (string, number) = ['hello', 10];",
    ],
    answerType: "multiple",
  },
  {
    id: "b4a0fbc8-0a39-4e7f-8c1f-7f8f7a1e4b5c",
    question:
      "What happens when you access an element outside the known indices of a tuple in TypeScript?",
    codeSnippet: "let tuple: [string, number] = ['hello', 10];\nlet x = tuple[2];",
    options: [
      "TypeScript will throw a compile-time error",
      "The element will be 'undefined'",
      "TypeScript will automatically extend the tuple",
      "It results in a runtime error",
    ],
    answerType: "multiple",
  },
];

const unionTypesQuestions: QuestionType[] = [
  {
    id: "9078cf2e-5e8b-4c77-8fb3-6a3abfd2428c",
    question: "What are Union Types used for in TypeScript?",
    options: [
      "Combining multiple classes into one",
      "Declaring variables that can be one of several types",
      "Merging two arrays into one",
      "Creating interfaces with optional properties",
    ],
    answerType: "multiple",
  },
  {
    id: "9ad7d6b5-7bdf-4ae2-b8c0-6b0c59f8c791",
    question: "Which of the following is a correct example of a Union Type in TypeScript?",
    options: [
      "let value: string | number = 'Hello';",
      "let value: string && number = 42;",
      "let value: [string | number] = 'Hello';",
      "let value: string || number = 42;",
    ],
    answerType: "multiple",
  },
  {
    id: "acefb001-9f60-4d49-9a6f-5a3f6b65478e",
    question: "In TypeScript, when using Union Types, how can you ensure type safety?",
    options: [
      "By using type guards",
      "Through explicit type casting",
      "By declaring all possible types at the beginning of your script",
      "Union Types in TypeScript do not support type safety",
    ],
    answerType: "multiple",
  },
];

const intersectionTypesQuestions: QuestionType[] = [
  {
    id: "e8c5a8c3-6b25-4e15-9b0c-3f6b7e6f3f6a",
    question: "What is an Intersection Type in TypeScript?",
    options: [
      "A type that can only be used in mathematical calculations",
      "A combination of multiple types into one",
      "A type used exclusively for user interface components",
      "A type that divides an array into two halves",
    ],
    answerType: "multiple",
  },
  {
    id: "f87c2f0d-2f62-4c00-ba4a-9c2f3b841ef6",
    question: "Which is a correct example of an Intersection Type in TypeScript?",
    options: [
      "type Employee = Person & Job;",
      "type Employee = Person + Job;",
      "type Employee = Person || Job;",
      "type Employee = Person - Job;",
    ],
    answerType: "multiple",
  },
  {
    id: "ffdb5756-7f76-4c63-9a2f-a4d69e875c32",
    question: "How are Intersection Types useful in TypeScript?",
    options: [
      "For declaring variables that will change types over time",
      "To combine multiple types to create a new type with all their properties",
      "For creating exclusive type choices in function parameters",
      "To intersect and remove common properties from types",
    ],
    answerType: "multiple",
  },
];

const literalTypesQuestions: QuestionType[] = [
  {
    id: "a54c8def-8f18-4d1e-9f47-5de9a8460f33",
    question: "What are Literal Types in TypeScript?",
    options: [
      "Types that are explicitly defined and cannot change",
      "Types that are derived from literal values in the code",
      "A method to write more literal and understandable code",
      "Types used for storing text data",
    ],
    answerType: "multiple",
  },
  {
    id: "ccdb6b94-ff0b-44ea-9a59-89bba4b1da77",
    question: "Which of the following is a correct example of a Literal Type in TypeScript?",
    options: [
      "let direction: 'north' | 'south' | 'east' | 'west';",
      "let direction: string = 'north' | 'south' | 'east' | 'west';",
      "let direction: ['north', 'south', 'east', 'west'];",
      "let direction: any = 'north' | 'south' | 'east' | 'west';",
    ],
    answerType: "multiple",
  },
  {
    id: "bb2c8b45-6f8e-4d3b-9a23-3cfbb6b6f3b7",
    question: "How are Literal Types best used in TypeScript?",
    options: [
      "For creating complex data structures",
      "To restrict a variable to a specific set of values",
      "As a replacement for enums",
      "For dynamic type assignments",
    ],
    answerType: "multiple",
  },
];

const nullableTypesQuestions: QuestionType[] = [
  {
    id: "d1db1e5c-6b33-41b4-9b92-26b09eb1f2f3",
    question: "What are Nullable Types in TypeScript?",
    options: [
      "Types that cannot be null or undefined",
      "Types that can only be null",
      "Types that can be either a specific type or null/undefined",
      "Types that are automatically initialized to null",
    ],
    answerType: "multiple",
  },
  {
    id: "e7d4d22e-77c2-4b82-95d1-23a3e1bf9b2d",
    question: "How do you correctly define a variable that can be nullable in TypeScript?",
    options: [
      "let variable: number | null = null;",
      "let variable: nullable<number> = null;",
      "let variable: number = null;",
      "let variable: null<number> = null;",
    ],
    answerType: "multiple",
  },
  {
    id: "f2b3f08d-28f6-4f1c-9e5f-32f5b7b1e5c9",
    question: "In TypeScript, strict null checking:",
    options: [
      "Allows variables to be null without any explicit type declaration",
      "Forces all variables to be non-nullable",
      "Ensures that all variables are checked for null or undefined values",
      "Prevents any use of null or undefined in the code",
    ],
    answerType: "multiple",
  },
];

const typeAliasesQuestions: QuestionType[] = [
  {
    id: "3e0cf8ac-0a2f-40f5-9438-5f6b7e5dfcde",
    question: "What is a Type Alias in TypeScript?",
    options: [
      "A shortcut for a longer type",
      "A way to rename primitive types",
      "A TypeScript feature for aliasing functions",
      "A method to import types from other modules",
    ],
    answerType: "multiple",
  },
  {
    id: "a7d6e8f4-37eb-476b-8c24-5e07b41e9e2f",
    question: "How do you correctly define a Type Alias in TypeScript?",
    options: [
      "type Point = { x: number, y: number };",
      "alias Point = { x: number, y: number };",
      "define type Point = { x: number, y: number };",
      "Point := { x: number, y: number };",
    ],
    answerType: "multiple",
  },
  {
    id: "f2c1b4a2-bd7e-41be-9d07-5c6bd3f8a021",
    question: "What is the main use of Type Aliases?",
    options: [
      "To simplify complex type definitions for easier readability",
      "To create new types from scratch",
      "To enhance the performance of TypeScript applications",
      "For creating exclusive types that cannot be extended",
    ],
    answerType: "multiple",
  },
];

const mappedTypesQuestions: QuestionType[] = [
  {
    id: "e1ef7b4d-c3d2-4c4a-bb7c-7c8a8d1f3b1e",
    question: "What are Mapped Types in TypeScript?",
    options: [
      "Types that are automatically mapped to JavaScript types",
      "Types that are used for data mapping in databases",
      "A technique to create new types by transforming existing ones",
      "Types that map directly to JSON objects",
    ],
    answerType: "multiple",
  },
  {
    id: "e3b5d85b-f6a3-41e5-9f67-2e23c8f3f0d1",
    question: "Which is a correct example of a Mapped Type in TypeScript?",
    codeSnippet: "type Readonly<T> = { readonly [P in keyof T]: T[P]; };",
    options: [
      "type Readonly<T> = { readonly [P in keyof T]: T[P]; };",
      "type Mapped<T> = [P in keyof T];",
      "mapped type<T> = { [P in T]: P };",
      "type Transform<T> = { transform [P in keyof T] };",
    ],
    answerType: "multiple",
  },
  {
    id: "5c3b5d2c-6c4e-4f09-80a9-9dbf0f5d85e9",
    question: "What is the primary purpose of using Mapped Types?",
    options: [
      "To dynamically transform the properties of a type into a new shape",
      "To map TypeScript types to database schemas",
      "For creating constants that can be used in multiple places",
      "To automatically generate types based on user input",
    ],
    answerType: "multiple",
  },
];

const conditionalTypesQuestions: QuestionType[] = [
  {
    id: "3c0263d3-5d68-4b79-b8f6-1f6b9e5823c1",
    question: "What are Conditional Types in TypeScript?",
    options: [
      "Types that depend on specific conditions to be true",
      "A set of types that are used in if-else statements",
      "Types that change according to the environment",
      "Predefined types that are available in TypeScript",
    ],
    answerType: "multiple",
  },
  {
    id: "d7b8cfea-2d57-4a25-9d55-5f73e5f8f0e8",
    question: "Which is a correct example of a Conditional Type in TypeScript?",
    options: [
      "type Check<T> = T extends string ? 'Yes' : 'No';",
      "type Conditional<T> = if T extends string then 'String' else 'Not String';",
      "conditional type<T> = T is string ? 'String' : 'Non-String';",
      "type IfString<T> = T = string ? 'String' : 'Other';",
    ],
    answerType: "multiple",
  },
  {
    id: "1f0a67d8-38c3-4e8b-80d9-3e16b4a3a4c5",
    question: "How are Conditional Types used in TypeScript?",
    options: [
      "For defining variables that can change types based on conditions",
      "To check conditions at runtime and change types accordingly",
      "To provide a way to pick types based on generic type parameters",
      "For creating switch-case statements in type definitions",
    ],
    answerType: "multiple",
  },
];

const decoratorsQuestions: QuestionType[] = [
  {
    id: "bfcf6477-17f2-4bcb-8edc-0d47d5b2d8c5",
    question: "What is a Decorator in TypeScript?",
    options: [
      "A syntax for creating new HTML elements",
      "A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter",
      "A function used for styling components",
      "A tool for debugging TypeScript code",
    ],
    answerType: "multiple",
  },
  {
    id: "4b79f1be-60b1-4a5a-9b30-5b1b2f4cda98",
    question: "Which is a correct example of a Class Decorator in TypeScript?",
    codeSnippet:
      "function sealed(constructor: Function) { /* ... */ }\n@sealed\nclass Greeter { /* ... */ }",
    options: [
      "@sealed class Greeter { /* ... */ }",
      "class @sealed Greeter { /* ... */ }",
      "sealed class Greeter { /* ... */ }",
      "@Decorator class Greeter { /* ... */ }",
    ],
    answerType: "multiple",
  },
  {
    id: "9f9268fa-4149-4ee0-8c37-c3f5c67a4b0b",
    question: "What is the main use of Decorators in TypeScript?",
    options: [
      "To change the behavior of functions at runtime",
      "For adding metadata to classes and members",
      "As a replacement for classes in TypeScript",
      "For enhancing the performance of class methods",
    ],
    answerType: "multiple",
  },
];

const utilityTypesQuestions: QuestionType[] = [
  {
    id: "08b9e1d2-5f62-4aaf-b39e-1c8e75a4ec6e",
    question: "What are Utility Types in TypeScript?",
    options: [
      "Built-in types that provide common type transformations",
      "Types used for utility functions like logging and debugging",
      "A set of tools for managing TypeScript configurations",
      "Types that automatically adjust based on the user's utility preferences",
    ],
    answerType: "multiple",
  },
  {
    id: "e98c8a7b-c8d5-4b93-9a11-2b7d0175a49f",
    question: "Which is a correct example of using a Utility Type in TypeScript?",
    codeSnippet:
      "interface Todo { title: string; completed: boolean; }\ntype TodoPreview = Pick<Todo, 'title'>;",
    options: [
      "type TodoPreview = Pick<Todo, 'title'>;",
      "utility type TodoPreview = Extract<Todo, 'title'>;",
      "type TodoPreview = Utility<Todo, 'title'>;",
      "type TodoPreview = Todo['title'];",
    ],
    answerType: "multiple",
  },
  {
    id: "e6d4f65c-1a6b-45e4-8b3f-4b3e7e6f7c99",
    question: "What is the primary purpose of Utility Types in TypeScript?",
    options: [
      "To enhance the performance of TypeScript applications",
      "To provide ready-to-use type transformations for common tasks",
      "For creating user-defined type transformations",
      "To assist in migrating JavaScript code to TypeScript",
    ],
    answerType: "multiple",
  },
];

const moduleAugmentationQuestions: QuestionType[] = [
  {
    id: "f7cc3251-26c4-4bcb-bb48-4a5b6c9b3bce",
    question: "What is Module Augmentation in TypeScript?",
    options: [
      "A process for upgrading TypeScript modules",
      "A technique to add new capabilities to existing modules",
      "A method for bundling multiple modules into one",
      "A tool for automatic module generation",
    ],
    answerType: "multiple",
  },
  {
    id: "8f58c16d-1a1e-4db9-8e6f-fb271b3dbb6e",
    question: "How do you correctly perform Module Augmentation in TypeScript?",
    codeSnippet:
      "import { SomeModule } from 'some-module';\ndeclare module 'some-module' { export interface NewInterface { /* ... */ } }",
    options: [
      "declare module 'some-module' { export interface NewInterface { /* ... */ } }",
      "augment module 'some-module' { export interface NewInterface { /* ... */ } }",
      "module 'some-module' { export interface NewInterface { /* ... */ } }",
      "extend module 'some-module' { export interface NewInterface { /* ... */ } }",
    ],
    answerType: "multiple",
  },
  {
    id: "9c6f8ba9-7f24-4c0d-bd1f-dc79a6c54c0d",
    question: "What is the main use of Module Augmentation in TypeScript?",
    options: [
      "To replace the contents of a module",
      "For adding new functionalities or types to existing modules without modifying the original source",
      "To merge two different modules into one",
      "For creating a backup of a module",
    ],
    answerType: "multiple",
  },
];

const namespacesQuestions: QuestionType[] = [
  {
    id: "9d12ec4b-7bae-4741-8b7f-031b9f8c1a5e",
    question: "What is a Namespace in TypeScript?",
    options: [
      "A feature for automatically organizing code into various sections",
      "A way to group related code under a single name",
      "A tool for connecting TypeScript files to external APIs",
      "An alias for TypeScript modules",
    ],
    answerType: "multiple",
  },
  {
    id: "2b3f7b1e-5d17-4b8e-8f23-2e2e84b5b2f6",
    question: "How do you correctly declare a Namespace in TypeScript?",
    options: [
      "namespace MyNamespace { /* ... */ }",
      "module MyNamespace { /* ... */ }",
      "MyNamespace { /* ... */ }",
      "declare namespace MyNamespace { /* ... */ }",
    ],
    answerType: "multiple",
  },
  {
    id: "a1ecf4d6-06d8-4e3d-b7c7-0df3e4b4e3f1",
    question: "What is the main purpose of Namespaces in TypeScript?",
    options: [
      "For importing external modules",
      "To encapsulate and organize code and prevent name collisions",
      "To export all types and interfaces by default",
      "To provide a naming convention for TypeScript projects",
    ],
    answerType: "multiple",
  },
];

const advancedGenericsQuestions: QuestionType[] = [
  {
    id: "c7c8b8e1-1b9e-4c9c-8a5b-2b6f88a3aef9",
    question: "What are Advanced Generics in TypeScript?",
    options: [
      "A set of predefined generic types for advanced operations",
      "Generics that use complex type operations and constraints",
      "A new feature in TypeScript for handling arrays and objects",
      "Generics that are automatically inferred by the TypeScript compiler",
    ],
    answerType: "multiple",
  },
  {
    id: "d2f0d0e2-6c12-4b38-9c70-6b5c8d8ac8f7",
    question: "Which is an example of Advanced Generics in TypeScript?",
    codeSnippet: "function merge<T, U>(obj1: T, obj2: U): T & U { /* ... */ }",
    options: [
      "function merge<T, U>(obj1: T, obj2: U): T & U { /* ... */ }",
      "function advanced<T>(arg: T): T { /* ... */ }",
      "type Advanced<T> = T extends Function ? T : never;",
      "interface AdvancedGeneric<T> { data: T; }",
    ],
    answerType: "multiple",
  },
  {
    id: "f5e5b8ff-a8ce-4b1e-b1b6-3d5e0a7a4e5e",
    question: "What is the primary benefit of using Advanced Generics in TypeScript?",
    options: [
      "To simplify complex type definitions",
      "For enhanced performance in high-complexity applications",
      "To create highly reusable and type-safe code components",
      "For automating type checking in all parts of a TypeScript application",
    ],
    answerType: "multiple",
  },
];

const mixinsQuestions: QuestionType[] = [
  {
    id: "2e9b3f63-5b5f-4c9a-8c1c-d4f6cdd4c1e9",
    question: "What are Mixins in TypeScript?",
    options: [
      "A special syntax for combining interfaces",
      "Functions that add new functionality to existing classes",
      "A tool for merging multiple classes into one",
      "Pre-built functions provided by TypeScript for array manipulation",
    ],
    answerType: "multiple",
  },
  {
    id: "4c84fba5-5c77-4fbb-9d47-5b3f7ef9cfc0",
    question: "Which is a correct example of a Mixin in TypeScript?",
    codeSnippet:
      "function applyMixin(BaseClass: any, Mixin: any) { /* ... */ }\napplyMixin(SomeClass, Mixin);",
    options: [
      "applyMixin(SomeClass, Mixin);",
      "class Mixed extends Mixin(SomeClass) { /* ... */ }",
      "mixin class SomeClass { /* ... */ }",
      "class SomeClass with Mixin { /* ... */ }",
    ],
    answerType: "multiple",
  },
  {
    id: "5d1d6c4e-ee2d-4fcd-83a2-34d2b2c8f3b2",
    question: "What is the main purpose of Mixins in TypeScript?",
    options: [
      "To override methods in existing classes",
      "To combine several classes into a single class",
      "For adding new properties to an interface",
      "To provide a way of multiple inheritance",
    ],
    answerType: "multiple",
  },
];

const advancedTypesQuestions: QuestionType[] = [
  {
    id: "7d0a6f8a-e9cf-48f5-90b4-1c6f3c1e8a13",
    question: "What are Advanced Types in TypeScript?",
    options: [
      "Types that can only be used in complex applications",
      "A set of types for advanced mathematical computations",
      "Complex type patterns and techniques used for more sophisticated type systems",
      "Predefined types that are only available in the latest version of TypeScript",
    ],
    answerType: "multiple",
  },
  {
    id: "a55b8a7e-0c5e-4d5a-a2b2-cb1f80a26f97",
    question: "Which of the following is an example of using Advanced Types in TypeScript?",
    options: [
      "type ComplexType = { [key: string]: any; };",
      "type Advanced = keyof any;",
      "type Chainable<T> = { option<K extends string>(key: K, value: any): Chainable<T & { [P in K]: any }>; };",
      "type Conditional<T> = T extends Function ? FunctionType : NonFunctionType;",
    ],
    answerType: "multiple",
  },
  {
    id: "e0a4b6a1-e6ab-4f7a-aae5-16f4c3a1b545",
    question: "How do Advanced Types enhance TypeScript development?",
    options: [
      "By simplifying the codebase and reducing the need for type definitions",
      "Through enabling more complex and flexible type manipulation",
      "By automatically determining types without developer input",
      "They are mainly used for aesthetic purposes and do not enhance development",
    ],
    answerType: "multiple",
  },
];

export const questions: QuestionType[] = [
  ...typeAnnotationQuestions,
  ...interfaceQuestions,
  ...classesQuestions,
  ...enumsQuestions,
  ...genericsQuestions,
  ...typeGuardsQuestions,
  ...tuplesQuestions,
  ...unionTypesQuestions,
  ...intersectionTypesQuestions,
  ...literalTypesQuestions,
  ...nullableTypesQuestions,
  ...typeAliasesQuestions,
  ...mappedTypesQuestions,
  ...conditionalTypesQuestions,
  ...decoratorsQuestions,
  ...utilityTypesQuestions,
  ...moduleAugmentationQuestions,
  ...namespacesQuestions,
  ...advancedGenericsQuestions,
  ...mixinsQuestions,
  ...advancedTypesQuestions,
];
