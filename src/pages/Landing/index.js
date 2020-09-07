import React from "react";
import "./style.scss";
import Ranks from "../Ranks";
import Form from "../Form";
import Information from "../../components/Information";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <>
      <div className="cta">
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
          href="https://goo.gl/maps/jNfKyUBjaJWqzHb67"
        >
          <h5>4 Kentwell Rd, North Manly NSW 2100</h5>
        </a>

        <div className="box margin">
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
      </div>
      <div className="box rank-box margin">
        <h1>Ladder rankings</h1>

        <Ranks />
      </div>

      <div className="box margin">
        <h1>Challenge someone</h1>
        <Link to="/rules">
          <Information />
        </Link>

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
      </div>
    </>
  );
};

export default Landing;
