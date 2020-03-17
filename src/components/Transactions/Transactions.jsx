import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableTransactions from  './../General/TableTransactions';
import Filters from  './../General/Filters';

class Transactions extends React.Component { 
    render(){
        return (
            <div className="root intern">
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Transactions</span>
                        </Paper>
                    </Grid>
                    {/* Transactions List */}
                    <Grid item xs={12}>
                        <Paper className="paper intern-with-shadow">
                            <Filters/>
                            {/* Transactions Table */}
                            <TableTransactions />
                            <Filters/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default Transactions;
