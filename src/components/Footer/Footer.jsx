import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, #324964, #1e2a38)',
        marginTop: '100px'
      },
    paper: {
          padding: theme.spacing(0),
          border: 'none',
          boxShadow: 'none',
          borderRadius: '4px',
          backgroundColor: 'transparent'
    }
});  
  
class Footer extends React.Component {
    render(){
        const { classes } = this.props;
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
                            <span className="copy__footer">© 2020. RandLabs. All Rights Reserved</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className="link__footer">
                                <Link className="link">Contact us </Link>
                                <Link className="link icon">Follow </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}

export default withStyles(styles)(Footer);
