import React from 'react';
import './Home.css';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Overeview from './../Overview/Overview';
import LastestTransactions from './../LastestTransactions/LastestTransactions';
import LastestBlocks from './../LastestBlocks/LastestBlocks';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
    },
    paperMiddleLeft: {
        padding: '40px 20px 40px 40px',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px'
    },
    paperMiddleRight: {
        padding: '40px 40px 40px 20px',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px'
    }
});
  
class Home extends React.Component {
    render(){
        const {classes} = this.props;
        return (
           
                <div className={classes.root}>
                    {/* Overview component */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <span className="title__main">Overview</span>
                                <Button className="float__btn">Stats</Button>
                                <Overeview />
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* Lastest Blocks / Transactions component */}
                
            
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Paper className={classes.paperMiddleLeft}>
                                <LastestTransactions/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paperMiddleRight}>
                                <LastestBlocks/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                
            
        ); 
    }
}
export default withStyles(styles)(Home);
