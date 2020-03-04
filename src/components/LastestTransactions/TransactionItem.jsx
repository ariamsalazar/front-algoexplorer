import React from 'react';
import './LastestTransactions.css';
import Grid from '@material-ui/core/Grid';
import './../../App.css';
import algoLogo from '../../assets/images/algo.png';

class TransactionItem extends React.Component {
    render(){
        return (
            <div className="list__item">
                <Grid container spacing={1}>
                    <Grid item xs={1.5}>
                        <div className="picture__container">
                            <div className="picture"></div>
                            <span className="time">05 secs ago</span>
                        </div>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">TxID: </span>
                        <span className="value">R3483573H8IHUe...</span><br/>
                        <span className="field">Type: </span>
                        <span className="value">Transfer</span>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">From: </span>
                        <span className="value">R3483573H8IHUe...</span><br/>
                        <span className="field">To: </span>
                        <span className="value">R3483573H8IHUe...</span>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">Amount: </span>
                        <span className="value"><img className="logoAlgo" src={algoLogo} width="25"/> 8,445,455</span><br/>
                        <span className="field">Fee: </span>
                        <span className="value"><img className="logoAlgo" src={algoLogo} width="25"/> 000.2</span>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default TransactionItem;

