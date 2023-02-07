import React from "react";
import logo from "./logo.svg";
import Card from "./Card/Card";
import Gentleman from "./data/gentleman.model";
import gentlemenArray from "./data/gentlemen.info";
import "./css/styles.css";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <ul>
        {gentlemenArray.map((gentleman) => (
          <Card gentleman={gentleman} />
        ))}
      </ul>
    </div>
  );
}

export default App;
