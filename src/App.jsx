import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './redux/configureStore'
//firebase
import initFirebase from './init-firebase'

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles';

// Theme
import theme from './theme';
import './assets/scss/index.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

// Routes
import Routes from './routes/Routes';



// Browser history

initFirebase();

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
