import React, {PureComponent} from 'react'
class Issue extends PureComponent {
  render () {
    return (
      <a href={this.props.issue.url} className="box">
        <article className="media">
          <div className="media-left">
            <span className="icon has-text-success">
              <i className="fas fa-info-circle"></i>
            </span>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.issue.title}</strong>
                <br/>
                {this.props.issue.bodyText}
              </p>
              <hr/>
              <p>
                <strong>Status:</strong> {this.props.issue.state}
                &nbsp;&nbsp;&nbsp;<strong>Date:</strong> {this.props.issue.createdAt}
              </p>
            </div>
          </div>
        </article>
      </a>
    )
  }
}

export default Issue
