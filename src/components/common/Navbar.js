import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()

    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" id="navbar-logo" href="/">
                <img src="../../../assets/logo.png" />
              </a>
              <Link to="/" className="navbar-item">
                <h1 className="title is-2"><span id="navbar-hero">Whiskypedia</span></h1>
              </Link>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={() => this.toggle('navbarOpen')}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

              <Link to="/whiskies" className="navbaritem">
                Whiskies
              </Link>

              <Link to="/distilleries" className="navbaritem">
                Distilleries
              </Link>

            </div>

            <div className="navbar-end">

              {!Auth.isAuthenticated() && <Link to="/login" className="navbaritem">
                Login
              </Link> }

              {!Auth.isAuthenticated() && <Link to="/register" className="navbaritem">
                Register
              </Link> }

              {Auth.isAuthenticated() && <Link to="/me" className="navbaritem">
                My Profile
              </Link> }

              {Auth.isAuthenticated() && <button onClick={this.logout} className="navbaritem">
                Logout
              </button> }

            </div>

          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)
