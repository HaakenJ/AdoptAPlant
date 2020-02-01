import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="nav-link bg-light" href="/">
        Search Books
      </a>
      <a className="nav-link bg-light" href="/books">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
