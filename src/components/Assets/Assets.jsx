import React from 'react';
import './Assets.css';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Tab, Tabs } from 'react-bootstrap';
import Filters from './../General/Filters';
import TableTransactions from './../General/TableTransactions';

const styles = theme => ({

    root: {
      flexGrow: 1,
      position: 'relative',
      padding: theme.spacing(5)
    },
    paper: {
        padding: 0,
        boxShadow: 'none',
        borderRadius: '4px',
        margin: '2% 0 2% 0'
    },
    paperFull: {
        padding: "15px 0",
        boxShadow: 'none',
        borderRadius: '0px',
        margin: '2% 0 2% 0',
        borderTop: '1px solid #000'
    },
    paperMini: {
        padding: "15px "+theme.spacing(3)+"px",
        boxShadow: 'none',
        borderRadius: '4px',
        border: '1px solid #c3c3c3',
    },
    paperList: {
        padding: 0,
        border: 'none',
        borderRadius: '4px',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
    }
});

class Assets extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div>
                {/* Title Asset */}
                <div className="title__asset">
                    <span className="title__main">Assets</span>
                </div>
                <div className={classes.root}>
                    {/* Component Asset Tab */}
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                                    {/* General Tab */}
                                    <Tab eventKey="general" title="General" className="container__tab">
                                        <Grid container justify="center"  spacing={3}>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Circulating Supply</span>
                                                    <span className="detail__value">0</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Total Supply</span>
                                                    <span className="detail__value">18,446,744.07371</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Unit name</span>
                                                    <span className="detail__value">USDt</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">ID</span>
                                                    <span className="detail__value">345345</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Reserve Address</span>
                                                    <span className="detail__value">XIU7HGGAJ3QOTATP….</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Creator Address</span>
                                                    <span className="detail__value">XIU7HGGAJ3QOTATP….</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Opt-In Required</span>
                                                    <span className="detail__value">Yes (Frozen/Not Frozen)</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Number of Transfers</span>
                                                    <span className="detail__value">344454</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Paper className={classes.paperFull}>
                                                    <div className="title__main">Description
                                                        <span className="mini-title">Tether USDt</span>
                                                    </div>
                                                    <div className="content__general">
                                                        Tether is a token backed by actual assets, including USD and Euros. One Tether equals one underlying unit of the currency backing it, e.g., the U.S. Dollar, and is backed 100% by actual assets in the Tether platform’s reserve account. Being anchored or “tethered” to real world currency, Tether provides protection from the volatility of cryptocurrencies.<br/><br/>

                                                        Tether enables businesses – including exchanges, wallets, payment processors, financial services and ATMs – to easily use fiat-backed tokens on blockchains. By leveraging Blockchain technology, Tether allows you to store, send and receive digital tokens person-to-person, globally, instantly, and securely for a fraction of the cost of alternatives.<br/><br/>

                                                        Tether’s platform is built to be fully transparent at all times.<br/>
                                                    </div>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Tab>
                                    {/* General Tecnichal Information */}
                                    <Tab eventKey="information" title="Tecnichal Information" className="container__tab">
                                    <Grid container justify="center"  spacing={3}>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Manager Address</span>
                                                    <span className="detail__value">0</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Freeze Address</span>
                                                    <span className="detail__value">18,446,744.07371</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Metadata Field</span>
                                                    <span className="detail__value">USDt</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    <span className="detail__title">Date of creation</span>
                                                    <span className="detail__value">2019-12-12</span>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Paper className={classes.paperFull}>
                                                    <div className="title__main">Description
                                                        <span className="mini-title">Tether USDt</span>
                                                    </div>
                                                    <div className="content__general">
                                                        Tether is a token backed by actual assets, including USD and Euros. One Tether equals one underlying unit of the currency backing it, e.g., the U.S. Dollar, and is backed 100% by actual assets in the Tether platform’s reserve account. Being anchored or “tethered” to real world currency, Tether provides protection from the volatility of cryptocurrencies.<br/><br/>

                                                        Tether enables businesses – including exchanges, wallets, payment processors, financial services and ATMs – to easily use fiat-backed tokens on blockchains. By leveraging Blockchain technology, Tether allows you to store, send and receive digital tokens person-to-person, globally, instantly, and securely for a fraction of the cost of alternatives.<br/><br/>

                                                        Tether’s platform is built to be fully transparent at all times.<br/>
                                                    </div>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Tab>
                                </Tabs>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* Transactions List */}
                    <Grid container>
                        {/* Component Title */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <span className="title__main">Transactions</span>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paperList}>
                                <Filters/>
                                <TableTransactions/>
                                <Filters/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        ); 
    }
}
export default withStyles(styles)(Assets);
