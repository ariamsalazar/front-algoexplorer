import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Transactions from './components/Transactions/Transactions';
import Blocks from './components/Blocks/Blocks';
import TransactionOverview from './components/TransactionOverview/TransactionOverview';
import BlockOverview from './components/BlockOverview/BlockOverview';
import AddressOverview from './components/AddressOverview/AddressOverview';
import Assets from './components/Assets/Assets';
import BalanceHistory from './components/BalanceHistory/BalanceHistory';
import CirculatingSupply from './components/CirculatingSupply/CirculatingSupply';
import Contact from './components/Contact/Contact';
import Calculator from './components/RewardCalculator/RewardCalculator';

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
          <div className="master__container">
              <Route exact path="/">
                <div className="master">
                  <Home />
                </div>
              </Route>
              <Route path="/transactions">
                <div className="master">
                  <Transactions />
                </div>
              </Route>
              <Route path="/blocks">
                <div className="master">
                  <Blocks />
                </div>
              </Route>
              <Route path="/transactionOverview">
                <div className="master">
                  <TransactionOverview />
                </div>
              </Route>
              <Route path="/blockOverview">
                <div className="master">
                  <BlockOverview />
                </div>
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/addressOverview">
                <div className="master">
                 <AddressOverview />
                </div>
              </Route>
              <Route path="/assets">
                <Assets />
              </Route>
              <Route path="/balanceHistory">
                <div className="master">
                  <BalanceHistory />
                </div>
              </Route>
              <Route path="/circulatingSupply">
                <div className="master">
                  <CirculatingSupply />
                </div>
              </Route>
              <Route path="/calculator">
                 <Calculator />
              </Route>
          </div>
        </Switch>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;

