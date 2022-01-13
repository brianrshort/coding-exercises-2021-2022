import { animals } from './animals';
import React  from "react";
import ReactDOM from "react-dom";

const title = "",

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;

let arr = [];

for(animal in animals) {
  let img = <img key={animal} className="animal" alt={animal} src={animal.image} aria-label={animal} role="button" onClick={displayFacts}/>;
  arr.push(img);
}

function displayFacts(e) {
  const animal = e.target.alt;
  const animalObj = animals[animal];
  let index = Math.floor(Math.rand() * animalObj.facts.length);
  let fact = animalObj.facts[index];
  document.getElementById("fact").innerHtml = <span>{fact}</span>;
}

const animalFacts = (
  <div>
  <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
  {background}
  <div className="animals">{arr}</div>
  <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));