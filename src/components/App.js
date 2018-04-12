import React, {Component} from 'react'
import IssueList from './IssueList'
import Home from './Home'
import Header from './Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="application">
        <Header/>
        <main className="main">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths is-offset-one-fifth">
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/issues" component={IssueList}/>
                  </Switch>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
