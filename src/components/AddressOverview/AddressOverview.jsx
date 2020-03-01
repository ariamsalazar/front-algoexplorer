import React from 'react';
import './AddressOverview.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        backgroundColor:'blue',
        margin: '2% 0 2% 0'
    },
    paperIntern: {
        padding: "30px "+theme.spacing(3)+"px",
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: 'yellow',
        boxSizing: 'border-box'
    },
    paperList: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: 'green'
    }
}));
  
export default function AddressOverview() {  
        const classes = useStyles();
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <span className="title__main">Address Overview</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions Overview 2 components */}
                <Grid container spacing={3}>
                    <Grid item xs={8} >
                        <Paper className={classes.paperIntern}>
                            A
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                        A
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                            A
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                        A
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paperIntern}>
                        A
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
                            List of transactions
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
}

