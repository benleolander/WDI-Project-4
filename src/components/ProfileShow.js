import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'
import WhiskyCard from './whiskies/WhiskyCard'

class ProfileShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.generateRecommendation = this.generateRecommendation.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/me', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => this.setState({ data: res.data }))
  }

  generateRecommendation() {
    axios.get(
      '/api/recommendation',
      { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
    )
      .then(res => this.setState({ recommendation: res.data }))
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    const { username, email, created_at, visited, tasted } = this.state.data // eslint-disable-line
    return(
      <section className="section">

        <div className="columns">
          <div className="column is-half profile-show-column">
            <h1 className="title is-1 has-text-left">{username}</h1>
            <p className="subtitle has-text-left">{email}</p>
            {visited.length === 0? <p>You have not visited anywhere yet.</p> : <p>Distilleries visited</p>}
            {tasted.length === 0? <p>You haven not tasted any whisky yet.</p> : <p>Whiskies tasted</p>}
          </div>
        </div>

        {!this.state.recommendation &&
          <button className="button is-primary" onClick={this.generateRecommendation}>
            Get a Whisky Recommendation
          </button>
        }

        {this.state.recommendation &&
          <div className="columns">
            <div className="column is-one-quarter">
              <Link to={`/whiskies/${this.state.recommendation.id}`}>
                <WhiskyCard {...this.state.recommendation}/>
              </Link>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default ProfileShow
