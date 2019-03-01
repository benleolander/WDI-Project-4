import React from 'react'

import axios from 'axios'

import WhiskyForm from './WhiskyForm'

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
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/distilleries')
      .then(res => this.setState({ distilleries: res.data }))
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/whiskies', this.state.data)
      .then(() => this.props.history.push('/whiskies'))
  }

  render() {
    if (!this.state.distilleries) return <h1>Loading...</h1>
    return(
      <section className="section">
        <div className="container">
          <WhiskyForm
            data={this.state.data}
            distilleries={this.state.distilleries}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default WhiskyNew
