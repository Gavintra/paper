import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Document_In from './components/pages/Document_In/Document_In';
import Document_Out from './components/pages/Document_Out/Document_Out';
import SignUp from './components/pages/SignUp/SignUp';
import SignIn from './components/pages/SignIn/SignIn';
import AllPaperIn from './components/pages/AllPaperIn/AllPaperIn';
import AllPaperOut from './components/pages/AllPaperOut/AllPaperOut';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/all-paper-in' exact component={AllPaperIn}/>
        <Route path='/all-paper-out' exact component={AllPaperOut}/>
        <Route path='/document_in' exact component={Document_In}/>
        <Route path='/document_out' exact component={Document_Out}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
