import React from "react";
import "./App.css";

const BottomRow = (props) => {
  const { periodValue, homeShot, awayShot, penaltyTime} = props;
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Period</h3>
        <div className="down__value">{periodValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title"> Shots  on</h3>
        <div className="toGo__value">{homeShot}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Goal</h3>
        <div className="ballOn__value">{awayShot}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Penalty</h3>
        <div className="quarter__value">{penaltyTime}</div>
      </div>
    </div>
  );
};

export default BottomRow;
