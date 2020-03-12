import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import './TransactionOverview.css';
import algoLogo from '../../assets/images/algo.png';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      padding: theme.spacing(5),
      marginTop: '32px'
    },
    paper: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        margin: '2% 0 2% 0'
    },
    paperIntern: {
        padding: "15px "+theme.spacing(3)+"px",
        border: '1px solid rgba(0,0,0,0.85)',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        wordWrap: 'break-word'
    },
    paperInternActiveDarker: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#042753',
        color: '#fff',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        position: 'relative',
        wordWrap: 'break-word'
    },
    paperInternActive: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#d6e0eb',
        color: '#042753',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        position: 'relative',
        wordWrap: 'break-word'
    },
    paperInternWhite: {
        padding: "10px "+theme.spacing(3)+"px",
        borderRadius: '4px',
        backgroundColor: '#fff',
        color: '#000',
        boxSizing: 'border-box',
        border: '1px solid #000'
    },
    paperInternWhiteShadow: {
        padding: "10px "+theme.spacing(3)+"px",
        borderRadius: '4px',
        backgroundColor: '#fff',
        color: '#000',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    },
});

class TransactionOverview extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <span className="title__main">Transaction Overview</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions Overview 2 components */}
                <Grid container spacing={3}>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternActive}>
                            <div>
                                <span className="detail__title blue">Transaction ID <Link className="copy-link blue">Copy</Link></span>
                                <span className="detail__value small-blue">IZAKWFQL2I3N4AWRKZ4A6DTYNKGDCL4SPILCTLDFROWPJAAX5TBFODPA64</span>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperIntern}>
                            <span className="detail__title">Timestamp </span>
                            <span className="detail__value small-blue">Friday, Feb 21 , 2020 00:40:25 GMT-0500 (Colombia Standard Time) </span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternActiveDarker}>
                            <span className="detail__title green">Sender <Link className="copy-link">Copy</Link></span>
                            <span className="detail__value small-white">IZAKWFQL2I3N4AWRKZ4A6DTYNKGDCL4SPILCTLDFROWPJAAX5TBFODPA64</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternActiveDarker}>
                            <span className="detail__title green">Receiver <Link className="copy-link">Copy</Link></span>
                            <span className="detail__value small-white">IZAKWFQL2I3N4AWRKZ4A6DTYNKGDCL4SPILCTLDFROWPJAAX5TBFODPA64</span>
                        </Paper>
                    </Grid>
                    {/* Transactions Overview 4 components */}
                    <Grid item xs={3} >
                        <Paper className={classes.paperInternWhite}>
                            <span className="detail__title">Amount</span>
                            <span className="detail__value small center">
                                <img className="logoAlgo" src={algoLogo} />
                                654.333</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.paperInternWhite}>
                            <span className="detail__title">Fee</span>
                            <span className="detail__value small center">
                                <img className="logoAlgo" src={algoLogo} />
                                0.001</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.paperInternWhite}>
                            <span className="detail__title">Type</span>
                            <span className="detail__value small">Tranfer</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.paperInternWhite}>
                            <span className="detail__title">Status</span>
                            <span className="detail__value small green" style={{color: '#59d8a1'}}>Completed</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <span className="title__main">Transaction Details</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions Details */}
                <Grid container spacing={8}>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">Block</span>
                            <span className="detail__value small">511178</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">Sender Balance</span>
                            <span className="detail__value small">
                                <img className="logoAlgo" src={algoLogo}/>
                                200.195</span>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">First Round</span>
                            <span className="detail__value small">511178</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">Receiver Balance</span>
                            <span className="detail__value small">
                                <img className="logoAlgo" src={algoLogo} />
                                20.195.234,00</span>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">Last Round</span>
                            <span className="detail__value small">511178</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paperInternWhiteShadow}>
                            <span className="detail__title gray-small">Receiver Rewards</span>
                            <span className="detail__value small">
                                <img className="logoAlgo" src={algoLogo} />
                                20</span>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={12} >
                        <Paper className={classes.paperInternWhiteShadow} style={{height:'30vh'}}>
                            <span className="detail__title gray-small">Note
                                <div className="option__container">
                                    <Link className="option-link active">Base 64</Link>
                                    <Link className="option-link">Editor View</Link>
                                    <Link className="option-link">Editor View</Link>
                                </div>
                            </span>
                            LEqwXOWBVHM=
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default withStyles(styles)(TransactionOverview);