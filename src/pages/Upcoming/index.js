import React, { useEffect, useState } from "react";
import "../Ranks/style.scss";
const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch("/.netlify/functions/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Upcoming ladder league matches</h1>
      <div className="ranks-outer">
        <table className="ranks">
          <thead>
            <tr>
              <th>Challenger</th>
              <th>Opponent</th>
              <th>Status</th>
              <th>Date</th>
              <th>Court</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map(
              ([Challenger, Opponent, Status, Date, Court], idx) => (
                <tr key={idx}>
                  <td>{Challenger}</td>
                  <td>{Opponent}</td>
                  <td className={Status}>{Status.toUpperCase()}</td>
                  <td>{Date}</td>
                  <td>{Court}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Upcoming;
