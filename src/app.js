import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Favicon from 'react-favicon'

import './style.scss'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/Home'
import DistilleryShow from './components/distilleries/DistilleryShow'
import DistilleriesIndex from './components/distilleries/DistilleriesIndex'
import DistilleryNew from './components/distilleries/DistilleryNew'
import DistilleryEdit from './components/distilleries/DistilleryEdit'
import WhiskiesIndex from './components/whiskies/WhiskiesIndex'
import WhiskyShow from './components/whiskies/WhiskyShow'
import WhiskyEdit from './components/whiskies/WhiskyEdit'
import WhiskyNew from './components/whiskies/WhiskyNew'
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
            <Route path="/whiskies/new" component={WhiskyNew} />
            <Route path="/whiskies/:id/edit" component={WhiskyEdit} />
            <Route path="/whiskies/:id" component={WhiskyShow} />
            <Route path="/whiskies" component={WhiskiesIndex} />
            <Route path="/distilleries/new" component={DistilleryNew} />
            <Route path="/distilleries/:id/edit" component={DistilleryEdit} />
            <Route path="/distilleries/:id" component={DistilleryShow} />
            <Route path="/distilleries" component={DistilleriesIndex} />
            <Route path="/me" component={ProfileShow} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />

        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <div>
    <Favicon url='assets/logo.png'/>
    <App />
  </div>,
  document.getElementById('root')
)
