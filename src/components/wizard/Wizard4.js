import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header'

class Wizard4 extends Component {
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
          <span>Loan Amount</span>
          <input />
          <span>Monthly Mortgage</span>
          <input />
          <div className='bottom_navigation'>
          <Link to='wizard3'>Go Back</Link>
          <Link to='wizard5'>Next Step</Link>
          </div>
            </div>
            </div>
        )
    }
}

export default Wizard4