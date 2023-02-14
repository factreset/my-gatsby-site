import * as React from "react";
import { Link } from "gatsby";

const Default = () => {
  return (
    <ul>
      <li>
        <Link to="/app/details">Details</Link>
      </li>
      <li>
        <Link to="/app/profile">Profile</Link>
      </li>
      <li>
        <Link to="/app/login">Login</Link>
      </li>
    </ul>
  );
};

export default Default;
