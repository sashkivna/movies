import * as React from 'react';
import './App.css';
import {HomeComponent} from "./modules/Home/home";
import {HeaderComponent} from "./modules/Header/header";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };

    const reset = () => {
        setCounter(0)
    }

    const createElementComponent = React.createElement(
        'div',
        {className: 'create-element'},
        'Austria'
    );

    const properties = {
        country: 'Ukraine',
        population: 4500000
    }

  return (
      <div>
          <div className="App">
              {createElementComponent}
          </div>

          <HomeComponent name={properties.country} count={properties.population}/>
          <HeaderComponent/>

          <div className="counter">
              <h1>React Counter</h1>
              <span className="counter-result">{counter}</span>
              <div className="container">
                  <button className="increase" onClick={increase}>+</button>
                  <button className="decrease" onClick={decrease}>-</button>
                  <button className="reset" onClick={reset}>Reset</button>
              </div>
          </div>
      </div>
  );
}

export default App;
