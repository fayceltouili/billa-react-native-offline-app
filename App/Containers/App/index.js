import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from '../../Stores'
import StartUp from '../StartUp'

const { store, persistor } = createStore()

export default  App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StartUp />
      </PersistGate>
    </Provider>
  )
}
