import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Blocks.css';
import TableBlocks from './../General/TableBlocks';
import Filters from './../General/Filters';

const styles = theme => ({
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
});

class Blocks extends React.Component {
    render(){
        const {classes} = this.props;
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
}
export default withStyles(styles)(Blocks);