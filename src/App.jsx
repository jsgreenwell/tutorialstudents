import adaLovelace from './assets/adalovelace.png'
import jonhall from './assets/jonhall.png'
import alanturing from './assets/alanturing.png'
import './App.css'
import React, {Fragment} from "react";

// To use a fragment we'll 2 arrays
const Profiles = [
    {"img": adaLovelace, "blurb": "First Programmer", "id": 1, "sizechange": "normal"},
    {"img": jonhall, "blurb": "Chair of Linux Board", "id": 2, "sizechange": "img-large"},
    {"img": alanturing, "blurb": "Father of Modern Computing", "id": 3, "sizechange": "img-small"},
]

function Profile({ item }) {
    // Final version before we make this a lambda (and use map)
    // We don't need if when we can just set the value
    return (
        <div className="card">
            <img src={Profiles[item].img} alt="test" className={Profiles[item].sizechange} />
            <p>{Profiles[item].blurb}</p>
        </div>
    )
}

function AllItems() {
    let listOfPeople = [];

    for (let i = 0; i < Profiles.length; i++) {
        listOfPeople.push(
            <Profile item={i} />
        );
    }
    return listOfPeople;

    //return ([Array(Profiles.length)].map((_, i) => <Profile item={i} />));
}

export default function App() {
  const [mood, setMood] = React.useState("Meh");

  return (
    <>
      <h1>Profile</h1>
      <p> Mood is {mood} </p>
      <button onClick={() => setMood("Happy")}>
          I'm Happy!
      </button>
      <button onClick={() => setMood("Sad")}>
            Sssaaaddd
      </button>
        <button onClick={() => setMood("Excited")}>
            Excited
        </button>
        <AllItems />
    </>
  )
}
