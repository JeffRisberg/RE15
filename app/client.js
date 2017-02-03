import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import charities from './reducers/charities'
import donations from './reducers/donations'

import AppView from './containers/AppView'
import Home from './components/Home'
import CharityList from './components/CharityList'
import DonationList from './components/DonationList'

var initialContent = {
    charities: {idList: [], records: {}},
    donations: {idList: [], records: {}}
}

const combinedReducers = combineReducers({
    charities,
    donations
})

const store = createStore(
    combinedReducers,
    initialContent,
    applyMiddleware(thunkMiddleware)
)

ReactDom.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={AppView}>
                    <IndexRoute component={Home}/>
                    <Route path="charities" component={CharityList}/>
                    <Route path="donations" component={DonationList}/>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('main')
)
