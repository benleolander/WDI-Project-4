import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
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
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
