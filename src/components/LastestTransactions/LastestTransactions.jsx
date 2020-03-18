import React from 'react';
import './LastestTransactions.css';
import TransactionItem from './TransactionItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class LastestTransactions extends React.Component {
    render(){
        return (
            <div className="list__container">
                <div className="root">
                    <Grid container spacing={0} className="title__container">
                        <Grid item md={6}>
                            <span className="title-list">Lastest Transactions</span>
                        </Grid>
                        <Grid item md={6} classaName="align-right">
                            <Button className="btn__more av">View all transaction</Button>
                        </Grid>
                    </Grid>
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


