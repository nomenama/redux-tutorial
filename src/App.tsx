import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function App() {
    return (
        <div className="App">
            <Header/>
            <h1>Redux & Redux Saga Tutorial</h1>
            <Counter/>
            <Posts/>
        </div>
    );
}

export default App;
