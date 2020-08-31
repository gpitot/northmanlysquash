import React, { useEffect, useRef } from "react";
import "./style.scss";
import Ranks from "../Ranks";
import Form from "../Form";

const Landing = () => {
  const canvasEl = useRef(null);

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

  return (
    <section className="area">
      <canvas id="bg" ref={canvasEl}></canvas>
      <img className="logo" src="/logo-white.png" />

      <div className="container">
        <a
          className="box"
          href="http://www.tennisvenues.com.au/booking/warringah-recreation-centre-squash"
        >
          <h1>Book a court</h1>
          {/* <h5>$17.50</h5>
          <h5>7-10pm</h5> */}
        </a>
        <div className="box" href="https://forms.gle/yoUpRaYPc8mnvMBG6">
          <h1>Enter a ladder result</h1>
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
        </div>

        <div className="box" href="https://forms.gle/yoUpRaYPc8mnvMBG6">
          <h1>Challenge someone</h1>
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
                  name : "contact",
                  label : "Phone number",
              },
              {
                id: "entry.1262188678",
                name: "opponent",
                label: "Opponent's name",
              },
              {
                id: "entry.1965906427",
                name: "availability",
                label: "Availability",
              },
            ]}
            submittedText="Opponent challenged"
          />
        </div>
        <a
          className="box"
          href="https://www.facebook.com/groups/427687110671206"
        >
          <h1>Ladder rankings</h1>
          <Ranks />
        </a>
      </div>
    </section>
  );
};

export default Landing;
