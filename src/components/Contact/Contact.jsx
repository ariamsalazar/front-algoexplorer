import React from 'react';
import './Contact.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      marginTop: '64px'
    },
    paper: {
        padding: theme.spacing(5),
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px'
    }
}));
  
export default function Contact() {  
        const classes = useStyles();
        return (
            <div className={classes.root}>
               Contact
            </div>
        ); 
}

