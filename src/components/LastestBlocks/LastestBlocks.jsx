import React from 'react';
import './LastestBlocks.css';
import BlockItem from './BlockItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class LastestBlocks extends React.Component {
    render(){
        return (
            <div className="list__container">
                <div className="root">
                    <Grid container spacing={0} className="title__container">
                        <Grid item xs={6}>
                            <span className="title-list">Lastest Transactions</span>
                        </Grid>
                        <Grid item xs={6} classaName="align-right">
                            <Button className="btn__more av">View all transaction</Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="list__scroll">
                   <BlockItem iconColorB="green"/>
                   <BlockItem iconColorB="purple"/>
                   <BlockItem iconColorB="green"/>
                   <BlockItem iconColorB="purple"/>
                   <BlockItem iconColorB="green"/>
                   <BlockItem iconColorB="purple"/>
                </div>
            </div>
        ); 
    }
}
export default LastestBlocks;

