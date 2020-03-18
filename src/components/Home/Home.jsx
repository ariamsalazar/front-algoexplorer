import React from 'react';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Overeview from './../Overview/Overview';
import OvereviewSecond from './../Overview/OverviewSecond';
import LastestTransactions from './../LastestTransactions/LastestTransactions';
import LastestBlocks from './../LastestBlocks/LastestBlocks';

class Home extends React.Component {
    render(){
        return (
                <div className="root home">
                    {/* Overview component */}
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Paper className="paper"> 
                                <span className="title__main">Overview</span>
                            </Paper>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <Button className="float__btn av">Stats</Button>
                        </Grid> */}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className="paper less-padding" > 
                                <Overeview />
                            </Paper>
                            {/* <Paper className="paper less-padding" > 
                                <OvereviewSecond />
                            </Paper> */}
                        </Grid>
                    </Grid>
                    {/* Lastest Blocks / Transactions component */}
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className="paper less-padding">
                                <LastestTransactions/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className="paper less-padding">
                                <LastestBlocks/>
                            </Paper>
                        </Grid>
                    </Grid>
            </div>
        ); 
    }
}
export default Home;
