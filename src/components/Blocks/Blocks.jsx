import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Blocks.css';
import TableBlocks from './TableBlocks';
import Filters from './Filters';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px',
      padding: theme.spacing(5),
      borderRadius: '4px'
    },
    paper: {
        padding: '0px',
        border: 'none',
        boxShadow: 'none',
    },
    paperIntern: {
        padding: "0px",
        border: 'none',
        margin: '2% 0', 
        backgroundColor: 'transparent',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
    },
    table: {
        minWidth: 650,
    }
}));
// Data get function
function createData(block, proposer, transactions, age, block_reward) {
    return { block, proposer, transactions, age, block_reward };
}
const rows = [
    createData(511113, '3456SIDSDYSSDJKSSF87382234234387KIU', 0, '5 secs ago', '3,900.99')
];
export default function Transactions() {  
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Component Title */}
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <span className="title__main">Blocks</span>
                    </Paper>
                </Grid>
                {/* Blocks List */}
                <Grid item xs={12}>
                    <Paper className={classes.paperIntern}>
                        <Filters/>
                        {/* Blocks Table */}
                        <TableBlocks />
                        <Filters/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ); 
}