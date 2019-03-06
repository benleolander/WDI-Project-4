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

            {tasted.length === 0 &&
              <p>{'You haven\'t tasted any whiskies yet.'}</p>
            }

            {tasted.length > 0 &&
              <div className="content">
                <p>{'You\'ve tasted the following whiskies:'}</p>
                <ul>
                  {tasted.map(whisky =>
                    <li key={whisky.id}>
                      <Link to={`/whiskies/${whisky.id}`}>
                        <p>{whisky.name}</p>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            }


            {visited.length === 0 &&
              <p>{'You haven\'t visited any distilleries yet.'}</p>
            }

            {visited.length > 0 &&
              <div className="content">
                <p>{'You\'ve visited the following distilleries:'}</p>
                <ul>
                  {visited.map(distillery =>
                    <li key={distillery.id}>
                      <Link to={`/distilleries/${distillery.id}`}>
                        <p>{distillery.name}</p>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            }

          </div>

          <div className="column is-half recommendation-column">
            {!this.state.recommendation &&
              <button className="button is-primary" id="whisky-recommendation-button" onClick={this.generateRecommendation}>
                Get a Whisky Recommendation
              </button>
            }

            {this.state.recommendation &&
              <Link to={`/whiskies/${this.state.recommendation.id}`}>
                <WhiskyCard
                  {...this.state.recommendation}
                  id='recommendation-card'
                />
              </Link>
            }
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileShow
