import React from "react";
import "./App.css";
import Quiz from "./Quiz";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz />
      </header>
    </div>
  );
};

export default App;
