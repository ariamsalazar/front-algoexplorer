import React from 'react';
import './LastestTransactions.css';
import Grid from '@material-ui/core/Grid';
import './../../App.css';
import algoLogo from '../../assets/images/algo.png';
import algoLogoWhite from '../../assets/images/algo-white.png';

class TransactionItem extends React.Component {
    render(){
        return (
            <div className="list__item">
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <div className="picture__container">
                            <div className={ "picture " + ( this.props.iconColor || "") }></div>
                            <span className="time">05 secs ago</span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <span className="field">TxID: </span>
                        <a className="value blue" href="/">R3483573H8IHUe...</a><br/>
                        <span className="field">Type: </span>
                        <span className="value black">Transfer</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span className="field">From: </span>
                        <span className="value">R3483573H8IHUe...</span><br/>
                        <span className="field">To: </span>
                        <span className="value">R3483573H8IHUe...</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span className="field">Amount: </span>
                        <span className="value import"><img className="logoAlgo white" src={algoLogoWhite} width="10"/> 8,445,455</span><br/>
                        <span className="field">Fee: </span>
                        <span className="value black"><img className="logoAlgo" src={algoLogo}/> 000.2</span>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default TransactionItem;

