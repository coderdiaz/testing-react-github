import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Issue from './Issue'
import axios from 'axios'

class IssueList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    axios.post('https://api.github.com/repos/coderdiaz/demo-issues/issues', this.state, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      this.setState({
        title: '',
        body: ''
      })
    }).catch(err => console.error(err))
  }
  render () {
    if (this.props.issueQuery && this.props.issueQuery.loading) {
      return <div>Loading data</div>
    }
    if (this.props.issueQuery && this.props.issueQuery.error) {
      return <div>Error </div>
    }

    const issuesToRender = this.props.issueQuery.repository.issues.nodes
    const issuesTotal = this.props.issueQuery.repository.issues.totalCount

    return (
      <div className="issue-list">
        <div className="form">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" value={this.state.title} onChange={ (e) => this.setState({ title: e.target.value })} type="text" placeholder="Text input"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea value={this.state.body} onChange={ (e) => this.setState({ body: e.target.value })} className="textarea" placeholder="Textarea"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button onClick={this.handleClick} className="button is-link">Create new issue</button>
            </div>
          </div>
        </div>
        <hr/>
        <div className="issue-count">
          <span className="tag is-black is-medium">
            Total of issues: {issuesTotal}
          </span>
        </div>
        <br/>
        <div className="issues">
          {issuesToRender.map(issue => <Issue key={issue.id} issue={issue} />)}
        </div>
      </div>
    )
  }
}

export const ISSUE_QUERY = gql`
  query IssueQuery($user: String!, $name: String!, $number_of_issues: Int!) {
    repository(owner: $user, name: $name) {
      issues (last: $number_of_issues) {
        totalCount,
        nodes {
          id,
          title,
          url,
          state,
          bodyText,
          createdAt
        }
      }
    }
  }
`

export default graphql(ISSUE_QUERY, {
  name: 'issueQuery',
  options: ownProps => {
    const name = 'demo-issues'
    const user = 'coderdiaz'
    const number_of_issues = 20
    return {
      pollInterval: 7000,
      variables: {user, name, number_of_issues}
    }
  }
})(IssueList)
