import React from 'react';
import './TableTransactions.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import algoLogo from '../../assets/images/algo.png';
import txLogo from '../../assets/images/tx.png';

// Data get function
function createData(txid, block, age, amount, from, to, txfee, type) {
    return { txid, block, age, amount, from, to, txfee, type };
}
const rows = [
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer'),
    createData('53843u4Agyiu8879878uig', 511113, '36 secs ago', '3.900', '53843u4Agyiu8879878uig', '53843u4Agyiu8879878uig', '0.001', 'Transfer')
];

class TableTransactions extends React.Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className="table__head">
                        <TableRow>
                            <TableCell align="left" className="row__head">TxID</TableCell>
                            <TableCell align="left" className="row__head">Block</TableCell>
                            <TableCell align="left"className="row__head">Age</TableCell>
                            <TableCell align="left"className="row__head">Amount</TableCell>
                            <TableCell align="left"className="row__head">From</TableCell>
                            <TableCell align="left"className="row__head"></TableCell>
                            <TableCell align="left"className="row__head">To</TableCell>
                            <TableCell align="left"className="row__head">TxFee</TableCell>
                            <TableCell align="left"className="row__head">Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="left" className="font-active"><a href="transaction">{row.txid}</a></TableCell>
                                <TableCell align="left">{row.block}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left" >
                                    {/* <img className="logoAlgo" src={algoLogo} width="25"/>  */}
                                    <span className="value-import">{row.amount}</span></TableCell>
                                <TableCell align="left" className="font-active">
                                    {row.from}
                                </TableCell>
                                <TableCell align="left" className="font-active">
                                    <img className="logoTx" src={txLogo} width="25"/>
                                </TableCell>
                                <TableCell align="left" className="font-active">{row.to}</TableCell>
                                <TableCell align="left">
                                    <img className="logoAlgo" src={algoLogo}/> 
                                    {row.txfee}
                                </TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        ); 
    }
}
export default TableTransactions;


