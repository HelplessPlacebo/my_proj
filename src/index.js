
import React from 'react'
import * as serviceWorker from './serviceWorker';
import store from './data/redux-store'
import ReactDOM from "react-dom";
import {BrowserRouter,HashRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


/* Hashrouter use for  adding on git ,

      /* <HashRouter>*/

/* </HashRouter>,*/
    ReactDOM.render(
       <BrowserRouter /* basename={process.env.PUBLIC_URL}*/>

        <Provider store={store}>
            <App  />
        </Provider>
       </BrowserRouter>,
        document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();