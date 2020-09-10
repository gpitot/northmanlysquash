import React, { useEffect, useState } from "react";
import "./style.scss";
import fakeRanks from "./ranks";

const Ranks = () => {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/.netlify/functions/ranks")
      .then((res) => res.json())
      .then((data) => {
        setRanks(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayedRanks = loading ? fakeRanks : ranks;

  return (
    <div className="ranks-outer">
      <table className="ranks">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Points</th>
            <th>Win</th>
            <th>Loss</th>
          </tr>
        </thead>
        <tbody className={loading && "loading"}>
          {displayedRanks.map(([name, points, win, loss], idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>{points}</td>
              <td>{win}</td>
              <td>{loss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranks;
