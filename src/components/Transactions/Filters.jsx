import React from 'react';
import './Transactions.css';
import Link from '@material-ui/core/Button';

export default function Filters() {  
    return (
        <div className="header__list">
            Time period: 
            <select className="select__filter">
                <option value="grapefruit">Feb 25, 2019 - Feb 26, 2019</option>
                <option value="lime">Feb 25, 2020 - Feb 26, 2020</option>
                <option selected value="coconut">Mar 01, 2020 - Mar 26, 202</option>
            </select>
            <div className="container__pagination">
                1-25 of 9,912
                <Link className="prev__pagination"></Link>
                <Link className="next__pagination"></Link>
            </div>
        </div>
    ); 
}

