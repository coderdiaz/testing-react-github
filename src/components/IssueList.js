import React, {PureComponent} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Issue from './Issue'

class IssueList extends PureComponent {
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
      variables: {user, name, number_of_issues}
    }
  }
})(IssueList)
