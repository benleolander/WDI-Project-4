import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import DistilleryCard from './DistilleryCard'

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
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.distilleries.map(distillery =>
              <div className="column is-one-quarter" key={distillery.id}>
                <Link to={`/distilleries/${distillery.id}`}>
                  <DistilleryCard{...distillery} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default DistilleriesIndex
