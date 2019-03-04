import React from 'react'
import axios from 'axios'

import WhiskyForm from './WhiskyForm'
import Auth from '../../lib/Auth'

class WhiskyEdit extends React.Component {
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
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDistilleryChange = this.handleDistilleryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/whiskies/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ data: res.data })
        axios.get('/api/distilleries')
          .then(res => {
            this.setState({ distilleries: res.data}), () => console.log(this.state)
          })
      })

  }

  handleChange({ target: {name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleDistilleryChange({target: { value }}) {
    const distillery = this.state.distilleries.find(distillery => distillery.id === parseInt(value))
    const data = { ...this.state.data, distillery }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .put(`/api/whiskies/${this.props.match.params.id}`, this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
      .then(() => {
        this.props.history.push(`/whiskies/${this.props.match.params.id}`)
      })

  }

  render() {
    if (!this.state.data || !this.state.distilleries) return <h1>Loading...</h1>
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">Edit Whisky</h2>
          <WhiskyForm
            data={this.state.data}
            distilleries={this.state.distilleries}
            handleChange={this.handleChange}
            handleDistilleryChange={this.handleDistilleryChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default WhiskyEdit
