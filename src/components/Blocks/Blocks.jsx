import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Blocks.css';
import TableBlocks from './../General/TableBlocks';
import Filters from './../General/Filters';

class Blocks extends React.Component {
    render(){
        return (
            <div className="root intern">
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Blocks</span>
                        </Paper>
                    </Grid>
                    {/* Blocks List */}
                    <Grid item xs={12}>
                        <Paper className="paper intern-with-shadow">
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
}
export default Blocks;
