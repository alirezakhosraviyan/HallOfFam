/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/index';
import RootNavigation from './navigations/index';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component<Props> {

  render() {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    );
  }
}
