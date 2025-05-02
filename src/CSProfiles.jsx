import adaLovelace from './assets/adalovelace.png'
import jonhall from './assets/jonhall.png'
import alanturing from './assets/alanturing.png'
import './App.css'
import React from "react";

// To use a fragment we'll 2 arrays
const Profiles = [
    {img: adaLovelace, blurb: "First Programmer", name: "Ada", sizechange: "normal", votes: 0},
    {img: jonhall, blurb: "Chair of Linux Board", name: "Jon", sizechange: "img-large", votes: 0},
    {img: alanturing, blurb: "Father of Modern Computing", name: "Alan", sizechange: "img-small", votes: 0},
]

function Profile({ item }) {
    // We need to setup a function to add votes but useState is easier
    // This will setup an individual vote for each person

    const [vote, setVote] = React.useState(0);

    function handleVoteChange() {
        Profiles[item].votes = vote+1;
        setVote(vote+1);
        console.log("Vote changed: " + Profiles[item].name + " to " + Profiles[item].votes);
    }
    // We don't need if when we can just set the value so remove the if/else if/else
    // We can also just Vote for a person so add the vote & state call (add 1 to vote)
    return (
        <div className="card">
            <img src={Profiles[item].img} alt="test" className={Profiles[item].sizechange} />
            <p>{Profiles[item].blurb}</p>

            <button onClick={handleVoteChange} type="button">
                Vote for {Profiles[item].name}. Current vote of {vote}.
            </button>


        </div>
    )
}

export default function AllItems() {
    let listOfPeople = [];

    for (let i = 0; i < Profiles.length; i++) {
        listOfPeople.push(
            <Profile item={i} />
        );
    }
    return listOfPeople;

    //return ([Array(Profiles.length)].map((_, i) => <Profile item={i} />));
}
