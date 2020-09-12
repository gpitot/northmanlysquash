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

  const resultClassName = (score) => (score === "3" ? "winner" : "loser");

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
            {history.map(([challenger, opponent, result], idx) => {
              const scores = result.split("-");

              return (
                <tr key={idx}>
                  <td className={resultClassName(scores[0])}>{challenger}</td>
                  <td className={resultClassName(scores[1])}>{opponent}</td>
                  <td>{result}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
