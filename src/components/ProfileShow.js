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
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    if(!this.state.data) return <h1>Loading...</h1>
    const { username, email, created_at, visited, tasted } = this.state.data // eslint-disable-line
    return(
      <div>
        <h1>My profile</h1>
        <p>{username}</p>
        <p>{email}</p>
        {visited.length === 0? <p>You have not visited anywhere yet.</p> : <p>Distilleries visited</p>}
        {tasted.length === 0? <p>You haven not tasted any whisky yet.</p> : <p>Whiskies tasted</p>}
      </div>
    )
  }
}

export default ProfileShow
