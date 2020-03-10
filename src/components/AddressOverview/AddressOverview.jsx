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
        padding: theme.spacing(5),
        marginTop: '32px'
    },
    paper: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        margin: '3% 0 3% 0',
        position: 'relative'
    },
    paperIntern: {
        padding: "15px "+theme.spacing(3)+"px",
        border: '1px solid rgba(0,0,0,0.85)',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        boxSizing: 'border-box',
        wordWrap: 'break-word'
    },
    paperInternActive: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#d6e0eb',
        color: '#fff',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        position: 'relative',
        wordWrap: 'break-word'
    },
    paperInternActiveDarker: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#3c3c3c',
        color: '#fff',
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
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
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
                        <Paper className={classes.paper}>
                            <span className="title__main">Address Overview</span>
                            <div className="status">Status:
                                <div className="status-value">Offline</div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions Overview 2 components */}
                <Grid container spacing={3}>
                    <Grid item xs={8} >
                        <Paper className={classes.paperInternActive}>
                            <span className="detail__title blue">Address <Link className="copy-link blue">Copy</Link></span>
                            <span className="detail__value small-blue">IZAKWFQL2I3N4AWRKZ4A6DTYNKGDCL4SPILCTLDFROWPJAAX5TBFODPA64</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                            <span className="detail__title">Stats</span>
                            {/* <span className="detail__value small"></span> */}
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                            <span className="detail__title">Balance</span>
                            <span className="detail__value"><img className="logoAlgo" src={algoLogo} /> 
                            8,937,464.931354</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                            <span className="detail__title">Rewards</span>
                            <span className="detail__value"><img className="logoAlgo" src={algoLogo}/> 
                            1,131.254.53387 </span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                            <span className="detail__title">Total Transactions</span>
                            <span className="detail__value">3420</span>
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
        ); 
    }
}
export default withStyles(styles)(AddressOverview);
