import React from 'react';
import './RewardCalculator.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FaqList from './Fag';
class RewardCalculator extends React.Component {
    render(){
        return (
            <div>
                <div className="root intern more-padding">
                    {/* Component Title */}
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Paper className="paper">
                                <span className="title__main">Reward Calculator</span>
                            </Paper>
                        </Grid>
                        <Grid item xs={7}>
                            <Paper className="paper less-padding">
                                <div className="container__calculator">
                                    <div className="title__calculator">Enter your ALGO Amount
                                        <Button className="btn__white">Component Daily </Button>
                                    </div>
                                    <div className="container__flex">
                                        <div className="c-calc">300 A</div>
                                        <div className="b-calc">Calculate</div>
                                    </div>
                                </div>
                                <div className="filter__calculator">
                                
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper className="paper less-padding">
                                <div className="calc__values">Paricipant algos
                                    <div className="calc-active">26</div>
                                </div>
                                <div className="calc__values">Paricipant algos
                                    <div className="calc-active">26</div>
                                </div>
                                <div className="calc__values">Paricipant algos
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
