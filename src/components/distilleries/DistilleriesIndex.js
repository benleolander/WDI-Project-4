import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import DistilleryCard from './DistilleryCard'
import Auth from '../../lib/Auth'

class DistilleriesIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/distilleries')
      .then(res => this.setState({ distilleries: res.data }))
  }

  render() {
    if(!this.state.distilleries) return <h1>Loading...</h1>
    return (
      <div>
        {Auth.isAuthenticated() && <Link to='/distilleries/new'><button className="button is-primary is-pulled-right" id="distillery-create-button">Add a Distillery</button></Link>}
        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {this.state.distilleries.map(distillery =>
                <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile" key={distillery.id}>
                  <Link to={`/distilleries/${distillery.id}`}>
                    <DistilleryCard{...distillery} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default DistilleriesIndex
