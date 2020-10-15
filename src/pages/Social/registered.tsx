import React from "react";
import Register, { IRegister } from "./register";
import "./style.scss";

type PlayerType = any;
interface IRegistered {
  heading: string;
  registeredUsers: Array<PlayerType>;
  spaces: number;
  registerForm: IRegister;
}

const Registered = ({
  heading,
  registeredUsers,
  spaces,
  registerForm,
}: IRegistered) => {
  return (
    <div className="box margin">
      <table className="ranks">
        <thead>
          <tr>
            <th>{heading}</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map(([date, event, player]) => (
            <tr>
              <td>{player}</td>
            </tr>
          ))}
          {registeredUsers.length < spaces && (
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
};
export default Registered;
