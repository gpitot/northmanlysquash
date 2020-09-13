import React, { useEffect, useState } from "react";
import "./style.scss";
import fakeRanks from "./ranks";
import Streak from "../../components/Streak";

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
          </tr>
        </thead>
        <tbody className={loading && "loading"}>
          {displayedRanks.map(([name, streak], idx) => (
            <tr key={idx}>
              <td className="rank-streak">
                {idx + 1}

                <Streak streak={streak} />
              </td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranks;
