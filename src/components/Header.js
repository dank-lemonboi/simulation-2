import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="houser_header">
      <div className="header_content_container">
        <div className="header_title">
          <h1>
            <strong>Houser</strong> Dashboard
          </h1>
        </div>
        <div className="logout_button">
          <Link to='/'><h3>Logout</h3></Link>
        </div>
      </div>
    </header>
  );
}
