import React, {PureComponent} from 'react'

class Header extends PureComponent {
  render () {
    return <header className="header">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths is-offset-one-fifth">
                <h1 className="title">
                  Github Issues
                </h1>
                <h2 className="subtitle">
                  demo-issues
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  }
}

export default Header
