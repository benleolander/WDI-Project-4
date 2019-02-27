import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import WhiskiesIndex from './components/whiskies/WhiskiesIndex'

class App extends React.Component {

  render() {
    // if(!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <h1 className="title is-1">Whiskypedia</h1>

        <WhiskiesIndex />

      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
