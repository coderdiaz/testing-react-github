import React, {PureComponent} from 'react'
class Issue extends PureComponent {
  render () {
    return (
      <a href={this.props.issue.url} className="panel-block">
        {this.props.issue.title}
      </a>
    )
  }
}

export default Issue
