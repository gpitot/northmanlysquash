import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Rules = () => (
  <>
    <div className="rules ">
      <div className="box">
        <h1>Rules of ladder league</h1>
        <ul>
          <li>You can challenge a player up to 5 ranks above you.</li>

          <li>
            If you beat a higher ranked player you take the rank above them.
            Everyone below that position will shift down one spot.
          </li>

          <li>
            If you are an unranked player you can challenge anyone on the
            ladder. If you win you take their position, if you lose you go to
            the bottom of the ladder.
          </li>

          <li>
            You cannot reject a challenge unless you have a good reason, or have
            played that player within the last fortnight.
          </li>

          <li>
            If you cannot make a challenge match you must notify us at the first
            opportunity, failure to show up is a forfeit.{" "}
          </li>

          <li>Matches are best of 5, first to 15. </li>
          <li>
            Matches can count for SportyHQ points if both players agree prior to
            match.{" "}
          </li>
        </ul>
      </div>

      <Link className="box red" to="/">
        <h1>Challenge a player</h1>
      </Link>
    </div>
  </>
);

export default Rules;
