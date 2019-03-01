import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import WhiskyCard from '../whiskies/WhiskyCard'
import Auth from '../../lib/Auth'

class DistilleryShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios
      .get(`/api/distilleries/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data}))
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>

    const { name, image, founded, town, country, visited_by, whiskies } = this.state.data //eslint-disable-line

    return(
      <section className="section">
        <div className="container">
          <h3 className="title has-text-right">{name}</h3>

          <div className="columns">

            <div className="column is-half">
              <figure className="image" id="distillery-show-img">
                <img src={image} />
              </figure>
            </div>

            <div className="column is-half has-text-right">
              <h4 className="subtitle">
                {town}, {country}
              </h4>
              <p><strong>Founded: </strong>{founded}</p>
              <p><strong>{visited_by.length}</strong> Whiskypedia users have visited {name}</p>

              {!Auth.isAuthenticated() && <p className="section"><a href="/register">Join the Whiskypedia community today</a> to discover new whiskies and begin your journey!</p>}
            </div>


          </div>

          <div className="columns is-multiline">
            {whiskies.map(whisky =>
              <div className="column is-one-quarter" key={whisky.id}>
                <Link to={`/whiskies/${whisky.id}`}>
                  <WhiskyCard
                    name={whisky.name}
                    image={whisky.image}
                    price={whisky.price}
                    distillery={this.state.data}
                  />
                </Link>
              </div>
            )}
          </div>

        </div>
      </section>
    )
  }
}

export default DistilleryShow
