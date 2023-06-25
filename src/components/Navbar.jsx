import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Navigation component
    <nav className="h-16 bg-black">
      {/* List of navigation links */}
      <ul className="flex items-center justify-end h-full pr-10 md:pr-14">
        {/* Individual navigation link for News */}
        <li className="mr-4 text-white">
          {/* Link component from react-router-dom for navigating to the News page */}
          <Link to="/">News</Link>
        </li>

        {/* Individual navigation link for Weather */}
        <li className="text-white">
          {/* Link component from react-router-dom for navigating to the Weather page */}
          <Link to="/weather">Weather</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
