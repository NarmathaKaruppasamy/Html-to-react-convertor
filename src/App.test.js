import React from 'react';
import App from './App';
import Header from './components/Header'
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import InputCode from './container/InputCode';
import Footer from './components/Footer';
import NoUpload from './components/NoUpload';
import AboutUs from './components/AboutUs';
import ComponentList from './components/ComponentList';
import ConvertorService from './components/ConvertorService';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import globalReducer from '../src/container/InputCode/reducer';
import configureTool from './store';
import  AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
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
const initialState={}
jest.mock('./components/Header');
jest.mock('./container/InputCode',() => jest.fn());
jest.mock('./components/Footer');
jest.mock('./components/NoUpload');
jest.mock('./components/AboutUs');
jest.mock('./components/ComponentList');
jest.mock('./components/ConvertorService')

test("Should render page header,HomePage and footer on default route", () => {
    // Arrange
    Header.mockImplementation(() => <div>Header</div>);
    InputCode.mockImplementation(() => <div>InputCode</div>);
    Footer.mockImplementation(() => <div>Footer</div>);

    // Act
    render(
      <MemoryRouter>
        <Provider store = {configureTool(initialState,globalReducer)}>
            <AlertProvider template={AlertTemplate} {...options}>
                <App/>
            </AlertProvider>   
        </Provider>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("InputCode")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
});

// test("Should render page header,about us and footer for team route", () => {
//     // Arrange
//     Header.mockImplementation(() => <div>Header</div>);
//     AboutUs.mockImplementation(() => AboutUs);
//     Footer.mockImplementation(() => <div>Footer</div>);

//     // Act
//     render(
//         <MemoryRouter initialEntries={['/team']}>
//         <Provider store = {configureTool(initialState,globalReducer)}>
//             <AlertProvider template={AlertTemplate} {...options}>
//                 <App/>
//             </AlertProvider>   
//         </Provider>
//       </MemoryRouter>
//     );

//     // Assert
//     expect(screen.getByText("Header")).toBeInTheDocument();
//     expect(screen.getByText("AboutUs")).toBeInTheDocument();
//     expect(screen.getByText("Footer")).toBeInTheDocument();
//   });