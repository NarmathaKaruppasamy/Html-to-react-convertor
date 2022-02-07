import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
// import Result from './components/Result';
import InputCode from './container/InputCode';
// import OutputCode from './components/OutputCode';
//import Status from './components/Status';
// import Home from './components/Home';
import Footer from './components/Footer';
// import Table from './components/Table';
import NoUpload from './components/NoUpload';

// import FinalOutput from './components/FinalOutput';
import AboutUs from './components/AboutUs';
import ComponentList from './components/ComponentList';
import ConvertorService from './components/ConvertorService';
function App() {

  return (
    <Router>
        <Header/>
    <Switch>
    <Route exact path='/' component={InputCode.InputCodeComponent} />
    <Route exact path='/status'  component={InputCode.Status} /> 
    <Route exact path='/result' component={InputCode.Result} />
    <Route exact path='/getcomponent' component={InputCode.FinalOutput} />
    {/* <Route exact path='/getComponent' component={FinalOutput} /> */}
    <Route exact path='/componentlist' component={ComponentList}/>
    <Route exact path='/service' component={ConvertorService}/>
    <Route exact path='/error' component={NoUpload} />
    <Route exact path='/team' component={AboutUs} />
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
