import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import  AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
//import { createStore ,applyMiddleware } from 'redux';
import globalReducer from '../src/container/InputCode/reducer';
import configureTool from './store';

const initialState={}
//import thunk from 'redux-thunk'; 

// const store = createStore(
//   globalReducer,
//   applyMiddleware(thunk),
  
// )

const options = {

  position: positions.TOP_CENTER,
  //TOP space
  offset:'100px',
  width:'500px',
  transition: transitions.SCALE,
  backgroundColor:'darkseagreen',
  color:'white'
  // containerStyle: {
  //   zIndex: 1000,
  //   color:'darkseagreen'
  // }
}

ReactDOM.render(
  <Provider store = {configureTool(initialState,globalReducer)}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);


