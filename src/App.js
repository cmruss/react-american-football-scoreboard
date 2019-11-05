//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [homeShot, setHomeShot] = useState(0);

    const [awayScore, setAwayScore] = useState(0);
    const [awayShot, setAwayShot] = useState(0);

    const [periodValue, setPeriodValue] = useState(0);
    const [penaltyTime, setPenaltyTime] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Wings</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Vipers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow periodValue={periodValue} homeShot={homeShot} awayShot={awayShot} penaltyTime={penaltyTime}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=> setHomeScore(homeScore + 1)} className="homeButtons__touchdown">Home Goal</button>
          <button onClick={()=> setHomeShot(homeShot + 1)} className="homeButtons__fieldGoal">Home Shot On Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={()=> setAwayScore(awayScore + 1)}  className="awayButtons__touchdown">Away Goal</button>
          <button onClick={()=> setAwayShot(awayShot + 1)}  className="awayButtons__fieldGoal">Away Shot On Goal</button>
        </div>
        <div className="quarter__button"> 
          <button onClick={()=> setPeriodValue(periodValue + 1)}  className="awayButtons__fieldGoal">Period</button>
          <button onClick={()=> setPenaltyTime(penaltyTime + 2)}  className="awayButtons__fieldGoal">Penalty Time</button>
        </div>
      </section>
    </div>
  );
}

export default App;
