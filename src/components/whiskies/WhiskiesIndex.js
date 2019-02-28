import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import WhiskyCard from './WhiskyCard'

class WhiskiesIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/whiskies')
      .then(res => this.setState({ whiskies: res.data }))
  }

  render() {
    if(!this.state.whiskies) return <h1>Loading...</h1>
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.whiskies.map(whisky =>
              <div className="column is-one-quarter" key={whisky.id}>
                <Link to={`/whiskies/${whisky.id}`}>
                  <WhiskyCard{...whisky} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default WhiskiesIndex
