import React, {Component} from 'react'
import IssueList from './IssueList'
import Header from './Header'
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
                <IssueList/>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
