import React from 'react';
import ReactDom from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import charities from './reducers/charities';

import AnonymousStyleResolution from './components/AnonymousStyleResolution';
import NamedStyleResolution from './components/NamedStyleResolution';
import RuntimeStyleResolution from './components/RuntimeStyleResolution';
import CharityList from './components/CharityList';

var initialContent = {
    charities: {idList: [], records: {}},
};

const combinedReducers = combineReducers({
    charities
});

const store = createStore(
    combinedReducers,
    initialContent,
    applyMiddleware(thunkMiddleware)
);

ReactDom.render(
    <Provider store={store}>
        <div>
            <AnonymousStyleResolution />
            <NamedStyleResolution />
            <RuntimeStyleResolution />
            <br/>
            <br/>
            <CharityList />
        </div>
    </Provider>, document.getElementById('main'));
