import React from 'react';
import './bootstrap';
import Root from './components/Root';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>,
    document.getElementById('root'));
}