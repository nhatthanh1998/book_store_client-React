import React, { Component } from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from '../container/Book'
import Slider from '../container/Slider'

import createHistory from 'history/createBrowserHistory'
export const history = createHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Book}/>
          <Route exact path='/slider' component = {Slider}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
