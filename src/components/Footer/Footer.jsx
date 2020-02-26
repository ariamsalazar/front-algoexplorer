import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      backgroundColor: '#a2a2a2',
      marginTop: '100px'
    },
    paper: {
        padding: theme.spacing(0),
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        backgroundColor: 'transparent'
    }
}));
  
export default function Footer() {  
        const classes = useStyles();
        return (
            <div className={classes.root}>
                 <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className="logo__footer"><Link className="icon-moon"></Link></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <span className="copy__footer">© 2020. <span className="dark-font">RandLabs.</span>. All Rights are Reserved</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className="link__footer">
                                <Link className="link">Contact us </Link>
                                <Link className="link icon">Follow us </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
}

