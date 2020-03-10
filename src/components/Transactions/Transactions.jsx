import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableTransactions from  './../General/TableTransactions';
import Filters from  './../General/Filters';
import { withStyles } from "@material-ui/core/styles";

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
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        borderRadius: '4px'
    }
});

class Transactions extends React.Component { 
    render(){
        const {classes} = this.props;
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
export default withStyles(styles)(Transactions);
