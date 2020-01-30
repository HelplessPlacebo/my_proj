import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, TypesPostInfo} from "./data/store";
import {BrowserRouter} from "react-router-dom";

export let renderall = (state) => {
    ReactDOM.render
    (<BrowserRouter>
        <App state={state} addpost={AddPost} TypesPostInfo={TypesPostInfo}/>
    </BrowserRouter>,
        document.getElementById('root'));
}
