import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/login', this.state.data)
      .then((res) => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2 className="title">Login</h2>


        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              className="input"
              name="email"
              placeholder="Email"
              value={this.state.data.email}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.data.password}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button className="button is-info">Submit</button>

      </form>
    )
  }
}

export default Login
