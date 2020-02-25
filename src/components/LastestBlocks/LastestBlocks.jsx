import React from 'react';
import './LastestBlocks.css';
import BlockItem from './BlockItem';
import Button from '@material-ui/core/Button';

export default function LastestBlocks() {  
        return (
            <div className="list__container">
                <div className="title__container">
                    <span className="title-list">Lastest Blocks</span>
                    <Button className="btn__more">View all Blocks</Button>
                </div>
                <div className="list__scroll">
                   <BlockItem/>
                   <BlockItem/>
                   <BlockItem/>
                   <BlockItem/>
                   <BlockItem/>
                   <BlockItem/>
                </div>
            </div>
        ); 
}

