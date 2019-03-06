import React from 'react'

import axios from 'axios'

import WhiskyForm from './WhiskyForm'
import Auth from '../../lib/Auth'

class WhiskyNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        abv: '',
        age: '',
        cask: '',
        description: '',
        distillery: {},
        image: '',
        name: '',
        price: ''
      },
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDistilleryChange = this.handleDistilleryChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/distilleries')
      .then(res => this.setState({ distilleries: res.data }))
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null}
    this.setState({ data, errors })
  }

  handleDistilleryChange({target: { value }}) {
    const distillery = this.state.distilleries.find(distillery => distillery.id === parseInt(value))
    const data = { ...this.state.data, distillery }
    if (value === 'Add') {
      this.props.history.push('/distilleries/new')
    }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        '/api/whiskies',
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}}
      )
      .then(() => this.props.history.push('/whiskies'))
      .catch(err => this.setState({ errors: (err.response.data || err.message)}) )
  }

  render() {
    if (!this.state.distilleries) return <h1>Loading...</h1>
    return(
      <section className="section">
        <div className="container">
          <h2 className="title">Add a Whisky</h2>
          <WhiskyForm
            data={this.state.data}
            errors={this.state.errors}
            distilleries={this.state.distilleries}
            handleChange={this.handleChange}
            handleDistilleryChange={this.handleDistilleryChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default WhiskyNew
