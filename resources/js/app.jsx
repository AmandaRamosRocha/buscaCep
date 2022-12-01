import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Login from './components/Login';
import Signin from './components/Signin';

if(document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'))
}
if(document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'))
}
if(document.getElementById('signin')) {
    ReactDOM.render(<Signin />, document.getElementById('signin'))
}

