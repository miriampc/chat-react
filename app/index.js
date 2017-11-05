import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'

import './styles/main.css'

render(
    <Header title="WhatsApp" class="header" search="fa fa-search" ellipsis="fa fa-ellipsis-v" direction="right"/>,
    document.getElementById('root')
);