import React from 'react';
import './Filters.css';
import Link from '@material-ui/core/Button';

class Filters extends React.Component {
    render(){
        return (
            <div className="header__list">
                Filter: 
                <div class="select__style">
                    <select className="select__filter">
                        <option value="grapefruit">Type of transactions</option>
                        <option value="grapefruit">Tranfer</option>
                        {/* <option value="lime">Feb 25, 2020 - Feb 26, 2020</option>
                        <option selected value="coconut">Mar 01, 2020 - Mar 26, 202</option> */}
                    </select>
                    <div class="arrow"></div>
                </div>
                <div className="container__pagination">
                    1-25 of 9,912
                    <Link className="prev__pagination"></Link>
                    <Link className="next__pagination"></Link>
                </div>
            </div>
        ); 
    }
}
export default Filters;


