import React from 'react';
import './LastestBlocks.css';
import Grid from '@material-ui/core/Grid';
import './../../App.css';

class BlockItem extends React.Component {
    render(){
        console.log(this.props.iconColorB);
        return (
            <div className="list__item">
                <Grid container justify='space-between'>
                    <Grid item xs={2}>
                        <div className="picture__container">
                            <div className={ "picture_circular " + ( this.props.iconColorB || "")}></div>
                            <span className="time">05 secs ago</span>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <span className="field">Round: </span>
                        <span className="value blue" style={{textDecoration: 'underline'}}>543535</span><br/>
                    </Grid>
                    <Grid item xs={4}>
                        <span className="field">Proposer: </span>
                        <span className="value blue">R3483573H8IHUe...</span><br/>
                    </Grid>
                    <Grid item xs={2}>
                        <span className="field">Txs: </span>
                        <span className="value">757575</span><br/>
                    </Grid>
                </Grid>
            </div>
        ); 
    }
}
export default BlockItem;

