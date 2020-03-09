import React from 'react';
import './LastestTransactions.css';
import TransactionItem from './TransactionItem';
import Button from '@material-ui/core/Button';

class LastestTransactions extends React.Component {
    render(){
        return (
            <div className="list__container">
                <div className="title__container">
                    <span className="title-list">Lastest Transactions</span>
                    <Button className="btn__more">View all Transactions</Button>
                </div>
                <div className="list__scroll">
                    <TransactionItem iconColor="azul"/>
                    <TransactionItem iconColor="red"/>
                    <TransactionItem iconColor="azul"/>
                    <TransactionItem iconColor="red"/>
                    <TransactionItem iconColor="blue"/>
                    <TransactionItem iconColor="red"/>
                </div>
            </div>
        ); 
    }
}
export default LastestTransactions;

