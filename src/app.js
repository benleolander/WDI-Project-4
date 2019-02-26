import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    // if(!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <h1>Whiskypedia</h1>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
