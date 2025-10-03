import React from "react";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SiteNavbar;
