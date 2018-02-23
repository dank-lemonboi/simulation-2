import React, { Component } from "react";
import Header from "./Header";

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
  render() {
    let mappedHouse = this.props.propertyList.map( (house, i) => {
      return(
        <div></div>
      )
    } )
    return (
      <container>
        <Header />
        <div className="dashboard_container">
          <br />
          <Link to='wizard1'><div className="add_property_button">Add New Property</div></Link>
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

function mapStateToProps( state ) {
  return {
    propertyList: state.propertyList
  }
}

export default connect(mapStateToProps)(Dashboard)