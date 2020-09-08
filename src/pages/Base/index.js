import React, { useEffect, useRef } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Landing = ({ children }) => {
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

      <div className="container">
        <Link to="/" className="logo margin">
          <img src="/logo-white.png" alt="North Manly Squash Club" />
        </Link>
        <>{children}</>
      </div>
    </section>
  );
};

export default Landing;
