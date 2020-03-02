import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import './BlockOverview.css';
import algoLogo from '../../assets/images/algo.png';
import Filters from './../Transactions/Filters';
import TableTransactions from './../Transactions/TableTransactions';
const useStyles = makeStyles(theme => ({
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
    paperInternActive: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#838181',
        color: '#fff',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        position: 'relative',
        wordWrap: 'break-word'
    },
    paperInternWhite: {
        padding: "15px "+theme.spacing(3)+"px",
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#fff',
        color: '#fff',
        boxSizing: 'border-box',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        wordWrap: 'break-word'
    },
    paperList: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
    }
}));
export default function BlockOverview() {  
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Component Title */}
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <span className="title__main">Block Overview</span>
                    </Paper>
                </Grid>
            </Grid>
            {/* Block Details Overview 2 components*/}
            <Grid container spacing={3}>
                <Grid item xs={4} >
                    <Paper className={classes.paperIntern}>
                        <span className="detail__title">Round</span>
                        <span className="detail__value">#511188</span>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paperIntern}>
                        <span className="detail__title">Rewards</span>
                        <span className="detail__value"><img className="logoAlgo" src={algoLogo} width="36"/> 25</span>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paperIntern}>
                        <span className="detail__title">Total Transactions</span>
                        <span className="detail__value">26</span>
                    </Paper>
                </Grid>
                {/* Component Title */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <span className="title__main">Block Details</span>
                    </Paper>
                </Grid>
                {/* Block Details Overview 2 components*/}
                <Grid item xs={6} >
                    <Paper className={classes.paperInternActive}>
                        <span className="detail__title white">Proposer <Link className="copy-link">Copy</Link></span>
                        <span className="detail__value small-white">CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4</span>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paperInternWhite}>
                        <span className="detail__title gray">Created at:</span>
                        <span className="detail__value small">Thu Feb 27 2020 12:06:56 GMT-0500 (Colombia Standard Time)</span>
                    </Paper>
                </Grid>
                {/* Block Details Overview 2 components */}
                <Grid item xs={6} >
                    <Paper className={classes.paperInternWhite}>
                        <span className="detail__title gray">Block Hash:</span>
                        <span className="detail__value small">IM72I4LZFCKSQG4UVUPKKFGP6SJS6N4ANLCXONP5HVNMKBYMJHEA</span>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paperInternWhite}>
                        <span className="detail__title gray">Previous Block Hash:</span>
                        <span className="detail__value small">DCSXZKLU4AKWIAVJMCRTBPFL5YUMAA7QWJ7DEBGHSYG5X73VGXHA</span>
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
                        <Filters />
                        <TableTransactions/>
                        <Filters />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ); 
}