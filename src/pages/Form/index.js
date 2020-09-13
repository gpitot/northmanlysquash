import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Availability from "../../components/Availability";
import { dates } from "../../data/dates";
import { fakeEncrypt } from "../../utils/fake-encrypt";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 500,
    margin: "44px auto",
    padding: 24,
    background: "white",
    borderRadius: 8,
  },

  formField: {
    margin: "8px 0",
  },

  button: {
    color: "white",
    fontWeight: 800,
    margin: "8px 0",
    padding: "16px",
  },

  input: {
    fontFamily: "Russo One, sans-serif",
    "&::placeholder": {
      fontFamily: "Russo One, sans-serif",
    },
  },

  submitted: {
    color: "#1f4689",
  },
});

const Form = ({ url, fields, submitText, submittedText }) => {
  const DEFAULT_STATE = {};
  fields.forEach(({ name }) => (DEFAULT_STATE[name] = ""));

  const [formData, setFormData] = useState(DEFAULT_STATE);
  const [submitted, setSubmitted] = useState(false);
  const classes = useStyles();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    fields.forEach(({ id, name }) => {
      if (id === "entry.891488740") {
        //encrypt numberr
        data.append(id, fakeEncrypt(formData[name]));
      } else {
        data.append(id, formData[name]);
      }
    });
    fetch(url, { method: "post", body: data });
    setSubmitted(true);
  };

  if (submitted) {
    return <h1 className={classes.submitted}>{submittedText}</h1>;
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {fields.map(({ name, label }) => {
        if (name === "availability")
          return (
            <Availability
              options={dates}
              name={name}
              handleChange={handleChange}
            />
          );
        return (
          <TextField
            className={classes.formField}
            variant="outlined"
            label={label}
            name={name}
            onChange={handleChange}
            required
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
          />
        );
      })}

      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.button}
      >
        {submitText}
      </Button>
    </form>
  );
};

export default Form;
