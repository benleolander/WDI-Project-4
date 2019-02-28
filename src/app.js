import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/common/Navbar'
import Home from './components/Home'
import DistilleriesShow from './components/distilleries/DistilleriesIndex'
import DistilleriesIndex from './components/distilleries/DistilleriesIndex'
import WhiskiesIndex from './components/whiskies/WhiskiesIndex'
import WhiskyShow from './components/whiskies/WhiskyShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ProfileShow from './components/ProfileShow'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        <main>

          <Navbar />

          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/whiskies/:id" component={WhiskyShow} />
            <Route path="/whiskies" component={WhiskiesIndex} />
            <Route path="/distilleries/:id" component={DistilleriesShow} />
            <Route path="/distilleries" component={DistilleriesIndex} />
            <Route path="/me" component={ProfileShow} />
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
