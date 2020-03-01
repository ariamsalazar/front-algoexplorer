import React from 'react';
import './Assets.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Tab, Tabs } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      padding: theme.spacing(5)
    },
    paper: {
        padding: 0,
        boxShadow: 'none',
        borderRadius: '4px',
        margin: '2% 0 2% 0'
    },
    paperMini: {
        padding: 0,
        boxShadow: 'none',
        borderRadius: '4px',
        border: '1px solid #c3c3c3',
    },
    paperList: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: 'green'
    }
}));
  
export default function Assets() {  
        const classes = useStyles();
        return (
            <div>
                {/* Title Asset */}
                <div className="title__asset">
                    Asset
                </div>
                <div className={classes.root}>
                    {/* Component Asset Tab */}
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                                    {/* General Tab */}
                                    <Tab eventKey="general" title="General" className="container__tab">
                                        <Grid container justify="center"  spacing={3}>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Paper className={classes.paperMini}>
                                                    Description
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Tab>
                                    {/* General Tecnichal Information */}
                                    <Tab eventKey="information" title="Tecnichal Information" className="container__tab">
                                    <Grid container justify="center"  spacing={3}>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paperMini}>
                                                    A
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Paper className={classes.paperMini}>
                                                    Description
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Tab>
                                </Tabs>
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
            </div>
        ); 
}

