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
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/distilleries/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
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
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <DistilleryForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default DistilleryEdit
