import React from "react";
import Register, { IRegister } from "./register";
import "./style.scss";

type PlayerType = any;
interface IRegistered {
  heading: string;
  registeredUsers: Array<PlayerType>;
  spaces: number;
  registerForm: IRegister;
  loading: boolean;
}

const Registered = ({
  heading,
  registeredUsers,
  spaces,
  registerForm,
  loading,
}: IRegistered) => {
  if (loading) {
    return (
      <div className="box margin">
        <table className="ranks">
          <thead>
            <tr>
              <th>{heading}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="box margin">
      <table className="ranks">
        <thead>
          <tr>
            <th>{heading}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{spaces - registeredUsers.length} spots left.</td>
          </tr>
          {registeredUsers.slice(0, spaces).map(([date, event, player]) => (
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
