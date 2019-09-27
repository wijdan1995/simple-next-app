import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>)
    }
}

export default appWithTranslation(MyApp)