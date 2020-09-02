import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import Ranks from "../Ranks";
import Form from "../Form";
import Cross from "../../components/Cross";

const Landing = () => {
  const canvasEl = useRef(null);
  const [selectedState, setSelectedState] = useState("ranks");

  useEffect(() => {
    const canvas = canvasEl.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1f4689";
    ctx.fillRect(0, 0, width, height);

    //red
    ctx.fillStyle = "#c43f51";
    ctx.beginPath();
    ctx.moveTo(width, height / 5);
    ctx.lineTo(0, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width, height / 5);
    ctx.fill();
  }, []);

  const changeState = (state) => {
    setSelectedState(state);
    window.scrollTo({ left: 0, top: window.innerHeight, behavior: "smooth" });
  };

  const getSelectedState = () => {
    if (selectedState === "ranks")
      return (
        <>
          <h1>Ladder rankings</h1>
          <Ranks />
        </>
      );

    if (selectedState === "challenge")
      return (
        <>
          <h1>Challenge someone</h1>
          <Cross handleClick={() => changeState("ranks")} />
          <Form
            url="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZGiuxlFoJ9wstQXQNUJrlfY1IXGRgmIsTemN6TVuHFJATTA/formResponse"
            submitText={"Challenge"}
            fields={[
              {
                id: "entry.239854278",
                name: "challenger",
                label: "Your name",
              },
              {
                id: "entry.891488740",
                name: "contact",
                label: "Phone number",
              },
              {
                id: "entry.1262188678",
                name: "opponent",
                label: "Opponent's name",
              },
              {
                id: "entry.1965906427",
                name: "availability",
              },
            ]}
            submittedText="Opponent challenged"
          />
        </>
      );

    if (selectedState === "result")
      return (
        <>
          <h1>Enter a ladder result</h1>
          <Cross handleClick={() => changeState("ranks")} />
          <Form
            url="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfduxmW8QYUZ7prmCMvsFBVk0YaaGq7-BXp8NkF51LI16q1gQ/formResponse"
            submitText={"Submit"}
            fields={[
              {
                id: "entry.1876331337",
                name: "challenger",
                label: "Your name",
              },
              {
                id: "entry.1213379668",
                name: "opponent",
                label: "Opponent's name",
              },
              {
                id: "entry.642223520",
                name: "result",
                label: "Result",
              },
            ]}
            submittedText="Result submitted"
          />
        </>
      );
  };

  return (
    <section className="area">
      <canvas id="bg" ref={canvasEl}></canvas>

      <div className="container">
        <img className="logo margin" src="/logo-white.png" alt="logo" />
        <div className="col">
          <a
            className="box red margin"
            href="http://www.tennisvenues.com.au/booking/warringah-recreation-centre-squash"
          >
            <h1>Book a court</h1>
          </a>
          <a
            className="box red margin"
            href="https://www.facebook.com/groups/427687110671206"
          >
            <h1>Follow us on Facebook</h1>
          </a>

          <a
            className="box red margin"
            href="https://www.facebook.com/groups/427687110671206"
          >
            <h5>4 Kentwell Rd, North Manly NSW 2100</h5>
          </a>

          <div className="box margin" onClick={() => changeState("result")}>
            <h1>Enter a ladder result</h1>
          </div>

          <div className="box margin" onClick={() => changeState("challenge")}>
            <h1>Challenge someone</h1>
          </div>
        </div>
        <div className="box rank-box margin col">{getSelectedState()}</div>
      </div>
    </section>
  );
};

export default Landing;
