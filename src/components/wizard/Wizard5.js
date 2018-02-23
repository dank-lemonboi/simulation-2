import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header'

class Wizard5 extends Component {
    render() {
        return(
            <div>
            <Header />
            <div className="dashboard_container">
            <div className="wizard_topbar">
            <span>Add New Listing</span>
            <Link to="/dashboard">
              <div className="cancel_button">Cancel</div>
            </Link>
          </div>
          <div><h3>Recommended Rent $ </h3></div>

          <span>Desired Rent</span>
          <input />
          <div className='bottom_navigation'>
          <Link to='wizard4'>Go Back</Link>
          <Link to='dashboard'><div>Complete</div></Link>
          </div>
            </div>
            </div>
        )
    }
}

export default Wizard5