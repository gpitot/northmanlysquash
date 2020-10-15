import React, { useState, useEffect } from "react";
import Registered from "./registered";
import "./style.scss";

const generateForm = (event: string) => {
  return {
    url:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSej8MaW1LGRDYTWYVRvn0Rd9tgfb4alYNg7ejzLytOjoStcKQ/formResponse",
    fields: [
      {
        id: "entry.118918008",
        name: "Date",
        hidden: true,
        label: "Date",
      },
      {
        id: "entry.738116387",
        name: "Event",
        label: "Event",
        hidden: true,
      },
      {
        id: "entry.1510420312",
        name: "Name",
        label: "Name",
      },
    ],
    overrides: [
      ["entry.118918008", () => new Date()],
      ["entry.738116387", () => event],
    ],
  };
};

const Social = () => {
  const coachingRegisterForm = generateForm("coaching");
  const socialEarlyRegisterForm = generateForm("social7pm");
  const socialLateRegisterForm = generateForm("social830pm");

  const [registered, setRegistered] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/social")
      .then((res) => res.json())
      .then((data) => {
        setRegistered(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="social">
      <Registered
        heading={"Coaching List"}
        registeredUsers={registered.filter(([, e]) => e === "coaching")}
        spaces={9}
        registerForm={coachingRegisterForm}
      />
      <Registered
        heading={"Social 7-830pm"}
        registeredUsers={registered.filter(([, e]) => e === "social7pm")}
        spaces={9}
        registerForm={socialEarlyRegisterForm}
      />
      <Registered
        heading={"Social 830-10pm"}
        registeredUsers={registered.filter(([, e]) => e === "social830pm")}
        spaces={9}
        registerForm={socialLateRegisterForm}
      />
    </section>
  );
};

export default Social;
