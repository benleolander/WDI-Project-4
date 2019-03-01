import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import WhiskyCard from '../whiskies/WhiskyCard'
import Auth from '../../lib/Auth'

class DistilleryShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.addToVisited = this.addToVisited.bind(this)
    this.checkIfVisited = this.checkIfVisited.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/distilleries/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data}))
  }

  addToVisited() {
    axios
      .get(
        `/api/distilleries/${this.props.match.params.id}/visit`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
      .then(() => {
        axios
          .get(`/api/distilleries/${this.props.match.params.id}`)
          .then(res => this.setState({ data: res.data}))
      })
  }

  checkIfVisited() {
    const { visited_by } = this.state.data //eslint-disable-line
    const currentUser = Auth.getCurrentUser()
    let result = false
    visited_by.forEach(user => {
      if(user.id === currentUser) result = true
    })
    return result
  }

  handleDelete() {
    axios.delete(`/api/distilleries/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/distilleries'))
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

              {Auth.isAuthenticated() && <Link to={`/distilleries/${this.props.match.params.id}/edit`}><button className="button is-info">Edit</button></Link> }
              {Auth.isAuthenticated() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}

              <hr />

              <p><strong>{visited_by.length}</strong> Whiskypedia users have visited {name}</p>

              {Auth.isAuthenticated() && !this.checkIfVisited() && <button className="button is-primary" onClick={this.addToVisited}>Add {name} to your visited distilleries</button> }

              {Auth.isAuthenticated() && this.checkIfVisited() && <button className="button is-primary" disabled>{'You\'ve marked this distillery as visited'}</button>}

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
