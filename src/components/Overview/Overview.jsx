import React from 'react';
import './Overview.css';
import { withStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ReactSpeedometer from "react-d3-speedometer";
import algoLogo from '../../assets/images/algo.png';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
        marginTop: '2rem',
        height: '2vh',
        padding: theme.spacing(5),
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

        /*Line Chart*/ 
        const renderLineChart = (
            <ResponsiveContainer width="100%" height={180}>
                <LineChart width={500} height="90%" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                    <Line type="monotone" dataKey="uv" dot={false} stroke="#999"  strokeWidth="2"/>
                    <CartesianGrid stroke={false} strokeDasharray="5 5" />
                    <XAxis dataKey="date" stroke="transparent" tick={{ fill: '#333' }} padding={{ left: 40, right: 40 }}/>
                    <YAxis stroke="transparent" tick={{ fill: '#333' }} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
        const renderSpeedChart = (
            <ReactSpeedometer
                maxSegmentLabels={0}
                segments={30}
                maxValue={10}
                minValue={0}
                value={2.5}
                startColor="#999"
                endColor="#999"
                needleColor="#333"
                height={180}
                width={300}
                needleHeightRatio={0.6}
                needleTransitionDuration={4000} 
                needleTransition="easeElastic"
                currentValueText="`${value} Sec"
                valueTextFontSize="25px"
                textColor="#000"
                ringWidth={15}
            />
        );
        return (
            <div className={classes.root}>
               {/* First component */}
               <div className="main__wrapper">
                    <div className="box-container">
                        <span className="box-title">Algo</span>
                        <div className="box-value">$ 0.76 <span className="rating-value">0.7 %</span></div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Circulating</span>
                        <div className="box-value"> <img className="logoAlgo" src={algoLogo} width="38"/> 605,978,371 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Tradable</span>
                        <div className="box-value"><img className="logoAlgo" src={algoLogo} width="38"/>2,605,978,371 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Online Stake</span>
                        <div className="box-value "><img className="logoAlgo" src={algoLogo} width="38"/> 1,622,972,252 </div>
                    </div>
                    <div className="box-container">
                        <span className="box-title with-icon">Rewards per Block per Algo</span>
                        <div className="box-value">0,002 Algos </div>
                        <div className="calculator-icon"></div>
                    </div>
               </div>
               {/* Second component */}
               <div className="main__wrapper__second">
                    <div className="box-container">
                        <div className="box-inside">
                            <span className="box-title">Total transactions</span>
                            <div className="box-value">$2,245,564</div>
                        </div>
                        <div className="box-inside">
                            <span className="box-title">Lastest Blocks</span>
                            <div className="box-value">3345454</div>
                        </div>
                    </div>
                    <div className="box-container with-padding">
                        <span className="box-title">Block transaction speed</span>
                        <div className="chart__container">
                           {renderSpeedChart}
                        </div>
                    </div>
                    <div className="box-container with-padding">
                        <   span className="box-title side">Daily transactions</span>
                            <Link className="link__open">Open Chart</Link>
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
                            <div className="chart__container">
                                {renderLineChart}
                            </div>
                    </div>
               </div>
            </div>
        ); 
    }
}
export default withStyles(styles)(Overview);
