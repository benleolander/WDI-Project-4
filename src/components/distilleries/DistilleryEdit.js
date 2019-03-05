import React from 'react'

import axios from 'axios'

import DistilleryForm from './DistilleryForm'
import Auth from '../../lib/Auth'

class DistilleryEdit extends React.Component {
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
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/distilleries/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
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
      .catch(err => this.setState({ errors: err.response.data }))
  }


  handleDelete() {
    axios.delete(`/api/distilleries/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/distilleries'))
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="form-header">
            <h2 className="title">Edit Distillery</h2>
            <button className="button is-danger" onClick={this.handleDelete}>Delete {this.state.data.name} & Whiskies</button>
          </div>
          <DistilleryForm
            data={this.state.data}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default DistilleryEdit
