import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Transactions from './components/Transactions/Transactions';

import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
    
  render()
  {  
    return (
      <div className="app">
        {/* Header */}
        <Header />
        {/* Switch */}
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/transactions">
              <Transactions />
            </Route>
        </Switch>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;

