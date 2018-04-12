import React, {PureComponent} from 'react'

class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      token: ''
    }
    this.setToken = this.setToken.bind(this)
  }
  setToken (e) {
    localStorage.setItem('token', this.state.token)
    this.props.history.push('/issues')
  }
  render () {
    return (
      <div className="home-component">
        <div className="field">
          <label className="label">Introduce un Github Personal Access Token</label>
          <div className="control">
            <input className="input" value={this.state.token} onChange={ (e) => this.setState({token: e.target.value })} type="text" placeholder="Personal Access Token"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button onClick={this.setToken} className="button is-link">Continuar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
