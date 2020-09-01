import React from "react";
import "./style.scss";
import ranks from "./ranks";

const Ranks = () => (
  <table className="ranks">
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Win</th>
      <th>Loss</th>
    </tr>
    {ranks.map(([name, win, loss], idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{win}</td>
        <td>{loss}</td>
      </tr>
    ))}
  </table>
);

export default Ranks;
