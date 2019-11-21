import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import Reducer from './components/Filter/strainReducer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { green } from '@material-ui/core/colors/green';

const store = createStore(Reducer)
const theme = createMuiTheme({
    palette: {
        primary: green
    }
})


ReactDOM.render(

<MuiThemeProvider theme={theme}>
<Provider store={store}>
<App />
</Provider>
</MuiThemeProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

