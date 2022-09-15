import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/validate">Validate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
