import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './CirculatingSupply.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      padding: '0 16px',
      marginTop: '64px'
    }
});

/*DATA TEST*/
const data = [
    {
        date: 'January', algos: 335.000, pv: 2400, amt: 2400,
    },
    {
        date: 'February', algos: 700.000, pv: 2400, amt: 2400,
    },
    {
        date: 'March', algos: 275.500, pv: 2400, amt: 2400,
    },
    {
        date: 'April', algos: 456.000, pv: 2400, amt: 2400,
    },
    {
        date: 'May', algos: 234.000, pv: 2400, amt: 2400,
    },
    {
      date: 'June', algos: 602.000, pv: 2400, amt: 2400,
    },
    {
      date: 'July', algos: 220.000, pv: 1398, amt: 2210,
    },
    {
      date: 'August', algos: 835.000, pv: 9800, amt: 2290,
    },
    {
      date: 'September', algos: 616.000, pv: 3908, amt: 2000,
    },
    {
      date: 'October', algos: 990.000, pv: 4800, amt: 2181,
    },
    {
        date: 'November', algos: 360.000, pv: 4800, amt: 2181,
    },
    {
        date: 'December', algos: 125.000, pv: 4800, amt: 2181,
    }
];
class CirculatingSupply extends React.Component {
    render(){
        const {classes} = this.props;
        /*Line Chart*/ 
        const renderLineChart = (
            <ResponsiveContainer width="100%" height={400}>
                <LineChart width={500} height="90%" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                    <Line type="monotone" dataKey="algos" dot={false} stroke="#999"  strokeWidth="2"/>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="date" stroke="#bbb" tick={{ fill: '#333' }} padding={{ left: 40, right: 40 }}/>
                    <YAxis stroke="#bbb" tick={{ fill: '#333' }} />
                    <Tooltip />
                    <Legend stroke="red" strokeWidth="5"/>
                </LineChart>
            </ResponsiveContainer>
        );
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Circulating, Tradeable and Participating Supply</span>
                        </Paper>
                    </Grid>
                    {/* Transactions List */}
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <div className="filter__main">
                                <span className="name-filter">From</span><input className="input-filter" placeholder="Jun 01, 2020"></input>
                                <span className="name-filter">To</span><input className="input-filter" placeholder="Jun 01, 2020"></input>
                            </div>
                            <div className="filters__container">
                                    <Link className="filter-c">1H</Link>
                                    <Link className="filter-c">2D</Link>
                                    <Link className="filter-c">3D</Link>
                                    <Link className="filter-c">1W</Link>
                                    <Link className="filter-c">3M</Link>
                                    <Link className="filter-c">6M</Link>
                                    <Link className="filter-c">1Y</Link>
                                    <Link className="filter-c">All</Link>
                            </div>
                            <div className="chart__container auto">
                                {renderLineChart}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default withStyles(styles)(CirculatingSupply);