import React, {Component, useState} from "react";
import '../styles/App.css';
import Flames from "./Flames";

const App = () => {
  const [answer, setAnswer] = useState("");
  return (
    <div id="main">
           {/* Do not remove the main div */}
      <Flames  setAnswer = {setAnswer}/>
      <h3 data-testid="answer">{answer}</h3>
    </div>
  )
}

export default App
