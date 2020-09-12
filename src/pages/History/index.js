import React, { useEffect, useState } from "react";
import "../Ranks/style.scss";
const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch("/.netlify/functions/history")
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Match history</h1>
      <div className="ranks-outer">
        <table className="ranks">
          <thead>
            <tr>
              <th>Challenger</th>
              <th>Opponent</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map(([Challenger, Opponent, Result], idx) => (
              <tr key={idx}>
                <td>{Challenger}</td>
                <td>{Opponent}</td>
                <td>{Result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
