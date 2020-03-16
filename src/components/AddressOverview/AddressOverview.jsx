import React from 'react';
import './AddressOverview.css';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import algoLogo from '../../assets/images/algo.png';
import Filters from './../General/Filters';
import TableTransactions from './../General/TableTransactions';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        padding: '0 16px',
        marginTop: '64px'
    }
}); 

class AddressOverview extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Address Overview</span>
                            <div className="status av">Status:
                                <div className="status-value">Offline</div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions Overview 2 components */}
                <Grid container spacing={3}>
                    <Grid item xs={8} >
                        <Paper className="paper light">
                            <span className="detail__title blue">Address <Link className="copy-link blue">Copy</Link></span>
                            <span className="detail__value small-blue">IZAKWFQL2I3N4AWRKZ4A6DTYNKGDCL4SPILCTLDFROWPJAAX5TBFODPA64</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Stats</span>
                            {/* <span className="detail__value small"></span> */}
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Balance</span>
                            <span className="detail__value"><img className="logoAlgo" src={algoLogo} /> 
                            8,937,464.931354</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Rewards</span>
                            <span className="detail__value"><img className="logoAlgo" src={algoLogo}/> 
                            1,131.254.53387 </span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Total Transactions</span>
                            <span className="detail__value">3420</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions List */}
                <Grid container>
                    {/* Component Title */}
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Transactions</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Filters/>
                            <TableTransactions/>
                            <Filters/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default withStyles(styles)(AddressOverview);
