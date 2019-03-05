import React from 'react'

import axios from 'axios'

import DistilleryForm from './DistilleryForm'
import Auth from '../../lib/Auth'

class DistilleryNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        founded: '',
        town: '',
        country: ''
      },
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        '/api/distilleries',
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}}
      )
      .then(() => this.props.history.push('/distilleries'))
      .catch(err => this.setState({errors: err.response.data}))
  }

  suggestionSelect(result, lat, lng) {
    console.log(result, lat, lng)
    const data = {
      ...this.state.data,
      lat: lat,
      lng: lng,
      address: result
    }
    const errors = { ...this.state.errors, lat: '', lng: '' }

    this.setState({data, errors})
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <h2 className="title">Add Distillery</h2>
          <DistilleryForm
            data={this.state.data}
            errors={this.state.errors}
            suggestionSelect={this.suggestionSelect}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default DistilleryNew
