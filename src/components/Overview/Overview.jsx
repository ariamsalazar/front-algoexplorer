import React from 'react';
import './Overview.css';
import { withStyles } from "@material-ui/core/styles";
import algoLogo from '../../assets/images/algo.png';
import RangeDate from '../General/RangeDate';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
      borderRadius: '4px',
    },
    paper: {
        padding: '0px 8px',
        backgroundColor: '#f7f7f7',
        borderRadius: '4px',
        border: 'none'
    }
});

/*DATA TEST*/
const data = [
    {
      date: 'Dec 10', uv: 250.000, pv: 2400, amt: 2400,
    },
    {
      date: 'Jan 8', uv: 220.000, pv: 1398, amt: 2210,
    },
    {
      date: 'Jan 15', uv: 835.000, pv: 9800, amt: 2290,
    },
    {
      date: 'Feb  15', uv: 616.000, pv: 3908, amt: 2000,
    },
    {
      date: 'Feb 30', uv: 990.000, pv: 4800, amt: 2181,
    }
];
  
class Overview extends React.Component {  
    render(){
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.root}>
                    {/* First component */}
                    <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title">Algo</span>
                                    <div className="box-value">$ 0.76 <span className="rating-value">0.7 %</span></div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title with-icon">Circulating</span>
                                    <div className="box-value"> <img className="logoAlgo" src={algoLogo} /> 605,978,371 </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title with-icon">Tradable</span>
                                    <div className="box-value"><img className="logoAlgo" src={algoLogo}/> 2,605,978,371 </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title with-icon">Online Stake</span>
                                    <div className="box-value "><img className="logoAlgo" src={algoLogo}/> 1,622,972,252 </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title">Lastest Blocks</span>
                                    <div className="box-value">233533</div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper className={classes.paper}>
                                    <span className="box-title">Title </span>
                                    <div className="box-value">00000</div>
                                </Paper>
                            </Grid>
                        </Grid>
                </div>
            </div>
        ); 
    }
}
export default withStyles(styles)(Overview);
