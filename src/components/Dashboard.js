import React, { Component } from "react";
import Header from "./Header";

export default class Dashboard extends Component {
  render() {
    return (
      <container>
        <Header />
        <div className="dashboard_container">
          <br />
          <button className="add_property_button">Add New Property</button>
          <br />
          <div className="filter_container">
            <span>List properties with "desired rent" greater than: $ </span>
            <container className="filter_buttons">
              <input id="filter_input" />
              <button>Filter</button>
              <button>Reset</button>
            </container>
          </div>
        </div>
      </container>
    );
  }
}
