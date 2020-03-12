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
            <Route path="/blocks">
              <Blocks />
            </Route>
            <Route path="/transactionOverview">
              <TransactionOverview />
            </Route>
            <Route path="/blockOverview">
              <BlockOverview />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/addressOverview">
              <AddressOverview />
            </Route>
            <Route path="/assets">
              <Assets />
            </Route>
            <Route path="/balanceHistory">
              <BalanceHistory />
            </Route>
            <Route path="/circulatingSupply">
              <CirculatingSupply />
            </Route>
        </Switch>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;

