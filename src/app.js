import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/common/Navbar'
import Home from './components/Home'
import WhiskiesIndex from './components/whiskies/WhiskiesIndex'
import Register from './components/auth/Register'

class App extends React.Component {

  render() {
    // if(!this.state) return <h1>Loading...</h1>
    return (
      <BrowserRouter>

        <main>

          <Navbar />

          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/whiskies" component={WhiskiesIndex} />
            <Route path="/" component={Home} />
          </Switch>

        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
