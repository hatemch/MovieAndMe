// App.js

import 'react-native-gesture-handler';

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import AsyncStorage from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

export default class App extends React.Component {
  render() {
    let persistor = persistStore(AsyncStorage)
    return (
      <Provider store={AsyncStorage}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    )
  }
}