import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './TableBlocks.css';


// Data get function
function createData(block, proposer, transactions, age, block_reward) {
    return { block, proposer, transactions, age, block_reward };
}
const rows = [
    createData(511113, 'CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4', 0, '5 secs ago', '3,900.99'),
    createData(511113, 'CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4', 0, '5 secs ago', '3,900.99'),createData(511113, 'CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4', 0, '5 secs ago', '3,900.99'),
    createData(511113, 'CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4', 0, '5 secs ago', '3,900.99'),
    createData(511113, 'CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4', 0, '5 secs ago', '3,900.99')
];
class TableBlocks extends React.Component {
    render(){
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className="table__head">
                        <TableRow>
                            <TableCell align="left" className="row__head">Block</TableCell>
                            <TableCell align="left" className="row__head">Proposer</TableCell>
                            <TableCell align="left"className="row__head">Transactions</TableCell>
                            <TableCell align="left"className="row__head">Age</TableCell>
                            <TableCell align="left"className="row__head">Block Reward</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="left">{row.block}</TableCell>
                                <TableCell align="left" className="font-active">{row.proposer}</TableCell>
                                <TableCell align="left">{row.transactions}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">
                                    {row.block_reward}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        ); 
    }
}
export default TableBlocks;
