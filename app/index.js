import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main'
import store from './config/store'

import './assets/css/main.css'

const App = () => {
    return(
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}

render(
    <App/>,
    document.getElementById('root')
)

