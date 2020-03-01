import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Blocks.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px',
      padding: theme.spacing(5),
    },
    paper: {
        padding:0,
        border: 'none',
        boxShadow: 'none'
    },
    paperIntern: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        margin: '2% 0'
    }
}));
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
                <Grid item xs={12}>
                    <Paper className={classes.paperIntern}>
                        List of blocks
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ); 
}