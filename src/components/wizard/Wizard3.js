import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header'

class Wizard3 extends Component {
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

          <div className='image_container'>
          <img src="" alt="Preview"/>
          </div><br/>
          <span>Image URL</span>
          <input />
          <div className='bottom_navigation'>
          <Link to='wizard2'>Go Back</Link>
          <Link to='wizard4'>Next Step</Link>
          </div>
            </div>
            </div>
        )
    }
}

export default Wizard3