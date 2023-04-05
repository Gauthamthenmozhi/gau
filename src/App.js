import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes path="/"Component={Home}/>
    </div>
    <h2>NetFlix Clone</h2>
    </BrowserRouter>
  );
}

export default App;
