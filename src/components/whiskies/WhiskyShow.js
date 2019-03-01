import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../../lib/Auth'

class WhiskyShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.addToTasted = this.addToTasted.bind(this)
    this.checkIfTasted = this.checkIfTasted.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/whiskies/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  addToTasted() {
    axios
      .get(
        `/api/whiskies/${this.props.match.params.id}/taste`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(()=> {
        axios
          .get(`/api/whiskies/${this.props.match.params.id}`)
          .then(res => this.setState({ data: res.data }))
      })
  }

  checkIfTasted() {
    const { tasted_by } = this.state.data // eslint-disable-line
    const currentUser = Auth.getCurrentUser()

    let result = false

    tasted_by.forEach(user => {
      if(user.id === currentUser) result = true
    })
    return result
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>

    const { abv, age, cask, description, distillery, image, name, price, tasted_by } = this.state.data // eslint-disable-line

    return(
      <section className="section">
        <div className="container">
          <h3 className="title">{name}</h3>

          <div className="columns">

            <div className="column is-half">
              <Link to={`/distilleries/${distillery.id}`}><h4 className="subtitle">{distillery.name}, {distillery.country}</h4></Link>
              {age && <h4 className="subtitle">Aged {age} years</h4>}
              <hr />
              <p>{description}</p>
              <div className="section">
                <p><strong>Bottled at: </strong>{abv}% ABV</p>
                <p><strong>Cask(s): </strong>{cask}</p>
                <p><strong>£{price}</strong></p>
              </div>
              <hr />
              <p>This whisky has been tasted by {tasted_by.length} Whiskypedia users.</p>

              {Auth.isAuthenticated() && !this.checkIfTasted() && <button className="button is-primary" onClick={this.addToTasted}>Add {name} to your tasted whiskies</button>}

              {Auth.isAuthenticated() && this.checkIfTasted() && <button className="button is-primary" disabled>{'You\'ve already tasted this whisky!'}</button>}

              {!Auth.isAuthenticated() && <p className="section"><a href="/register">Join the Whiskypedia community today</a> to discover new whiskies and begin your journey!</p>}
            </div>

            <div className="column is-half">
              <figure className="image is-3by4" id="whisky-show-img">
                <img src={image} />
              </figure>
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default WhiskyShow
