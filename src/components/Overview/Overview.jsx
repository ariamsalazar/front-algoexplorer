import React from 'react';
import './Overview.css';
import algoLogo from '../../assets/images/algo.png';
import infoIcon from '../../assets/images/info-icon.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ReactSpeedometer from "react-d3-speedometer";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
        /*Line Chart*/ 
        const renderLineChart = (
            <ResponsiveContainer width="99%" height={130}>
                <LineChart data={data} margin={{ top: 25, right: 0, bottom: 0, left: 0 }}>
                    <Line type="monotone" dataKey="uv" dot={false} stroke="#324964"  strokeWidth="2"/>
                    <CartesianGrid stroke={false} strokeDasharray="5 5" />
                    <XAxis dataKey="date" stroke="transparent" tick={{ fill: '#676767' }} padding={{ left: 40, right: 40 }}/>
                    <YAxis stroke="transparent" tick={{ fill: '#676767' }} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
        const renderSpeedChart = (
            <ResponsiveContainer width="72%" height={135} className="top-c">
                <ReactSpeedometer
                    maxSegmentLabels={0}
                    margin={{top:0}}
                    segments={30}
                    maxValue={10}
                    minValue={0}
                    value={6.5}
                    startColor="#999"
                    endColor="#999"
                    needleColor="#333"
                    needleHeightRatio={0.6}
                    needleTransitionDuration={4000} 
                    needleTransition="easeElastic"
                    currentValueText="${value} Sec"
                    valueTextFontSize="15px"
                    textColor="#000"
                    ringWidth={15}
                />
            </ResponsiveContainer>
        );
        return (
            <div>
                <div className="root">
                    {/* First component */}
                    <Grid container spacing={0}>
                            <Grid item sm={3} xs={6} md={3}>
                                <Paper className="paper little">
                                    <span className="box-title">Latest Blocks</span>
                                    <div className="box-value">353533</div>
                                </Paper>
                            </Grid>
                            <Grid item sm={3} xs={6} md={3}>
                                <Paper className="paper little">
                                    <span className="box-title">Circulating Supply <img className="iconInfo" src={infoIcon} /></span>
                                    <div className="box-value"> 605,978,371 <img className="logoAlgo" src={algoLogo} /></div>
                                </Paper>
                            </Grid>
                            <Grid item sm={3} xs={6} md={3}>
                                <Paper className="paper little">
                                    <span className="box-title">Tradable Supply <img className="iconInfo" src={infoIcon} /></span>
                                    <div className="box-value"> 2,605,978,371 <img className="logoAlgo" src={algoLogo}/></div>
                                </Paper>
                            </Grid>
                            <Grid item sm={3} xs={6} md={3}>
                                <Paper className="paper little">
                                    <span className="box-title">Online Stake <img className="iconInfo" src={infoIcon} /></span>
                                    <div className="box-value "> 1,622,972,252 <img className="logoAlgo" src={algoLogo}/></div>
                                </Paper>
                            </Grid>
                        </Grid>                        
                </div>
                <div className="root with-margin-top">
                     {/* Second Component  */}
                     <Grid container spacing={0}>
                        <Grid item md={3} sm={3} xs={6}>
                            <Paper className="paper little">
                                <span className="box-title">Algo price</span>
                                <div className="center__container">
                                    <div className="box-value big-font">$ 0.76 <span className="rating-value">0.7 %</span></div> 
                                    <span className="market__container">Market Cap : 100.000.000</span> 
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item md={3} sm={3} xs={6}>
                            <Paper className="paper little">
                                <span className="box-title">Block transaction speed <img className="iconInfo" src={infoIcon} /></span>
                                <div className="chart__container">
                                    {renderSpeedChart}
                                </div>
                            </Paper>
                        </Grid> 
                        <Grid item md={6} sm={6} xs={12}>
                            <Paper className="paper little">
                                <span className="box-title side">Algo Daily transactions: <span className="t-blue">2535</span></span>
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
                    </Grid>
                </div>
            </div>
        ); 
    }
}
export default Overview;
