import "./App.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import GitButton from "./components/GitButton";
import Cards from "./components/Cards";
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div className="wrapper">
      <h1>Seach Emoji 🦄</h1>
      <p>A simple emoji search tool made with ReactJS</p>
      <input type="text" name="userInput" id="userInput" onChange={handleChange} />
      <div className="buttonGroup">
        <GitButton linkLeft="https://github.com/druckmax" linkRight="https://github.com/druckmax?tab=followers" symbol={faStar} text="Star" />
        <GitButton linkLeft="https://github.com/druckmax" linkRight="https://github.com/druckmax?tab=followers" symbol={faCodeFork} text="Fork" />
      </div>
      <Cards input={input}/>
    </div>
  );
}

export default App;
