import React from 'react';
import './LastestBlocks.css';
import Grid from '@material-ui/core/Grid';
import './../../App.css';
import algoLogo from '../../assets/images/algo.png';
export default function BlockItem() {  
        return (
            <div className="list__item">
                <Grid container spacing={1}>
                    <Grid item xs={1.5}>
                        <div className="picture__container">
                            <div className="picture_circular"></div>
                            <span className="time">05 secs ago</span>
                        </div>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">Round: </span>
                        <span className="value">R3483573H8IHUe...</span><br/>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">Proposer: </span>
                        <span className="value">R3483573H8IHUe...</span><br/>
                    </Grid>
                    <Grid item xs={3.5}>
                        <span className="field">Txs: </span>
                        <span className="value"><img className="logoAlgo" src={algoLogo} width="25"/> 8,445,455</span><br/>
                    </Grid>
                </Grid>
            </div>
        ); 
}

