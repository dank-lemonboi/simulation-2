import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header";

class Wizard1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard_container">
          <div className="wizard_topbar">
            <span>Add New Listing</span>
            <Link to="/dashboard">
              <div className="cancel_button">Cancel</div>
            </Link>
          </div>
          <span>Property Name</span>
          <input />
          <br/>
          <span>Property Description</span>
          <input />

          <div className="bottom_navigation_wizard1">
            <Link to="/dashboard">
              <div className="previous_button" />
            </Link>
            <Link to="wizard2">
              <div className="next_button">Next Step</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard1;
