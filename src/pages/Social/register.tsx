import React from "react";
import "./style.scss";

import Form from "../Form";

interface IField {
  id: string;
  name: string;
  label: string;
  hidden?: boolean;
}

export interface IRegister {
  url: string;
  fields: Array<IField>;
}
const Register = (props: IRegister) => {
  return (
    <Form
      submitText="Register"
      submittedText="Thanks for registering"
      {...props}
    />
  );
};

export default Register;
