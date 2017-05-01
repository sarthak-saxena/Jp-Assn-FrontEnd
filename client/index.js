import React from 'react'
import {
  Provider
} from 'react-redux'
import createStore from './store.jsx'
import ReactDOM from 'react-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import RouteComponent from './components/RouteComponent.jsx'
// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const store = createStore()
console.log(store)
const history = createHistory()
const reactComponent = ( 
<Provider store={store} >
  <ConnectedRouter history={history}>
    <RouteComponent />
  </ConnectedRouter>
</Provider>)
ReactDOM.render(reactComponent, document.getElementById('root'))
