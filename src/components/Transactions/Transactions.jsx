import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Transactions.css';
import algoLogo from '../../assets/images/algo.png';
import txLogo from '../../assets/images/tx.png';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px',
      padding: theme.spacing(5),
    },
    paper: {
        padding: '0px',
        border: 'none',
        boxShadow: 'none'
    },
    paperIntern: {
        padding: "0px",
        border: 'none',
        margin: '2% 0', 
        backgroundColor: 'red',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
    },
    table: {
        minWidth: 650,
    }
}));
// Data get function
function createData(txid, block, age, amount, from, to, txfee, type) {
    return { txid, block, age, amount, from, to, txfee, type };
}
const rows = [
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
];
export default function Transactions() {  
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Component Title */}
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <span className="title__main">Transactions</span>
                    </Paper>
                </Grid>
                {/* Transactions List */}
                <Grid item xs={12}>
                    <Paper className={classes.paperIntern}>
                        <div className="header__list">
                            Time period: 
                        </div>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead className="table__head">
                                    <TableRow>
                                        <TableCell align="left" className="row__head">TxID</TableCell>
                                        <TableCell align="left" className="row__head">Block</TableCell>
                                        <TableCell align="left"className="row__head">Age</TableCell>
                                        <TableCell align="left"className="row__head">Amount</TableCell>
                                        <TableCell align="left"className="row__head">From</TableCell>
                                        <TableCell align="left"className="row__head">.</TableCell>
                                        <TableCell align="left"className="row__head">To</TableCell>
                                        <TableCell align="left"className="row__head">TxFee</TableCell>
                                        <TableCell align="left"className="row__head">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            {/* <TableCell component="th" scope="row">
                                                {row.tx}
                                            </TableCell> */}
                                            <TableCell align="left" className="font-active">{row.txid}</TableCell>
                                            <TableCell align="left">{row.block}</TableCell>
                                            <TableCell align="left">{row.age}</TableCell>
                                            <TableCell align="left">
                                                <img className="logoAlgo" src={algoLogo} width="25"/> 
                                                {row.amount}</TableCell>
                                            <TableCell align="left" className="font-active">
                                                {row.from}
                                            </TableCell>
                                            <TableCell align="left" className="font-active">
                                                <img className="logoTx" src={txLogo} width="25"/>
                                            </TableCell>
                                            <TableCell align="left" className="font-active">{row.to}</TableCell>
                                            <TableCell align="left">
                                                <img className="logoAlgo" src={algoLogo} width="25"/> 
                                                {row.txfee}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ); 
}