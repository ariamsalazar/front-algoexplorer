import React from 'react';
import './LastestTransactions.css';
import TransactionItem from './TransactionItem';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative'
    },
    paper: {
        padding: '2px 8px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderRadius: '4px',
        border: 'none',
        position: 'relative'
    }
});
class LastestTransactions extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div className="list__container">
                <div className={classes.root}>
                    <Grid container spacing={0} className="title__container">
                        <Grid item xs={6}>
                            <span className="title-list">Lastest Transactions</span>
                        </Grid>
                        <Grid item xs={6} classaName="align-right">
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
export default withStyles(styles)(LastestTransactions);


