import React from 'react';
import './RewardCalculator.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FaqList from './Fag';
import algoLogo from '../../assets/images/algo.png';
import SliderRange from '../../components/General/SliderRange';
class RewardCalculator extends React.Component {
    render(){
        return (
            <div>
                <div className="root intern more-padding">
                    {/* Component Title */}
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Paper className="paper less-padding">
                                <span className="title__main">Reward Calculator</span>
                            </Paper>
                        </Grid>
                        <Grid item xs={7}>
                            <Paper className="paper no-padding">
                                <div className="container__calculator">
                                    <div className="title__calculator">Enter your ALGO Amount
                                        <div className="btn__white av">Component Daily <input type="checkbox" className="check-i"></input> </div>
                                    </div>
                                    <div className="container__flex">
                                        <div className="c-calc">300 <img className="logoAlgo" src={algoLogo}/></div>
                                        <div className="b-calc">Calculate</div>
                                    </div>
                                </div>
                                <div className="filter__calculator">
                                    <SliderRange/>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper className="paper less-padding">
                                <div className="calc__values">Paricipant algos
                                    <div className="calc-active">26</div>
                                </div>
                                <div className="calc__values">Rewards per Block:
                                    <div className="calc-active">0.25894</div>
                                </div>
                                <div className="calc__values">Block time:
                                    <div className="calc-active">26</div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className="root second more-padding">
                    <FaqList/>
                </div>
            </div>
        ); 
    }
}

export default RewardCalculator;
