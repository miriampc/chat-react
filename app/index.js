import React from 'react'
import {render} from 'react-dom'
import Main from './components/Main'
import './assets/css/main.css'

const App = ({contacts}) => {
    return(
        <Main contacts={contacts}/>
    )

}

const CONTACTS = [
    {name: 'Pedro Perez', img: 'cat.jpg', date: 'Ayer'},
    {name: 'Marta Perez', img: 'cat.jpg', date: 'Doming'},
    {name: 'Ana Perez', img: 'cat.jpg', date: '24/10/17'},
    {name: 'Sara Perez', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Pedro Perez 1', img: 'cat.jpg', date: 'Ayer'},
    {name: 'PMarta Perez 2', img: 'cat.jpg', date: 'Doming'},
    {name: 'Ana Perez3', img: 'cat.jpg', date: '24/10/17'},
    {name: 'Sara Perez4', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Sara Perez6', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Pablo Perez5', img: 'cat.jpg', date: 'Lunes'}
];

render(
    <App contacts={CONTACTS}/>,
    document.getElementById('root')
);

