import React from 'react';
import './Contact.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Tab, Tabs } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px',
      padding: 0,
    },
    paper: {
        padding: 0,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: 'pink'
    }
}));
  
export default function Contact() {  
        const classes = useStyles();
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <div className="title__big">
                            Contact Us
                        </div>
                    </Grid>
                </Grid>
                <Grid container className="form__contact" spacing={6}  justify="center">
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            A
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            A
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                           A
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            A
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
}

