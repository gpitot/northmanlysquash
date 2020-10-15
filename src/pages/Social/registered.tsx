import React from "react";
import Register, { IRegister } from "./register";
import "./style.scss";

interface IRegistered {
  heading: string;
  registered: Array<string>;
  spaces: number;
  registerForm: IRegister;
}

const Registered = ({
  heading,
  registered,
  spaces,
  registerForm,
}: IRegistered) => (
  <div className="box margin">
    <table className="ranks">
      <thead>
        <tr>
          <th>{heading}</th>
        </tr>
      </thead>
      <tbody>
        {registered.map((player) => (
          <tr>
            <td>{player}</td>
          </tr>
        ))}
        {registered.length < spaces && (
          <tr>
            <td>
              <Register {...registerForm} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);
export default Registered;
