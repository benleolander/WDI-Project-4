import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'

class ProfileShow extends React.Component {
  constructor() {
    super()

    this.state = {}


  }

  componentDidMount() {
    axios
      .get('/api/me', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        console.log(res)
        this.setState({ data: res.data })
      })
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    return(
      <h1>My profile</h1>
    )
  }
}

export default ProfileShow
