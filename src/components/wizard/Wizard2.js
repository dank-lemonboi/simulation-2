import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header'

class Wizard2 extends Component {
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
          <span>Address</span>
          <input />
          <span>City</span>
          <input />
          <span>State</span>
          <input />
          <span>Zip</span>
          <input />


          <div className='bottom_navigation'>
            <Link to='wizard1'>Go Back</Link>
            <Link to='wizard3'>Next Step</Link>
            </div>
            </div>
            </div>
        )
    }
}

export default Wizard2