import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

// Added root service for Github Graph QL API V4
const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'})

// Configuring Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

/**
 * Entry point into the application.
 *
 * Note: registerServiceWorker is optional,
 * if you don't want to use it, just comment
 * registerServiceWorker();
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, 
  document.getElementById('root')
)
registerServiceWorker()
