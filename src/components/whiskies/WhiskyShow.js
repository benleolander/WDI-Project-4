import React from 'react'
import axios from 'axios'

class WhiskyShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios
      .get(`/api/whiskies/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>

    const { abv, age, cask, created_at, description, distillery, image, name, price, tasted_by } = this.state.data

    return(
      <section className="section">
        <div className="container">
          <h3 className="title">{name}</h3>

          <div className="columns">

            <div className="column is-half">
              <h4 className="subtitle">{distillery.name}, {distillery.country}</h4>
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

              

            </div>

            <div className="column is-half">
              <img src={image} />
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default WhiskyShow
