import React from 'react';
import './Overview.css';
import { withStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ReactSpeedometer from "react-d3-speedometer";
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
        border: ' 1px solid #e0dfdf',
        position:'relative'
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
  
class OverviewSecond extends React.Component {  
    render(){
        const {classes} = this.props;

        /*Line Chart*/ 
        const renderLineChart = (
            <ResponsiveContainer width="100%" height={120}>
                <LineChart width={500} height="90%" data={data} margin={{ top: 10, right: 15, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" dot={false} stroke="#324964"  strokeWidth="2"/>
                    <CartesianGrid stroke={false} strokeDasharray="5 5" />
                    <XAxis dataKey="date" stroke="transparent" tick={{ fill: '#676767' }} padding={{ left: 40, right: 40 }}/>
                    <YAxis stroke="transparent" tick={{ fill: '#676767' }} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
        const renderSpeedChart = (
            <ResponsiveContainer width="100%" height={120}>
                <ReactSpeedometer
                    maxSegmentLabels={0}
                    segments={30}
                    maxValue={10}
                    minValue={0}
                    value={2.5}
                    startColor="#999"
                    endColor="#999"
                    needleColor="#333"
                    width={600} 
                    height={120}
                    needleHeightRatio={0.6}
                    needleTransitionDuration={4000} 
                    needleTransition="easeElastic"
                    currentValueText="${value} Sec"
                    valueTextFontSize="20px"
                    textColor="#000"
                    ringWidth={15}
                />
            </ResponsiveContainer>
        );
        return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <span className="box-title with-icon">Block transaction speed</span>
                            <div className="chart__container">
                                {renderSpeedChart}
                            </div>
                        </Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <span className="box-title side">Algo Daily transactions: <span className="t-blue">24535</span></span>
                            <Link className="link__open">Open Chart</Link>
                            <div className="filters__container">
                                <Link className="filter-c">1H</Link>
                                <Link className="filter-c">2D</Link>
                                <Link className="filter-c active">3D</Link>
                                <Link className="filter-c">1W</Link>
                                <Link className="filter-c">3M</Link>
                                <Link className="filter-c">6M</Link>
                                <Link className="filter-c">1Y</Link>
                                <Link className="filter-c">All</Link>
                            </div>
                            <div className="chart__container">
                                {renderLineChart}
                            </div>
                        </Paper>
                    </Grid> 
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <span className="box-title with-icon">Stacking Rewards Calculator</span>
                            <div className="chart__container">
                                C
                            </div>
                        </Paper>
                    </Grid> 
                </Grid>
            </div>
        ); 
    }
}
export default withStyles(styles)(OverviewSecond);
