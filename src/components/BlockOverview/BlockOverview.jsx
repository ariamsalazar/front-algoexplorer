import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import './BlockOverview.css';
import algoLogo from '../../assets/images/algo.png';
import Filters from './../General/Filters';
import TableTransactions from './../General/TableTransactions';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      padding: '0 16px',
      marginTop: '64px'
    }
});

class BlockOverview extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {/* Component Title */}
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Block Overview</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Block Details Overview 2 components*/}
                <Grid container spacing={3}>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Round</span>
                            <span className="detail__value center">#511188</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Rewards</span>
                            <span className="detail__value center"><img className="logoAlgo" src={algoLogo}/> 25</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className="paper normal">
                            <span className="detail__title">Total Transactions</span>
                            <span className="detail__value center">26</span>
                        </Paper>
                    </Grid>
                    {/* Component Title */}
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Block Details</span>
                        </Paper>
                    </Grid>
                    {/* Block Details Overview 2 components*/}
                    <Grid item xs={6} >
                        <Paper className="paper normal">
                            <span className="detail__title white">Proposer <Link className="copy-link blue">Copy</Link></span>
                            <span className="detail__value small-black">CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className="paper normal">
                            <span className="detail__title">Created at:</span>
                            <span className="detail__value small-blue with-underline">Thu Feb 27 2020 12:06:56 GMT-0500 (Colombia Standard Time)</span>
                        </Paper>
                    </Grid>
                    {/* Block Details Overview 2 components */}
                    <Grid item xs={6} >
                        <Paper className="paper light">
                            <span className="detail__title blue">Block Hash:</span>
                            <span className="detail__value small-blue">CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className="paper light">
                            <span className="detail__title blue">Previous Block Hash:</span>
                            <span className="detail__value small-blue">CRLADAHJZEW2GFY2UPEHENLOGCUOU74WYSTUXQLVLJUJFHEUZOHYZNWYR4</span>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Transactions List */}
                <Grid container>
                    {/* Component Title */}
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <span className="title__main">Transactions</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Filters />
                            <TableTransactions/>
                            <Filters />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default withStyles(styles)(BlockOverview);
